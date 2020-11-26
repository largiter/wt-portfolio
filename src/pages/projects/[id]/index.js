import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import Layout from '../../../components/Layout/Layout';
import { projects } from '../../../content/projects';
import Home from '../../../components/Home/Home';

const Project = () => {
  const router = useRouter();
  // const { slug, title, desc, content } = projects[0];
  const [project, setProject] = useState(null);
  const [currentSlug, setCurrentSlug] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) setCurrentSlug(id);

    const currentProject = projects.find(
      (singleProject) => singleProject.slug === id
    );

    setProject(currentProject);

    // gsap.to('body', { duration: 1, opacity: 1 });
    // gsap.from("body", { duration: 1, x: "100%" });
  }, [router]);

  useEffect(() => {
    if (project === null) return;
    if (project === undefined || project.slug !== currentSlug) {
      router.push('/');
    }
  }, [project, currentSlug]);

  return (
    <Layout>
      <Home />
      <ProjectWrapper>
        {project &&
          project.content.map(({ type, contentTitle, contentBody }) => (
            <ContentBlock type={type}>
              <h2>{contentTitle}</h2>
              <ContentBody>
                {contentBody.map((bodyItem) => {
                  const objectKey = Object.keys(bodyItem)[0];
                  if (objectKey === 'text') {
                    return <p>{bodyItem.text}</p>;
                  }
                  if (objectKey === 'list') {
                    const { listTitle, listItems } = bodyItem.list;
                    return (
                      <ol>
                        <p>{listTitle}</p>
                        {listItems.map((listItem) => (
                          <li>{listItem}</li>
                        ))}
                      </ol>
                    );
                  }
                  if (objectKey === 'img') {
                    return <img src={bodyItem.img} />;
                  }
                  if (objectKey === 'titled') {
                    const { titledTitle, titledText } = bodyItem.titled;
                    return (
                      <div>
                        <h3>{titledTitle}</h3>
                        <p>{titledText}</p>
                      </div>
                    );
                  }
                  return false;
                })}
              </ContentBody>
            </ContentBlock>
          ))}
      </ProjectWrapper>
    </Layout>
  );
};

const ProjectWrapper = styled.main`
  color: ${(props) => props.theme.color.burgundy};
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.innerSpace};
  padding-top: 10em;
`;

const BlockLeft = css`
  & > h2 {
    text-align: left;
  }
`;

const BlockRight = css`
  & > h2 {
    text-align: right;
  }
`;

const ContentBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15em;

  h2 {
    font-size: 8em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  ${(props) => (props.type === 0 ? BlockLeft : BlockRight)};
`;

const ContentBody = styled.div`
  align-self: center;
  width: 65%;
`;

export default Project;

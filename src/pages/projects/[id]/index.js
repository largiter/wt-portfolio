import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import Layout from '../../../components/Layout/Layout';
import { projects } from '../../../content/projects';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const { slug, title, desc, content } = projects;

  useEffect(() => {
    if (slug !== id) {
      router.push('/');
      return;
    }

    gsap.to('body', { duration: 1, opacity: 1 });
  }, []);

  return (
    <Layout>
      <div>hello from index {id}</div>
      <ProjectWrapper>
        {content.map(({ type, contentTitle, contentBody }) => (
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
  width: 70%;
`;

export default Project;

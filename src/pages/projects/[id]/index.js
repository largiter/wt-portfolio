import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';
import Layout from '../../../components/Layout/Layout';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    gsap.to('body', { duration: 1, opacity: 1 });
  }, []);

  return (
    <Layout>
      <div>hello from index {id}</div>
    </Layout>
  );
};

export default Project;

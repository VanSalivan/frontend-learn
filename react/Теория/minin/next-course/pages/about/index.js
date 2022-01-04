import React from 'react'
import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout';

export default function About() {

  //Необходимо импортировать роутер Next(a)
  const linkClickHandler = () => {
    Router.push('/')
  };

  return (
    <MainLayout title={'About Page'}>
      <h1>About page</h1>

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </MainLayout>
  );
};
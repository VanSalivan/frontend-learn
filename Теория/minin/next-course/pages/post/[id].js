import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/Link';


export default function IdPost({ post: serverPost }) {
  const router = useRouter()
  const [post, setPost] = useState(serverPost);

  //Эффект для запроса если от сервера ничего не пришло
  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }

    if (!serverPost) {
      load()
    }

  }, [])

  // Loader
  if (!post) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts  "><a>Back to all Posts</a></Link>
    </MainLayout>
  )
};

//* getInitialProps - работает и на клиенте и сервере
// IdPost.getInitialProps = async ({ query, req }) => {
//   if (!req) { // request - если мы находимся не на сервере
//     return { post: null }
//   }

//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await response.json()
//   return { post: post }
// };

//* getServerSideProps - Вызывается только на СЕРВЕРНОЙ строне, никогда не вызывается на клиенте
export async function getServerSideProps({ query, req }) {

  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await response.json()
  return { props: { post: post } }
}
import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import Link from "next/link";

export default function Posts({ posts: serverPost }) {

  const [posts, setPosts] = useState(serverPost);

  //Эффект для запроса если от сервера ничего не пришло
  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts`)
      const data = await response.json()
      setPosts(data)
    }

    if (!serverPost) {
      load()
    }

  }, [])

  // Loader
  if (!posts) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return (
    <MainLayout title={'Post Page'}>
      <h1>Posts page</h1>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}


// Передаем инициализирие статиные данные | исполняется на СЕРВЕРЕ*
Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null }
  }

  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()
  return { posts: posts }
}
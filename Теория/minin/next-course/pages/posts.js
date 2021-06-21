import { MainLayout } from '../components/MainLayout';
// import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Posts(props) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch('http://localhost:4200/posts')
  //     const json = await response.json()
  //     setPosts(json)
  //   }

  //   load()
  // }, [])

  return (
    <MainLayout title={'Post Page'}>
      <h1>Posts page</h1>
      {/* <ul>
        {posts.map(post => {
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        })}
      </ul> */}
    </MainLayout>
  )
}


// Todo Разорбраться почему не передает значения в props
Posts.getInitialProps = async (ctx) => {
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()
  return { posts: posts }
}
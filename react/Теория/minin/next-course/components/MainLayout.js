import Link from 'next/link';
import Head from 'next/head';

export const MainLayout = ({ children, title = 'Next App' }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course </title>
        <meta name='keywords' content='ключевые слова' />
        <meta name='description' content='ключевые слова' />
      </Head>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/posts'><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      nav a {
        color:#fff;
        text-decoration: none;
      }

      main {
        padding-top: 60px; 
      }
      `}</style>
    </>
  );
};
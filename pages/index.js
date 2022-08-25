import { useState } from 'react';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css'


function Header({ title }) {
  // console.log(title)
  return <h1>{title ? title : 'Default Title'}</h1>;
}


function HomePage({ allPostsData }) {
  const [likes, setLikes] = useState(0);

  const names = ['Senior at Clarkson University', 'Studying Computer Science and Mathematics', 'resume link posting soon'];

  function handleClick() {
    console.log("increment like count")
    setLikes(likes + 1);
  }


  return <div>
    <Link href="/posts/first-post">helo</Link>
    <Header title="Alex Cohen" />
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Like({likes})</button>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>

  </div>
}

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default HomePage;
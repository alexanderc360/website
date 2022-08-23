import { useState } from 'react';
import Link from 'next/link';

function Header({ title }) {
  // console.log(title)
  return <h1>{title ? title : 'Default Title'}</h1>;
}


function HomePage() {
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
  </div>
}

export default HomePage;
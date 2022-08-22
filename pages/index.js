import { useState } from 'react';

function Header({ title }) {
  // console.log(title)
  return <h1>{title ? title : 'Default Title'}</h1>;
}


function HomePage() {
  const [likes, setLikes] = useState(0);

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    console.log("increment like count")
    setLikes(likes + 1);
  }


  return <div>
    <Header title="Develop. Preview. Shit. 🚀" />
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Like({likes})</button>
  </div>
}

export default HomePage;
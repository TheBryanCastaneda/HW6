import React from "react";

export default function App() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${Math.floor(Math.random() * 100) + 1}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(posts);

  return (
    <>
      <h1>Dog Generator</h1>
      {posts ? (
        <>
          <img src={posts.message} alt="Random Dog" />
          <h2><b>Species: </b>{}</h2>
          <h2><b>Gender: </b>{}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
import React from "react";

// If nothing changes in this functional component still it is rendering so that's why we wrap the callback function with React.memo(() => {})
const Home = React.memo(({ props }) => {
  console.log("Home rendering");
  return <div>Home</div>;
});

export default Home;

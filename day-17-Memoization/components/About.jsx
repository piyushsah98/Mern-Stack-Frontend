import React from "react";

const About = ({ props }) => {
  console.log("About rendering...");
  return <div>About</div>;
};

export default React.memo(About, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
  // Same id aa rha hai isliye ye re-render nhi ho rha 
});

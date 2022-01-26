import { useParams } from "react-router";

const Post = () => {
  const params = useParams();

  return (
    <div>
      <h1>POST {params.id}</h1>
      <h1>Name: {params.name}</h1>
    </div>
  );
};

export default Post;

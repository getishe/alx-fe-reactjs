import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h2>Displaying blog post with ID: {id}</h2>;
}

export default BlogPost;

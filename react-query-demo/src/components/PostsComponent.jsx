import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isError, error, isLoading, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 5 * 60 * 1000, // cache data for 5 minutes
      staleTime: 30 * 1000, // consider data fresh for 30 seconds
      refetchOnWindowFocus: false, // prevent automatic refetch on window focus
      keepPreviousData: true, // keep previous data while refetching
    }
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

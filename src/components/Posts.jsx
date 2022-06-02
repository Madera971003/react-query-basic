/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { useQuery } from 'react-query';

export default function Posts({ setPostId }) {

  const { 
    data: posts,
    error,
    isLoading,
    isFetching
  } = useQuery(
    ['post'],
    getPosts,
    {
      //refetchOnWindowFocus: false, //No hara refetch cuando se cambie de ventana y se regrese
      //refetchInterval: 2000, //Realizara un refetch cada cierto tiempo
      //staleTime: Infinity, //Siempre se considerara datos actualizados
      staleTime: 10000, //Tiempo que se considerara como datos actualizados
      cacheTime: 3000, //Tiempo que se mantendra el cache y despues de ese tiempo se borrara
    }
  );

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getPosts();
  //       setPosts(data);
  //       setError(null);
  //     } catch (error) {
  //       setError(error);
  //       setPosts(null);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Posts...
      </div>
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error fetching posts: {error.message}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts: {isFetching && <span className="spinner-border"></span>}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

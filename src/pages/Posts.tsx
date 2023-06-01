import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Post from '../components/Post';
import Body from '../components/Body';

interface Postable {
  id: string;
  body: string;
  timestamp: Date;
  author: string;
}

const BASE_API_URL = import.meta.env.VITE_APP_BASE_API;

export default function Posts() {
  const [posts, setPosts] = useState<Postable[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_API_URL}/api/posts`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    })();
  }, []);

  return (
    <Body sidebar>
      {posts === undefined ? (
        <Spinner animation="grow" />
      ) : (
        <>
          {posts.map((post) => (
            <Post post={post} key={post.id}></Post>
          ))}
        </>
      )}
    </Body>
  );
}

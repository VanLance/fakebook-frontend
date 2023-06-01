import { useEffect, useState, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Post from '../components/Post';
import Body from '../components/Body';
import Container from 'react-bootstrap/esm/Container';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

interface Postable {
  id: string;
  body: string;
  timestamp: Date;
  author: string;
}

const BASE_API_URL = import.meta.env.VITE_APP_BASE_API;

export default function Posts({
  endpoint,
  heading,
}: {
  endpoint: string;
  heading: string;
}) {
  const [posts, setPosts] = useState<Postable[]>();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    { !user.token ? navigate('/login') : ''; }
    (async () => {
      const res = await fetch(`${BASE_API_URL}${endpoint}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    })();
  }, []);

  return (
    <Body postForm sidebar>
      {posts === undefined ? (
        <Spinner animation="grow" />
      ) : (
        <Container>
          <h3>{heading}</h3>
          {posts.map((post) => (
            <Post post={post} key={post.id}></Post>
          ))}
        </Container>
      )}
    </Body>
  );
}

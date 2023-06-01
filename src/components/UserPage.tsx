import { useParams } from 'react-router-dom';
import Posts from '../pages/Posts';

export default function UserPage() {
  const { username } = useParams();

  return (
    <Posts endpoint={`/posts/${username}`} heading={`${username}'s Page`} />
  );
}

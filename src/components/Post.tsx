import { Link } from 'react-router-dom';

interface Postable {
  body: string;
  timestamp: Date;
  author: string;
}

interface PostProps {
  post: Postable;
  key: string;
}
export default function Post({ post }: PostProps) {
  return (
    <div>
      <Link to={`/user/${post.author}`} className="Post">
         <p>{post.author}</p>
      </Link>
      <p>{post.body}</p>
      <p>
        <small>{post.timestamp.toLocaleString()}</small>
      </p>
    </div>
  );
}

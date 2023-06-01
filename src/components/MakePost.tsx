import { useContext, useRef } from 'react';
import { AuthContext } from '../contexts/AuthProvider';


const BASE_API_URL = import.meta.env.VITE_APP_BASE_API;

export default function MakePost() {
  const { user } = useContext(AuthContext);
  const postField = useRef<HTMLInputElement>(null);


  async function handlePostForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch(`${BASE_API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `bearer ${user.token}`,
      },
      body: JSON.stringify({
        postField,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.error('Invalid Post Info');
    }
    return Promise.resolve('');
  }

  return (
    <form onSubmit={handlePostForm} className='PostForm'>
      <label>
        Post:
        <br />
        <input type="text" ref={postField} placeholder="What's on your mind?"/>
      </label>
    </form>
  );
}

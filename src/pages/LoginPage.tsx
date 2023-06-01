import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

import Body from '../components/Body';

export default function LoginPage() {
  const { user, verifyUserApi } = useContext(AuthContext);
  const navigate = useNavigate();
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(user.token) navigate('/')
  })

  async function handleLoginForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const loginInfo = {
      username: String(usernameField.current?.value),
      password: String(passwordField.current?.value),
    };
    verifyUserApi(loginInfo);
    if (user.token) {
      navigate('/');
    }
    console.log(user);
  }

  return (
    <Body postForm={false} sidebar={false}>
      <h2>LoginPage</h2>
      <form onSubmit={handleLoginForm}>
        <label>
          Username:
          <br />
          <input type="text" ref={usernameField} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input type="password" ref={passwordField} />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </Body>
  );
}

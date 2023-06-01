import { createContext, useState } from 'react';

export const AuthContext = createContext<UserContext>({} as UserContext);

interface UserContext {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  verifyUserApi: ({ username, password }: User) => Promise<string>;
  logout: () => void;
}

export interface User {
  username: string;
  password?: string;
  token?: string;
  loggedIn?: boolean;
}

export default function AuthProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  
  const [token, setToken] = useState<User>({
    token: '',
    username:'',
    loggedIn: false,
  });
  
  async function verifyUserApi({
    username,
    password,
  }: {
    username: string;
    password?: string;
  }) {
    const res = await fetch(
      `https://matrix-116-fakebook.onrender.com/api/verifyuser`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      const token = data[0]['user token'];
      setToken({username:username, token:token, loggedIn:true})
      
    } else {
      console.error('Invalid User Info');
    }
    return Promise.resolve('')
  }

  function logout(){
    setToken({username:'',token:'',loggedIn:false})
  }
  const value = {
    user: token,
    setUser: setToken,
    verifyUserApi,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

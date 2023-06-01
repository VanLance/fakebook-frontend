import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import MakePost from './MakePost';


interface BodyProps {
  postForm: boolean
  sidebar: boolean;
  children: JSX.Element[] | JSX.Element;
}

export default function Body({ postForm, sidebar, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <Container className="Content">
          { postForm && <MakePost /> }
          {children}
        </Container>
      </Stack>
    </Container>
  );
}

import Posts from "../pages/Posts";


export default function AllPosts() {
  return (
    <Posts endpoint={`/posts`} heading={`Posts`}/>
  )
}

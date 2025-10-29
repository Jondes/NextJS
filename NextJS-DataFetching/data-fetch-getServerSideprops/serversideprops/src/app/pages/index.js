import Link from 'next/link';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (  
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
                {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: { posts },
  };
}

export default Home;

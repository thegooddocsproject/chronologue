export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://chronologue.netlify.app/api/server')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

export default function ApiCall({posts}) {
    console.log(posts)
  return (
    <div>
        
        <ul >
      {posts.map((post) => (
          <>
        <li key={Math.random()}>{post.years}</li>
        <li>{post.locations}</li>
        <li>{post.locationsAndYears}</li>
        </>
        ))}
        </ul>
      

    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://chronologue.netlify.app/api/server')
    const posts = await res.json()

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

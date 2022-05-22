export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/all");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function ApiCall({ posts }) {
  return (
    <>
        <ul>
          <li>Event Name</li>
          <li>Continents</li>
          <li>Date/Time</li>
        </ul>

        {posts.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.events[0].event}</li>
            <li>{item.continent}</li>
            <li>{item.events[0].date}</li>
          </ul>
        );
      })}
    </>
  );
}

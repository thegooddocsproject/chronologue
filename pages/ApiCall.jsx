import Layout from "./components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://chronologue.netlify.app/api/server");
  const posts = await res.text();
  // .json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

/**
 * 
 * @param {*} param0 
 * @returns JSX
 * 
 * @todo
 * handle clicks event to call api and pass the event details to <EventDetails/>
 * API req caching for performance? 
 */
export default function ApiCall({ posts }) {
  return (
    <>
      <Layout>
        <ul>
          <li>Event Name</li>
          <li>Continents</li>
          <li>Date/Time</li>
        </ul>

        
        {/* {posts.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.events[0].event}</li>
            <li>{item.continent}</li>
            <li>{item.events[0].date}</li>
          </ul>
        );
      })} */}
      </Layout>
    </>
  );
}

import Layout from "./components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://chronologue.netlify.app/api/all");
  const posts = await res.json();
  let year1 = posts.map((x)=> x.year)
  console.log(year1);
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

        <table>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </table>
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

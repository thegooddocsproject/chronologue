import Layout from "./components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://chronologue.netlify.app/api/all");
  const posts = await res.json();
 
  await console.log(posts);

  let data = [1,2,3,4,5,6,7,8];

  return {
    props: {
      data,
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
export default function ApiCall({ data }) {
  return (
    <>
      <Layout>
        <table>
          <tr>
            <th>Event Name</th>
            <th>Continents</th>
            <th>Date/Time</th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
              </tr>
            );
          })}


        </table>

      </Layout>
    </>
  );
}

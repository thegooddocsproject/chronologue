import Layout from "./components/Layout";
import style from './ApiCall.module.css';

export async function getStaticProps() {
  const res = await fetch("https://chronologue.netlify.app/api/all");
  const posts = await res.json();

  await console.log(posts);

  let data = posts;

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
    <Layout>
      <section className={style.section}>
        <input type="text" placeholder="Search" />
        <table className={style.table}>
          <tr>
            <th>Event Name</th>
            <th>Continents</th>
            <th>Date/Time</th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.event}</td>
                <td>{item.continent}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </Layout>
  );
}

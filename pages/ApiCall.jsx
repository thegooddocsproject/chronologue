import Layout from "./components/Layout";
import style from './ApiCall.module.css';
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/all");
  const posts = await res.json();

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
  function reRoute(params) {
    console.log('rerouted to event details page, fetched the right api end point based on entry')
    Router.push()
  }

  let onlyYear = data.map((x)=> new Date(x.date).getFullYear())
  console.log(onlyYear)
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
                <td>
                  {/* one of the year date parsing is set 1 year backward. Ex: 2024 -> 2023, 2016->2015, 3000->2999,. Not sure why and idk if i can rely on JS date parsing functions, might just need the raw year from API > use 3rd paty lib date/time lib?*/}
                  <Link 
                href={`/event/${item.continent}/${new Date(item.date).getFullYear()}`} 
                >
                  {item.event}
                  </Link>
                  </td>
                <td>
                  {item.continent}
                </td>
                <td>
                  {item.date}
                  </td>
              </tr>
            );
          })}
        </table>
      </section>
    </Layout>
  );
}

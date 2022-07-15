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
  }
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
              // <Link href='EventDetails' key={index}>
              // <tr >
              //   <td>{item.event}</td>
              //   <td>{item.continent}</td>
              //   <td>{item.date}</td>
              // </tr>
              // </Link>
              <div onClick={()=> reRoute()} key={index}>
              <tr >
                <td>{item.event}</td>
                <td>{item.continent}</td>
                <td>{item.date}</td>
              </tr>
              </div>
            );
          })}
        </table>
      </section>
    </Layout>
  );
}

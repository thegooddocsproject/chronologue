import Layout from "./components/Layout";
import style from "./ApiCall.module.css";
import Link from "next/link";

/**
 * NOTE: Netlify API is showing old API data which will lead to some page crashes due to invalid routes and data. Need to sync it with localhost
 */
let netlifyUrl = "https://chronologue.netlify.app";
let url = "http://localhost:3000";

export async function getStaticProps() {
  const res = await fetch(`${netlifyUrl}/api/all`);
  const data = await res.json();

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
    console.log(
      "rerouted to event details page, fetched the right api end point based on entry"
    );
    Router.push();
  }

  let onlyYear = data.map((x) => new Date(x.date).getFullYear());
  console.log(onlyYear);
  return (
    <Layout>
      <section className={style.section}>
        <input type="text" placeholder="Search" />
        <p>All listed results</p>

        <table
          className={style.table}
        >
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Continents</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {/* one of the year date parsing is set 1 year backward. Ex: 2024 -> 2023, 2016->2015, 3000->2999,. Not sure why and idk if i can rely on JS date parsing functions, might just need the raw year from API > use 3rd paty lib date/time lib?*/}
                    <Link
                      href={`/event/${item.continent}/${new Date(
                        item.date
                      ).getFullYear()}`}
                    >
                      {item.event}
                    </Link>
                  </td>
                  <td>{item.continent}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

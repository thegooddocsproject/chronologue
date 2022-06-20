import React from "react";
import Layout from "./components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router'
import style from "./EventDetails.module.css";

export async function getStaticPaths() {
  return {
    paths: [
      { params: {EventDetails: 'america'} }
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps() {
  /**
   * TODO: make URL query dynamic based on a state, or user clicks
   * Include Year + Continent keys in the server data route?
   */
  const res = await fetch(
    "https://chronologue.netlify.app/api/year/1957/location/europe"
  );
  const data = await res.json();
  // console.log(data)

  return {
    props: {
      data,
    },
  };
}

export default function EventDetails({ data }) {
  console.log(data);
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
      <section className={style.eventContainer}>
        <Link href="/ApiCall">
          <p>Search Results</p>
        </Link>
        <input type="text" placeholder="Search" />
        <div className={style.eventContainer_flex}>
          <div>
            <img src={null} alt="" />
            <h2>{null}</h2>
            <p>Date published {null}</p>
            <h3>Continent</h3>
            <p>{null}</p>
          </div>
          <div>
            <h3>Related Events</h3>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
            <div>
              <img src={null} alt="" />
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

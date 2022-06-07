import React from "react";
import Layout from "./components/Layout";

import style from "./../styles/Community.module.css";

export default function Community() {
  return (
    <div>
      <Layout>
        <section className={style.intro}>
          <h2>The Good Docs Project Community</h2>
          <p>
            We are a community of technical writers, developers, UX designers,
            and more who work together to make software documentation better.
            Whether you are new to documentation or a seasoned technical writer,
            joining our community will give you opportunities to mentor and be
            mentored by others, build your professional network, improve your
            documentation skills, and help make software documentation better.
          </p>
          <button className={style.intro_button}>Learn more about us</button>
        </section>
        <section className={style.work}>
          <h2>What we do</h2>
          <div className={style.work_flex}>
            <div>
              <p>image</p>
              <p>
                Our goal is to serve as an example that templateers and
                documentarians can use to demonstrate what good docs look like.
              </p>
            </div>
            <div>
              <p>image</p>
              <p>
                Community members have read access to our github repositories
              </p>
            </div>
            <div>
              <p>image</p>
              <p>Participate in our forums and vote on motions</p>
            </div>
          </div>
        </section>
        <section className={style.contribute}>
          <h2 className={style.contribute_title}>Get Involved</h2>
          <div className={style.contribute_flex}>
            <div>
              <h3>How to join</h3>
              <p>
                Our project is organized into small working groups of about 2-10
                people who collaborate together to work on key project
                initiatives and tasks. For that reason, one of the best ways you
                can get started is to look at our list of working groups and
                decide which groups you might want to join and contribute to.
              </p>
              <button>List of working groups</button>
            </div>
            <p>image</p>
          </div>

          <div className={style.contribute_flex}>
            <div>
              <h3>Develop and Contribute</h3>
              <p>
                You can find out how to contribute to these docs in our
                Contribution Guidelines. If you want to get more involved by
                contributing to The Good Docs Project, join us here:
              </p>
              <button>Slack Join Link</button>
            </div>
            <p>image</p>
          </div>

          <div className={style.contribute_flex}>
            <div>
              <h3>Learn and Connect</h3>
              <p>
                Using or wanting to use The Good Docs Project? Find out more
                here:
              </p>
              <ul>
                <li>
                  GitHub Organization: All projects for this organization.
                </li>
                <li>Primary Maillng List: Development Discussion</li>
                <li>Twiiter: Follow us on Twitter to get the latest news</li>
              </ul>
            </div>
            <p>image</p>
          </div>
        </section>
      </Layout>
    </div>
  );
}

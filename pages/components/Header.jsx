import style from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>

      <section className={style.welcome}>
        <div className={style.welcome_inner}>
          <h1>Search the Chronologue project</h1>
          <div>
            <input className={style.welcome_input} type="text" />
            <button className={style.welcome_button}>search</button>
          </div>
        </div>
        <div>
          <p>image</p>
        </div>
      </section>

      <section className={style.learn}>
        <div>image</div>
        <div>
        <h2>Learn about the project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          illum nam architecto dolor quo, similique blanditiis quia? Dolor ipsum
          sequi officia modi et maxime mollitia, fugiat corrupti doloremque eum?
          Provident?
        </p>
        <Link href="https://github.com/thegooddocsproject/chronologue">
          <button className={style.learn_button}>Learn more about the project</button>
        </Link>

        </div>
      </section>

      <section className={style.join}>
        <div>
          image
        </div>
        <div>
          <h2>Learn about the Chronologue Project</h2>
          <p>
            The Chronologue Project is dedicated to growing our collective
            knowldge by sharing direct viewing epeirences made possible by the
            telescope
          </p>
          <button className={style.join_button}>Join the community and contribute</button>
        </div>
      </section>

      <section className={style.benefits}>
        <h2>Take the fastlane to better documentation with the Good Docs Project</h2>
        <h3>Your journey begins with a search</h3>
        <div className={style.benefits_carousel}>
          <div className={style.benefits_carousel_item}>
            img
            <h4>Community</h4>
            <ul>
              <li>300+ Active Members</li>
              <li>Professionals from all industries</li>
            </ul>
          </div>
          <div className={style.benefits_carousel_item}>
            image
            <h4>Documentation</h4>
            <ul>
              <li>Industry documentation templates</li>
              <li>Created and polished by professionals</li>
              <li>Worldwide</li>
            </ul>
          </div>
          <div className={style.benefits_carousel_item}>
            image
            <h4>Skill Improvement</h4>
            <ul>
              <li>Learn the why and how</li>
              <li>Improvement your organization&lsquo;s documentation process</li>
              <li>More you time!</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

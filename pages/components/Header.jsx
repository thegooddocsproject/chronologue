import style from "./../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={style.banner}>
        <p>
          The Chronologue project is still in development. Join us and develop
          the telescope of the future!
        </p>
      </div>

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

      <div className={style.learn}>
        <h2>Learn about the project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          illum nam architecto dolor quo, similique blanditiis quia? Dolor ipsum
          sequi officia modi et maxime mollitia, fugiat corrupti doloremque eum?
          Provident?
        </p>
        <Link href="https://github.com/thegooddocsproject/chronologue">
          <button>Learn more about the project</button>
        </Link>
      </div>

      <div>
        <h2>What we do</h2>
      </div>
    </>
  );
}

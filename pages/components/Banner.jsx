import React from "react";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={style.banner}>
      <p>
        The Chronologue project is a sample, completely fictional open source
        project used to create examples of typical open source project
        documentation. For more information, or to contribute, join the Good
        Docs community!
      </p>
    </div>
  );
}

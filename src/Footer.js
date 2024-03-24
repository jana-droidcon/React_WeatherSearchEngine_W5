import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by
        <a
          href="https://github.com/jana-droidcon"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Jana Hille
        </a>
        , published on
        <a
          href="https://github.com/jana-droidcon/React-week-4"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>
        , hosted on
        <a
          href="https://weathersearchengine-janahille.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        .
      </p>
    </div>
  );
}

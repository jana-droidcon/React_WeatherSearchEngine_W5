import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/jana-droidcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jana Hille
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/jana-droidcon/React_WeatherSearchEngine_W5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        , hosted on{" "}
        <a
          href="https://react-weathersearchengine-w5.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}

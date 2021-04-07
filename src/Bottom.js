import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Bottom.css";


export default function Bottom() {
  return (
    <div className="Bottom">
      <p className="bottom">
        <a
          href="https://github.com/marielacordeiro/my-cute-project"
          target="_blank" rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Mariela Cordeiro
      </p>
    </div>
  );
}
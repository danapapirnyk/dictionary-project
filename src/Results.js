import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="shadow">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, index) => {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

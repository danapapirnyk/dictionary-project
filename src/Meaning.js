import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning shadow">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <span className="definition">{definition.definition}</span>
            <br />
            <span className="example">{definition.example}</span>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}

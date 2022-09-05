import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="col-2 synonyms-list" key={index}>
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

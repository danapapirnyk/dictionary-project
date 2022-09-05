import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunset");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey =
      "563492ad6f91700001000001f2c2298f011d408fbed16b07fa0f6765";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChanges(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="shadow">
          <h2>What word do you want to look up?</h2>
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleWordChanges}
            defaultValue="sunset"
          />
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResultCompMB from "../../components/SearchResultCompMB";
import { fetchMusicBrainzArtists } from "../../redux/actions/musicBrainzActions";
import { useDispatch } from "react-redux";

const MusicBrainz = () => {
  const [searchText, setSearchText] = useState("");
  const refInputText = useRef(null);
  const dispatch = useDispatch();

  const searchFunction = (e) => {
    e.preventDefault();
    setSearchText(refInputText.current.value);
  };

  useEffect(() => {
    if (searchText !== null && searchText !== "") {
      dispatch(fetchMusicBrainzArtists(searchText));
    }
  }, [dispatch, searchText]);
  return (
    <div className="container">
      <section className="search-section">
        <div className="logo-page">
          <img src="/images/musicBrainz.svg" alt=" music brainz" />
        </div>
        <form onSubmit={searchFunction} className="search-bar">
          <input
            type="text"
            placeholder="Search your favourite Artist"
            ref={refInputText}
          />

          <Button variant="contained" className="button-search" type="submit">
            <SearchOutlinedIcon className="icon" />
          </Button>
        </form>
      </section>
      <section className="result-section grid-box">
        <SearchResultCompMB />
      </section>
    </div>
  );
};

export default MusicBrainz;

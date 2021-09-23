import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResultCompMB from "../../components/SearchResultCompMB";
import { fetchMusicBrainzArtists } from "../../redux/actions/musicBrainzActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MusicBrainz = () => {
  const [searchText, setSearchText] = useState("");
  const refInputText = useRef("");
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.musicBrainz.artists);

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <p>{artists.length > 0 ? "Search Results" : null} </p>
          <Button variant="contained" className="button-search" type="button">
            <NavLink to="/favourites">Favourite</NavLink>
          </Button>
        </div>
        {artists.length > 0 ? (
          artists.map((artist, index) => {
            return (
              <SearchResultCompMB key={index} artist={artist} index={index} />
            );
          })
        ) : (
          <div
            style={{ display: "grid", placeItems: "center", minHeight: "50vh" }}
          >
            <h1 style={{ color: "grey" }}>Search Your Favourite Author... </h1>
            <SearchOutlinedIcon
              style={{ fontSize: "15rem", color: "grey", opacity: ".5" }}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default MusicBrainz;

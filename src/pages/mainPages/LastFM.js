import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResultComp from "../../components/SearchResultComp";
import { fetchArtists } from "../../redux/actions/lastFMActions";
import { useDispatch } from "react-redux";

const LastFM = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const searchFunction = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchText !== null) {
      dispatch(fetchArtists(searchText));
    }
  }, [dispatch, searchText]);
  return (
    <div className="container">
      <section className="search-section">
        <div className="logo-page">
          <img src="/images/lastfm.jpg" alt="lastfm music" />
        </div>
        <form onSubmit={searchFunction} className="search-bar">
          <input
            type="text"
            placeholder="Search your favourite Artist"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <Button variant="contained" className="button-search" type="submit">
            <SearchOutlinedIcon className="icon" />
          </Button>
        </form>
      </section>
      <section className="result-section grid-box">
        <SearchResultComp />
      </section>
    </div>
  );
};

export default LastFM;

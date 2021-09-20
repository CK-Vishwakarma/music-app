import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Button } from "@material-ui/core";
import ShortListComp from "./ShortListComp";

const SearchResultComp = () => {
  const [favArtist, setFavArtist] = useState([]);

  const addToShortList = (name) => {
    setFavArtist([...favArtist, name]);
  };

  const artists = useSelector((state) => state.musicBrainz.artists.releases);

  if (artists) {
    const artistList = artists.map((artist, index) => {
      const { name } = artist;
      // console.log(artist);
      // console.log(name);
      return (
        <li key={index}>
          {/* <div className="artist-div">
          <span>{<LibraryMusicIcon />}</span>
          <p>{}</p>
        </div>
        <Button
          variant="contained"
          className="button-search"
          type="button"
          onClick={() => addToShortList()}
        >
          <AddIcon />
        </Button> */}
        </li>
      );
    });
  }

  return (
    <>
      <h4>page</h4>
      {/* <article className="grid-box result-comp">
        <div className="labels">
          <p
            className={
              artists.length > 0 ? " search-res-text open" : "search-res-text"
            }
          >
            Search Result
          </p>
          <Button
            variant="contained"
            className="button-search"
            type="button"
            onClick={handleShortList}
          >
            Show short-list
          </Button>
        </div>
        {artists.length > 0 ? (
          <>
            <ul className="artist-list"> {artistList} </ul>
          </>
        ) : (
          <>
            <h1>Search Your Favourite Author...</h1>
            <SearchOutlinedIcon className="icon" />
          </>
        )}
      </article> */}
    </>
  );
};

export default SearchResultComp;

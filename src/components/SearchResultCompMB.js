import React, { useEffect, useState } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Releases from "./Releases";
import { setFavourite } from "../redux/actions/musicBrainzActions";

const SearchResultCompMB = ({ artist, index }) => {
  const dispatch = useDispatch();
  const [showReleasesDrop, setShowReleasesDrop] = useState(false);
  const [favArtist, setFavArtist] = useState([]);
  // console.log(showReleases);

  const addToFavList = (artist) => {
    setFavArtist([...favArtist, artist]);
  };
  console.log(favArtist);

  const showReleasesFunction = (showReleases) => {
    setShowReleasesDrop(!showReleasesDrop);
  };
  const artistList = (
    <li key={index}>
      <div className="list-info">
        <div className="artist-div">
          <span>{<LibraryMusicIcon />}</span>
          <p>{artist.title}</p>
        </div>
        <div>
          <Button
            variant="contained"
            className="btn button-search"
            type="button"
            onClick={showReleasesFunction}
          >
            {showReleasesDrop ? "Hide Releases" : "Show Releases"}
          </Button>
          <Button
            style={{ marginLeft: "15px" }}
            variant="contained"
            className=" btn button-search"
            type="button"
            onClick={() => addToFavList(artist)}
          >
            Add To Favourate
          </Button>
        </div>
      </div>

      {showReleasesDrop ? <Releases /> : null}
    </li>
  );

  useEffect(() => {
    if (favArtist.length > 0) {
      dispatch(setFavourite(favArtist));
    }
  }, [dispatch, favArtist]);
  return (
    <>
      <article className="grid-box mb-result-comp">
        <ul className="artist-list">{artistList}</ul>
      </article>
    </>
  );
};

export default SearchResultCompMB;

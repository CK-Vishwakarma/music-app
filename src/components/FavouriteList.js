import React, { useState } from "react";
import { removeFavourite } from "../redux/actions/musicBrainzActions";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Releases from "./Releases";
const FavouriteList = ({ list }) => {
  const dispatch = useDispatch();
  const [showReleasesDrop, setShowReleasesDrop] = useState(false);

  const removeFavArtist = (listId) => {
    dispatch(removeFavourite(listId));
  };

  const showReleasesFunction = () => {
    setShowReleasesDrop(!showReleasesDrop);
  };
  return (
    <>
      <li key={list.id}>
        <div className="list-info">
          <div className="artist-div">
            <LocalActivityIcon />

            <p>{list.title}</p>
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
              onClick={() => removeFavArtist(list.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </li>
      {showReleasesDrop ? <Releases title={list.title} /> : null}
    </>
  );
};

export default FavouriteList;

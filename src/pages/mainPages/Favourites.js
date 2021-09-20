import React from "react";
import { useSelector } from "react-redux";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeShortList } from "../../redux/actions/lastFMActions";

const Favourites = () => {
  const dispatch = useDispatch();

  const favList = useSelector((state) => state.shortList.list);

  const removeFavArtist = (list) => {
    dispatch(removeShortList(list));
  };

  const renderFavList = favList.map((list, index) => {
    return (
      <li key={index}>
        <div className="left-side">
          <LocalActivityIcon />
          <p>{list}</p>
        </div>
        <div className="right-side">
          <Button variant="contained" className="button-search" type="button">
            Show Releases
          </Button>
          <Button
            variant="contained"
            className="button-search"
            type="button"
            onClick={() => removeFavArtist(list)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </li>
    );
  });
  return (
    <section className="container-fluid favourites">
      <div className="container">
        <p className="fav-logo">Favourites</p>
      </div>
      <hr />
      {favList.length > 0 ? (
        <>
          <article className="container fav-article">
            <p>Artist Name</p>
            <ul>{renderFavList}</ul>
          </article>
        </>
      ) : (
        <p className="empty-text-fav">No Favourite Artist</p>
      )}
    </section>
  );
};

export default Favourites;

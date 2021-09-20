import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDispatch } from "react-redux";
import { removeShortList } from "../redux/actions/lastFMActions";

const ShortListComp = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const shortList = useSelector((state) => state.shortList.list);

  const removeFavArtist = (list) => {
    dispatch(removeShortList(list));
  };

  const renderShortList = shortList.map((list, index) => {
    return (
      <li key={index}>
        <div className="fav-artist-div">
          <span>{<LocalActivityIcon />}</span>
          <p>{list}</p>
        </div>
        <Button
          variant="contained"
          type="button"
          onClick={() => removeFavArtist(list)}
        >
          <BackspaceIcon />
        </Button>
      </li>
    );
  });
  const closeModalFunction = () => {
    setOpenModal(false);
  };

  return (
    <article className="short-list-modal">
      <Button
        onClick={closeModalFunction}
        variant="contained"
        type="button"
        className="close-btn"
      >
        <CloseIcon className="close-icon" />
      </Button>
      {shortList.length > 0 ? (
        <>
          <div className="action-labels">
            <p className="artist-name">Artist Name</p>
            <p className="artist-name">Remove</p>
          </div>

          <ul className="fav-artist-list">{renderShortList}</ul>
        </>
      ) : (
        <div className="empty-div">
          <p>No ShortListed Artists</p>
        </div>
      )}
    </article>
  );
};

export default ShortListComp;

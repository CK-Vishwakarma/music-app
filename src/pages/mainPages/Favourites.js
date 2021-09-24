import React from "react";
import { useSelector } from "react-redux";

import FavouriteList from "../../components/FavouriteList";

const Favourites = () => {
  const favList = useSelector((state) => state.favouriteList.favouriteList);
  // console.log(favList);

  const renderFavList = favList.map((list, index) => {
    return <FavouriteList key={index} list={list} />;
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

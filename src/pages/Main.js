import React from "react";
import { Switch, Route } from "react-router-dom";
import LastFM from "./mainPages/LastFM";
import MusicBrainz from "./mainPages/MusicBrainz";
import Favourites from "./mainPages/Favourites";

const Main = () => {
  return (
    <main className="container-fluid">
      <Switch>
        <Route exact path="/" exact component={LastFM} />
        <Route path="/lastfm" exact component={LastFM} />
        <Route path="/musicbrainz" exact component={MusicBrainz} />
        <Route path="/favourites" exact component={Favourites} />
      </Switch>
    </main>
  );
};

export default Main;

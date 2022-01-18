import React, { useState } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const { pathname } = useLocation();
  const [gamertag, setGamertag] = useState("");

  const haloInfiniteBtnHandler = (e) => {
    e.preventDefault();
    // TODO: verify this redirect is correct for this situation
    window.location.href = `${pathname}halo-infinite/gamertag/${gamertag}`;
  };

  return (
    <React.Fragment>
      <h1>Halo Stats</h1>
      <input
        type="text"
        value={gamertag}
        onChange={(e) => setGamertag(e.target.value)}
      />
      <button disabled={!gamertag} onClick={(e) => haloInfiniteBtnHandler(e)}>
        Halo: Infinite
      </button>
    </React.Fragment>
  );
};

export default Home;

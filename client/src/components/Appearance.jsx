import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import _ from "lodash";

const Appearance = () => {
  const { gamertag } = useParams();
  const [appearance, setAppearance] = useState();

  // TODO: use redux
  useEffect(() => {
    if (gamertag)
      fetch(`/api/halo-infinite/${gamertag}/appearance`)
        .then((res) => res.json())
        .then((data) => setAppearance(data));
  }, [gamertag]);

  if (!appearance)
    return (
      <img
        src="https://2img.net/h/sindexs.org/Images/Loading1.gif"
        alt="Loading"
        style={{ maxWidth: "200px" }}
      />
    );

  return (
    <React.Fragment>
      <h1>{_.get(appearance, ["additional", "gamertag"], gamertag)}</h1>
      <h1>{_.get(appearance, ["data", "service_tag"], "")}</h1>
      {_.get(appearance, ["data", "emblem_url"], "") && (
        <img
          src={_.get(appearance, ["data", "emblem_url"], "")}
          alt="Spartan emblem"
          style={{ maxWidth: "400px" }}
        />
      )}
      {_.get(appearance, ["data", "backdrop_image_url"], "") && (
        <img
          src={_.get(appearance, ["data", "backdrop_image_url"], "")}
          alt="Spartan backdrop"
          style={{ maxWidth: "400px", backgroundColor: "#000" }}
        />
      )}
    </React.Fragment>
  );
};

export default Appearance;

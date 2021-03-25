import { Button } from "@material-ui/core";
import React, { useState } from "react";
import GetawayDestinations from "./GetawayDestinations";
import "./Getaways.css";
function Getaways() {
  const [showArts] = useState(true);
  return (
    <div className="getaway">
      <h1>Inspiration for future getaways</h1>
      <div className="getaway__sections">
        <div className="getaway__type">
          <Button>Destination for arts & culture</Button>
        </div>

        <div className="getaway__type">
          <Button>Destinations for outdoor adventure</Button>
        </div>
        <div className="getaway__type">
          <Button>Mountain Cabins</Button>
        </div>
        <div className="getaway__type">
          <Button>Beach destinations</Button>
        </div>
        <div className="getaway__type">
          <Button>Popular destinations</Button>
        </div>
      </div>

      {showArts && <GetawayDestinations />}
    </div>
  );
}

export default Getaways;

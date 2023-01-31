import React from "react";
import { Link as Anchor } from "react-router-dom";

function DonationSuccsess() {
  return (
    <div className="success">
      <div className="divtitle">
        <h1 className="titleDonation">
          The donation has been made successfully!
        </h1>
      </div>
      <div className="divThankGif">
        <img
          className="thankGif"
          src="http://33.media.tumblr.com/7297b4d5a2c517de0949dab3653a1885/tumblr_nmr99y9DfE1u4hvgpo1_500.gif"
          alt="animegif"
        />
      </div>

      <h2 className="h2donation">Thank you! ♡</h2>
      <div className="anchorDiv">
        <Anchor className="backHome" to={"/"}>
          Back home
        </Anchor>
      </div>
    </div>
  );
}

export default DonationSuccsess;

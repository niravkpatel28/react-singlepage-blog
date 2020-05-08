import React from "react";
import "./bannerImage.style.css";
const BannerImage = (props) => (
  <img className="banner-width" alt="banner" src={props.imageUrl} />
);

export default BannerImage;

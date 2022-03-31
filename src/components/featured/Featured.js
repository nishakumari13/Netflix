import React from "react";
import "./Featured.scss";
import Cover from "../../assets/cover.jpeg";
import M2 from "../../assets/m2.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img src={Cover} alt="cover" />

      <div className="info">
        <img src={M2} alt="movie-title" />

        <sapn className="desc">
          kjsadhkajhds asdhsaj sadhasdjsad sadhsaidsamd sadhasdsamdaidadn asgusa
          asdbasdvsaydsabasdfash astasvdnsajhvasdjsavassajdasvmnd
        </sapn>

        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

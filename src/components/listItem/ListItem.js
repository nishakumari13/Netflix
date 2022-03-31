import React, { useState } from "react";
import "./ListItem.scss";
import Friends from "../../assets/friends-2.jpg";
import friend from "../../assets/friends.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Gif from "../../assets/gif.gif";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://www.bing.com/videos/search?q=friends+series+videos&&view=detail&mid=0F8A4CD601D11D328C7D0F8A4CD601D11D328C7D&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dfriends%2Bseries%2Bvideos%26FORM%3DVDRESM";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Friends} alt="movie" />
      {isHovered && (
        <>
          {/* <video src={Gif} autoPlay={true} loop /> */}
          <img src={friend} alt="friend" />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon />
              <AddIcon />
              <ThumbUpIcon />
              <ThumbDownIcon />
            </div>

            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>

            <div className="desc">
              Nice to watch.Happy funny series. makes you feel good even when u
              are sad.
            </div>
            <div className="genre">Comedy</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;

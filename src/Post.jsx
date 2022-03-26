import { Comment, Send, Share, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({
  profilePic,
  displayName,
  postid,
  postImgUrl,
  postMsg,
  timestamp,
}) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="postTop__left">
          <Avatar src={profilePic} />
        </div>
        <div className="postTop__right">
          <h2>{displayName}</h2>
          <p>{new Date(timestamp?.toDate()).toString()}</p>
        </div>
      </div>
      <div className="post__middle">
        <p>{postMsg}</p>
        <img className="postMiddle__postImg" src={postImgUrl} alt="" />
      </div>
      <div className="post__bottom">
        <div className="post__bottom__option">
          <ThumbUp /> <p>Like</p>
        </div>
        <div className="post__bottom__option">
          <Comment /> <p>Comment</p>
        </div>
        <div className="post__bottom__option">
          <Share /> <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

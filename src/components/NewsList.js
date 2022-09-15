import React from "react";
import "./NewsList.css";

const NewsList = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <div className="news-card">
        <div className="news-image">
          <img src={urlToImage} alt="newspic" />
        </div>
        <div className="news-info">
          <h4 className="title">{title}</h4>
          <p className="description">{description.substr(0,100)}</p>

          <a href={url} target="_blank"><button className="btns">Read more</button></a>
        </div>
      </div>
    </>
  );
};

export default NewsList;

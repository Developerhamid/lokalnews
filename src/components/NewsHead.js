import React, { useState } from "react";
import "./NewsHead.css";

const NewsHead = ({ setTopic }) => {
  const [news, setNews] = useState("");

  const SubmitData = (e) => {
    if (e.keyCode === 13) {
      setTopic(news);
      setNews("");
    }
  };

  const filterTopic = (val) => {
    if (val === "tech") {
      setTopic("tech");
    } else if (val === "business") {
      setTopic("business");
    } else if (val === "food") {
      setTopic("food");
    }
  };

  return (
    <>
      <header className="news-header">
        <div className="logo">
          <span>NewsApp</span>
        </div>
        <div className="head-filters">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search news here.."
              value={news}
              onChange={(e) => setNews(e.target.value)}
              onKeyDown={SubmitData}
            />
          </div>
          <div className="filters">
            <ul>
              <li onClick={() => filterTopic("tech")}>Tech</li>
              <li onClick={() => filterTopic("business")}>Business</li>
              <li onClick={() => filterTopic("food")}>Food</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NewsHead;

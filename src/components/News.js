import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import NewsHead from "./NewsHead";
import "./Response.css";

const News = () => {
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("india");

  useEffect(() => {
    const GetNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=${topic}&from=2022-09-15&pageSize=9&apiKey=241e074b3c3945cf850407a246c8b648`
        );
        setData(res.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    GetNews();
  });
  return (
    <>
      <NewsHead setTopic={setTopic} />
      <h1 className="main-heading">Trending news of {topic}</h1>
      <div className="news-container">
        {data.map((item, index) => {
          const { title, description, url, urlToImage } = item;
          return (
            <NewsList
              key={index}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default News;

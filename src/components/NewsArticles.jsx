import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { articleAdd, pinArticle } from "../store/articlesSlice";
import ArticleItem from "./ArticleItem";

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.log("Failed fetching articles...", error);
    }
  };

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchArticles();
  }, [page]);

  return (
    <div className="max-w-[800px] my-0 mx-auto p-2">
      <h2 className="font-bold p-5">News Articles</h2>
      <ul className="grid grid-cols-col gap-2 mb-5">
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            onAdd={() => dispatch(articleAdd(article))}
            showAddButton={true}
          />
        ))}
      </ul>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={loadMoreArticles}
      >
        Load more
      </button>
    </div>
  );
};

export default NewsArticles;

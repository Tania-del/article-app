import React, { useEffect, useState } from "react";

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

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

  console.log(articles);

  return (
    <div className="max-w-[800px] my-0 mx-auto p-2">
      <h2 className="font-bold p-5">News Articles</h2>
      <ul className="grid grid-cols-col gap-2 mb-5">
        {articles.map(({ title, description, author, urlToImage }) => (
          <li className="bg-primary p-2 border-2" key={title}>
            <img className="w-full border-2" src={urlToImage} alt={title} />
            <h3 className="font-bold">{title}</h3>
            <p>{description}</p>
            <p>Author: {author}</p>
          </li>
        ))}
      </ul>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={loadMoreArticles}
      >
        Get additional
      </button>
    </div>
  );
};

export default NewsArticles;

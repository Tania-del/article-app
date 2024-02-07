import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedUsersArticles,
  articleRemove,
  selectedPinnedArticle,
} from "../store/articlesSlice";

const UsersArticles = () => {
  const userArticles = useSelector(selectedUsersArticles);
  const pinnedArticle = useSelector(selectedPinnedArticle);
  const dispatch = useDispatch();

  console.log(pinnedArticle);

  return (
    <div className="max-w-[800px] my-0 mx-auto p-2">
      <h2 className="font-bold p-5">Users Articles</h2>
      <ul className="grid grid-cols-col gap-2 mb-5">
        {/* {pinnedArticle && } */}
        {userArticles.map((article) => (
          <li className="bg-primary p-2 border-2 " key={article.title}>
            {article.urlToImage ? (
              <img
                className="w-full border-2"
                src={article.urlToImage}
                alt={article.title}
              />
            ) : (
              ""
            )}
            <h3 className="font-bold">{article.title}</h3>
            <p className="text-balance">{article.description}</p>
            {article.author ? (
              <p className="font-bold">Author: {article.author}</p>
            ) : (
              ""
            )}
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
              onClick={() => dispatch(articleRemove(article))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={loadMoreArticles}
      >
        Load more
      </button> */}
    </div>
  );
};

export default UsersArticles;

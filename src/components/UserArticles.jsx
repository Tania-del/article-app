import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedUserArticles,
  articleRemove,
  selectedPinnedArticle,
  pinArticle,
} from "../store/articlesSlice";
import ArticleItem from "./ArticleItem";
import Pin from "../icons/Pin";

const UserArticles = () => {
  const userArticles = useSelector(selectedUserArticles);
  const pinnedArticle = useSelector(selectedPinnedArticle);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const filterArticles = () => {
    const lowercaseQuery = searchQuery.toLowerCase() ?? "";
    const filteredArticles = userArticles.filter(
      ({ title, description, author }) =>
        title.toLowerCase()?.includes(lowercaseQuery) ||
        author.toLowerCase()?.includes(lowercaseQuery) ||
        description.toLowerCase()?.includes(lowercaseQuery)
    );

    return filteredArticles;
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = filterArticles();

  return (
    <div className="max-w-[800px] my-0 mx-auto p-2">
      <h2 className="font-bold p-5">Users Articles</h2>
      {userArticles.length > 0 && (
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleInputChange}
          className=" mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[200px]"
        ></input>
      )}
      <ul className="grid grid-cols-col gap-2 mb-5">
        {pinnedArticle && (
          <ArticleItem
            key={pinnedArticle.title + pinnedArticle.author}
            article={pinnedArticle}
            onRemove={() => dispatch(articleRemove(pinnedArticle))}
            showRemoveButton={true}
          />
        )}
        {userArticles.length ? (
          filteredArticles?.map((article) => (
            <ArticleItem
              key={article.title}
              article={article}
              onRemove={() => dispatch(articleRemove(article))}
              onPin={() => {
                dispatch(pinArticle(article));
              }}
              showRemoveButton={true}
              icon={<Pin />}
            />
          ))
        ) : (
          <p>Add article from news article...</p>
        )}
      </ul>
    </div>
  );
};

export default UserArticles;

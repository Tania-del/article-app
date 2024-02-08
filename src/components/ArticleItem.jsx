import React from "react";

const ArticleItem = ({
  article,
  key,
  icon,
  onRemove,
  onPin,
  onAdd,
  showRemoveButton,
  showAddButton,
}) => {
  return (
    <li className="bg-primary p-2 border-2 flex flex-col " key={key}>
      <div className="flex-grow">
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
      </div>
      {showAddButton && (
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
          onClick={onAdd}
        >
          Add
        </button>
      )}

      <div className="flex justify-end gap-2 items-center mt-4 ">
        {icon ? <button onClick={onPin}>{icon}</button> : ""}
        {showRemoveButton && (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            onClick={onRemove}
          >
            Remove
          </button>
        )}
      </div>
    </li>
  );
};

export default ArticleItem;

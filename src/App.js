import React from "react";
import NewsArticles from "./components/NewsArticles";
import UsersArticles from "./components/UsersArticles";

function App() {
  return (
    <main>
      <section>
        <UsersArticles />
      </section>
      <section>
        <NewsArticles />
      </section>
    </main>
  );
}

export default App;

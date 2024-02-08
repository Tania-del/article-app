import React from "react";
import NewsArticles from "./components/NewsArticles";
import UserArticles from "./components/UserArticles";

function App() {
  return (
    <main>
      <section className="mb-[100px]">
        <UserArticles />
      </section>
      <section>
        <NewsArticles />
      </section>
    </main>
  );
}

export default App;

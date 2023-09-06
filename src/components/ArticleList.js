import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <main>
    {articles && articles.map((article, index) => (
        <Article
          key={article.id} // Use a unique key for each article
          title={article.title}
          date={article.date}
          preview={article.preview}
          minutes={article.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;

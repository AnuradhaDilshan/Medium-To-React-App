import React, { useState, useEffect } from "react";
import BlogTile from "./BlogTile";

const BlogContainer = () => {
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40anuradha.dilshan";
  const [myBlog, setMyBlog] = useState([]);

  useEffect(() => {
    fetch(rss2json)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
      });
  }, [rss2json]);

  function displayBlogs() {
    console.log(myBlog);
    return (
      myBlog.items &&
      myBlog.items.map((blog) => {
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }

  return <div className="BlogsContainer">{displayBlogs()}</div>;
};

export default BlogContainer;

import React from "react";

const BlogTile = (props) => {
  const { title, link, content } = props.blogData;

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle;
  }

  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }

  function toText(block) {
    let tag = document.createElement("div");
    tag.innerHTML = block;
    block = tag.innerText;
    return block;
  }

  function extractImageSrc(content) {
    const div = document.createElement("div");
    div.innerHTML = content;
    const img = div.querySelector("img");
    return img ? img.src : null;
  }

  function blogPost() {
    const imageSrc = extractImageSrc(content);

    return (
      <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
        <div className="ImageContainer">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={truncateText(cleanTitle(title), 0, 60)}
              className="Image"
            />
          )}
        </div>
        <div className="TDContainer">
          <h3>{truncateText(cleanTitle(title), 0, 100)}</h3>
          <br />
          <p>{truncateText(toText(content), 0, 200) + "..."}</p>
        </div>
      </a>
    );
  }

  return <div className="PostContainer">{blogPost()}</div>;
};

export default BlogTile;

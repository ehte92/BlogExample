import React from "react";
import { blogData } from "../data/blog";

function BlogContent() {
  return (
    <div id="blogs" className="m-2/5">
      <ul class="cards">
        {blogData.map((data, index) => (
          <li class="cards__item">
            <div class="card">
              <div class="card__image">
                <img src={data.image} alt="" />
              </div>
              <div class="card__content">
                <div class="card__title">{data.title}</div>
                <p class="card__text">{data.description}</p>
                <button class="btn btn--block card__btn">Read More</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogContent;

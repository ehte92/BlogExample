/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./blogStyle.css";
import Navbar from "./Navbar/Navbar";
import { blogData } from "../data/blog";
import Footer from "./Footer";

function BlogPage() {
  return (
    <>
      <Navbar />
      <div class="row tm-row m-1/10">
        {blogData.map((data, index) => (
          <article
            style={{ background: "#e5eee9" }}
            class="col-12 col-md-6 tm-post"
          >
            <hr class="tm-hr-primary" />
            <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
              <div class="tm-post-link-inner">
                <img src={data.image} alt="Image" class="img-fluid" />
              </div>

              <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                {data.title}
              </h2>
            </a>
            <p class="tm-pt-30">{data.description}</p>
            <div class="d-flex justify-content-between tm-pt-45">
              <span class="tm-color-primary">{data.category}</span>
              <span class="tm-color-primary">{data.date}</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
              <span>{data.views} views</span>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;

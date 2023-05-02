import React from "react";
import ArticlesLink from "./ArticlesLink";
import Articles from "./Articles";

const Blog = () => {
  return (
    <div className="container">
      <p className="text-center my-5 fw-bold text-secondary courses_font">
        مقالات کدیاد
      </p>
      <div>
        <div dir="rtl" className="row d-flex justiy-content-center">
          <h3 className="text-end my-5">محبوب ترین مقالات</h3>
          <div className="col-12 col-md-4">
            <ArticlesLink />
          </div>
          <div className="col-12 col-md-8 mt-4">
            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

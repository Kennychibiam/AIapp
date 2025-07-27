import { Home } from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitles/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

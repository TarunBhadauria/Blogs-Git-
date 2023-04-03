import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./components/Home";
import TagPage from "./components/TagPage";
import Categorypage from "./components/CategoryPage";
import BlogPage from "./components/BlogPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParameter, setSearchParameter] = useSearchParams();
  const location = useLocation();
  const page = useSearchParams("page");
  useEffect(() => {
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }

    else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), category);

    }
    else{
      fetchBlogPosts(Number(page))
    }

  }, [location.pathname, location.search]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/categories/:category" element={<Categorypage />} />
      </Routes>
    </>
  );
}

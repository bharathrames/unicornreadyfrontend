// import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts.jsx";
// import Sidebar from "../../components/sidebar/Sidebar.jsx";
// import "./home.css";
// import axios from "axios";
// import { useLocation } from "react-router";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("https://unicornreadybackend.vercel.app/api/posts" + search);
//       setPosts(res.data);
//       console.log(res.data);
//     };
//     fetchPosts();
//   }, [search]);
//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts posts={posts} />
//         <Sidebar />
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://unicornreadybackend.vercel.app/api/posts${search || ''}`
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  // Function to handle search
  const handleSearch = async (searchTerm) => {
    const res = await axios.get(
      `https://unicornreadybackend.vercel.app/api/posts?title=${searchTerm}`
    );
    setPosts(res.data);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}


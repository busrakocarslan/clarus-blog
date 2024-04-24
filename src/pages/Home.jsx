import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";
import PaginationCom from "../components/Pagination";
import Header from "../components/Header";
// import { Pagination } from "react-bootstrap";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // sayfaları ayaralıyorum, default olarak 1.sayfayı seçiyorum.
  const [postperPage] = useState(10); // sayfa başına gelecek veri sayısını ayarlıyorum.
  const [show,setShow]=useState(true)
  const handleClean=(id)=>{
    const deleteBlog=posts.filter(post=>post.id !== id)
    setPosts(deleteBlog)
  }
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false); //loadingi kapatıyoruz
    };
    getPosts(); //invoke
    console.log(posts);
  }, []);
  const indexOfLastPost = currentPage * postperPage;
  const indexOfFirstPost = indexOfLastPost - postperPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePage=(pageNumber)=>{// change page için yaptığım fonksiyon
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container mt-5 ">
      <Header/>
      <PaginationCom postperPage={postperPage} posts={posts} handlePage={handlePage} currentPage={currentPage} />
      <Post posts={currentPost} loading={loading} handleClean={handleClean}/>
      
    </div>
  );
}

export default Home;

import React from "react";
// import Header from "./../components/Header/Header";
import NavBar from "./../components/Header/NavBar";
import Card from "./../components/Card/Card";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="home-page">
        <h1>Home Page</h1>
        <Card pic={"https://scx2.b-cdn.net/gfx/news/2019/lizardsgener.jpg"} />
      </div>
    </div>
  );
}

export default HomePage;

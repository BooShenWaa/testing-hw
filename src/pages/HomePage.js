import React from "react";
// import Header from "./../components/Header/Header";
import NavBar from "./../components/Header/NavBar";
import Card from "./../components/Card/Card";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <Card pic={"https://scx2.b-cdn.net/gfx/news/2019/lizardsgener.jpg"} />
    </div>
  );
}

export default HomePage;

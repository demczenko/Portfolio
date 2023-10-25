import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Container } from "../components/ui";

const Home = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-zinc-800">
        <Container>
          <Header />
        </Container>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;

import React from "react";
/*
  Components
*/
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
/*
  Hooks
*/
import useInitialState from "../hooks/useInitialState.js";
import "../assets/styles/App.scss";
/*
  Api request
*/
const API = "http://localhost:3000/initalState";

const Home = () => {
  const initiaState = useInitialState(API);

  return (
    <>
      <Search />

      {/* Anidando componentes */}
      {initiaState.mylist.length > 0 && (
        <Categories title="Lista">
          <Carousel>
            {initiaState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initiaState.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {initiaState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initiaState.originals.length > 0 && (
        <Categories title="Orginales de felipe ;)">
          <Carousel>
            {initiaState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

export default Home;

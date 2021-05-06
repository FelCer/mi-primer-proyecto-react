import React from "react";

import { connect } from "react-redux";

/*
  Components
*/
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header.jsx";

import "../assets/styles/App.scss";

const Home = ({ myList = [], trends = [], originals = [], searchVideos = [] }) => {
    console.log(searchVideos);
    return (
    <>
      <Header />
      <Search isHome/>
      {/* Anidando componentes */}
      {searchVideos.length > 0 && (
        <Categories title="Resultados de busqueda">
          <Carousel>
            {searchVideos.map((item) => (
              <CarouselItem 
                key={item.id} 
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {myList.length > 0 && (
        <Categories title="Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem 
                key={item.id} 
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && 
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      }

      {originals.length > 0 && 
        <Categories title="Orginales de felipe ;)">
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      }
    </>
  );
};

//export default Home;

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchVideos: state.searchVideos
    };
};
/**
 * mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
 * mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.
 */
export default connect(mapStateToProps, null)(Home);

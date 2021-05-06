import React, { useState } from "react";
import { connect } from "react-redux";
import { searchVideoSource } from "../actions";

import classNames from "classnames";
import "../assets/styles/components/Search.scss";

const Search = (props) => {
  const { isHome } = props;
  const inputStyle = classNames("input", {
    isHome,
  });

  const handleInput = (event) => {
    props.searchVideoSource(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Que quieres ver hoy?</h2>
      <input
        name="search"
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideoSource,
};

//export default Search;
export default connect(null, mapDispatchToProps)(Search);

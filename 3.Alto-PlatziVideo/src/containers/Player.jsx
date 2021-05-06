import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import { Redirect } from "react-router-dom";
/**
 * Assets
 */
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  const handleGoBack = () => {
    props.history.goBack();
  };
  
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasPlaying ? (
    <>
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="Player-back">
          <button tyoe="button" onClick={handleGoBack}>
            Regresar
          </button>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

//export default Player;
export default connect(mapStateToProps, mapDispatchToProps)(Player);

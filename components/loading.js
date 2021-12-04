import React from "react";
import RubiksAnimation from "../animations/rubiks-animation.json";
import Lottie from "react-lottie";

function loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RubiksAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default loading;

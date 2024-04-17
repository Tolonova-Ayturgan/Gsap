import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
  const appRef = useRef(null);
  const box1Ref = useRef(null);

  const handleClick = () => {
    gsap.fromTo(box1Ref.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0 });
    gsap.fromTo(".box-2", { opacity: 0, y: -25 }, { opacity: 1, y: 0 });
  };

  useLayoutEffect(() => {
    gsap
      .timeline()
      .to(".box-1", { rotation: 360, duration: 3 })
      .to(".box-2", { rotation: -360, duration: 2 });

    gsap.to(".box-3", { scale: 2, duration: 2 });
    gsap.to(".box-4", { scale: 2, duration: 4 });
  }, []);

  return (
    <>
      <div className="App" ref={appRef}>
        <div className="box-1" ref={box1Ref}>
          Box 1
        </div>
        <div className="box-2">Box 2</div>
        <div className="box-3">Box 3</div>
        <div className="box-4">Box 4</div>
        <button className="button" onClick={() => handleClick()}>
          Click me
        </button>
      </div>
    </>
  );
}

export default App;

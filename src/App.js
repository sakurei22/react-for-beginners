import { useState, useEffect } from "react";
function Hello() {
  function hiFn() {
    console.log("create:3");
    return byeFn;
  }
  function byeFn() {
    console.log("byebye:(");
  }
  useEffect(hiFn, []);
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

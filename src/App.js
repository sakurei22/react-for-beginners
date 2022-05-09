import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  //[] 한번만 실행됨!
  useEffect(() => {
    console.log("i run only once");
  }, []);
  //[keyword]를 바라봄
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  //[counter]를 바라봄
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  //[counter, keyword]를 바라봄
  useEffect(() => {
    console.log("i run when 'counter&keyword' changes.");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

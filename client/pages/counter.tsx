import Layout from "../components/Layout"
import { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(10);

  return (
    <Layout title= "counter">
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <div>{count}</div>
    </Layout>
  );
};

export default counter;

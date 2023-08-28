import { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [isLoading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) {
    console.log("로딩중여기야");
    return <p>Loading...</p>;
  }

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Hot Sale</label>
      <h1>배포하기 완료</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </>
  );
}

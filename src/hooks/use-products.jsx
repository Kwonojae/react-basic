import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((e) => {
        setError("에러가발생함");
      })
      .finally(() => setIsLoading(false));
    return () => {
      console.log("청소하는 일들을 함");
    };
  }, [salesOnly]);
  return [isLoading, error, products];
}

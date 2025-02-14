import { useState } from "react";
import styleManiDiv from "../app.module.css";
import { PriceCalculation, Product } from "../index";
import { Cart } from "../assets/svgs";
export default function Tab1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className={styleManiDiv.title}>
        {Cart}
        {count}
      </p>
      <Product />
      <div>
        <div className={styleManiDiv.interDiv}>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className={styleManiDiv.btns}
          >
            +
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            className={styleManiDiv.btns}
            style={{ width: "4rem", fontSize: "16px" }}
          >
            reset
          </button>
          <button
            onClick={() => {
              if (count - 1 >= 0) {
                setCount(count - 1);
              }
            }}
            className={styleManiDiv.btns}
            disabled={count - 1 < 0}
          >
            -
          </button>
        </div>
        <PriceCalculation finalCount={count} />
      </div>
    </>
  );
}

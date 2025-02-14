import { useState } from "react";
import stylePriceCalculation from "../PriceCalculation.module.css";
export default function PriceCalculation({ finalCount }) {
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(24.99);

  const handleClick = () => {
    const finalPrice = price * finalCount;
    setValue(`$${" "}${finalPrice}`);
  };

  return (
    <>
      <div className={stylePriceCalculation.mDiv}>
        <input
          type="text"
          value={finalCount !== 0 ? value : "0"}
          placeholder="price"
          style={{ pointerEvents: "none", textAlign: "center", width: 100 }}
          className={stylePriceCalculation.input}
        />
        <button className={stylePriceCalculation.btn} onClick={handleClick}>
          Calculation
        </button>
        <form action="post">
          <button className={stylePriceCalculation.btn}>Add to Bag</button>
        </form>
        <span className={stylePriceCalculation.span}>
          Price of one piece <br /> <strong>$24.99</strong>
        </span>
      </div>
    </>
  );
}

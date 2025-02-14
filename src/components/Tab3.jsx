import { useState } from "react";
import styleManiDiv from "../tab3.module.css";
import { StarFill } from "react-bootstrap-icons";
import back from "../assets/images/1-Photoroom.png";
export default function Tab3() {
  const [activeStar, setActiveStar] = useState(0);

  const handleStarClick = (starNumber) => {
    setActiveStar(starNumber);
  };
  const patternEmail =
    "^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$";

  return (
    <div className={styleManiDiv.mainDiv}>
      <img className={styleManiDiv.back} src={back} alt="" />
      <div className={styleManiDiv.divStars}>
        <span className={styleManiDiv.spanStar}>Your Score :</span>
        <button
          className={styleManiDiv.btns}
          onClick={() => handleStarClick(1)}
        >
          <StarFill
            className={
              activeStar >= 1
                ? styleManiDiv.activeStar
                : styleManiDiv.inactiveStar
            }
          />
        </button>
        <button
          className={styleManiDiv.btns}
          onClick={() => handleStarClick(2)}
        >
          <StarFill
            className={
              activeStar >= 2
                ? styleManiDiv.activeStar
                : styleManiDiv.inactiveStar
            }
          />
        </button>
        <button
          className={styleManiDiv.btns}
          onClick={() => handleStarClick(3)}
        >
          <StarFill
            className={
              activeStar >= 3
                ? styleManiDiv.activeStar
                : styleManiDiv.inactiveStar
            }
          />
        </button>
        <button
          className={styleManiDiv.btns}
          onClick={() => handleStarClick(4)}
        >
          <StarFill
            className={
              activeStar >= 4
                ? styleManiDiv.activeStar
                : styleManiDiv.inactiveStar
            }
          />
        </button>
        <button
          className={styleManiDiv.btns}
          onClick={() => handleStarClick(5)}
        >
          <StarFill
            className={
              activeStar >= 5
                ? styleManiDiv.activeStar
                : styleManiDiv.inactiveStar
            }
          />
        </button>
      </div>
      <div className={styleManiDiv.mainComment}>
        <form action="post" className={styleManiDiv.mainForm}>
          <div className={styleManiDiv.interCommentName}>
            <input type="text" className={styleManiDiv.input} required />
            <label className={styleManiDiv.floatingLable}>Full Name</label>
          </div>
          <div className={styleManiDiv.interCommentName}>
            <input
              type="email"
              className={styleManiDiv.input}
              required
              pattern={patternEmail}
            />
            <label className={styleManiDiv.floatingLable}>E.mail Address</label>
          </div>
          <div className={styleManiDiv.interCommentContent}>
            <textarea
              className={styleManiDiv.input}
              style={{ padding: "20px  10px" }}
            />
            <label className={styleManiDiv.floatingLable}>
              Write Your Comment Here
            </label>
          </div>
          <button className={styleManiDiv.submiBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

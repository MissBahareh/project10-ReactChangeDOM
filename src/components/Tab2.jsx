import tab2Style from "../tab2.module.css";
import back from "../assets/images/1-Photoroom.png";

export default function Tab2() {
  return (
    <>
      <div className={tab2Style.mainDiv}>
        <div className={tab2Style.mainDivinter}>
          <img className={tab2Style.mainDivBack} src={back} alt="" />
          <p>
            The LEGO® Large Silly Ceramic Mug is the perfect way to add some fun
            to anyone's drink break. With its oversized LEGO minifigure
            funny-face design in the classic yellow color scheme and a capacity
            of 530 mL, this mug is great for any hot or cold drink. Whether at
            home or in the office, the LEGO Large Silly Ceramic Mug is sure to
            put a smile on anyone's face.
          </p>
          <ul>
            <li>
              Large silly-minifigure mug – This yellow ceramic mug is shaped and
              decorated like an oversized LEGO® minifigure head, complete with
              protruding tongue
            </li>
            <li>
              Gift for LEGO® fans of all ages – This large mug is
              dishwasher-safe (to 62 deg.C +/- 5) and holds a generous 530 mL of
              your favorite beverage
            </li>
            <li style={{ width: "75%" }}>
              Fun with every slurp! – Measuring over 4 in. (10 cm) high, 5 in.
              (13 cm) wide and 4 in. (10 cm) deep, this big mug can be used for
              hot drinks, cold drinks and even breakfast cereal
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

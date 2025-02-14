import { useState } from "react";
const ImageChanger = () => {
  const [mainImage, setMainImage] = useState("src/assets/images/0.png");
  const [imageList, setImageList] = useState([
    "src/assets/images/1.webp",
    "src/assets/images/2.webp",
    "src/assets/images/3.webp",
    "src/assets/images/4.webp",
  ]);

  const changeImage = (index) => {
    const newImageList = [...imageList];
    const temp = newImageList[index];
    newImageList[index] = mainImage;
    setMainImage(temp);
    setImageList(newImageList);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "75%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
        
      }}
    >
      <div
        className="img_card"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "100%",
            display: "flex",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize:25
          }}
        >
          Large Silly Ceramic Mug
        </h1>
        <img
          src={mainImage}
          alt="Main"
          style={{
            width: "97%",
            display: "flex",
            height: "80%",
            borderRadius: 10,
          }}
        />
      </div>
      <div
        className="img_cards"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        {imageList.map((image, index) => (
          <img
            onClick={() => changeImage(index)}
            key={index}
            style={{
              width: "160px",
              display: "flex",
              height: "175px",
              margin: "3px",
              borderRadius: 10,
            }}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
    
  );
};

export default ImageChanger;

import React, { useState } from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Rating,
  MenuItem,
} from "semantic-ui-react";
import ShowModal from "../Modal/SuccessFullModal";
import LoginModal from "../User/UI/LoginModal";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "450px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "10px",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
};

const cardHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
};

const imageContainerStyle = {
  width: "100%",
  height: "200px",
  overflow: "hidden",
  borderBottom: "2px solid #f0f0f0",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const contentStyle = {
  padding: "20px",
  background: "linear-gradient(to bottom, #ffffff, #f9f9f9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",
};

const frontStyle = {
  transform: "rotateY(0deg)",
};

const backStyle = {
  transform: "rotateY(180deg)",
};

const headerStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  marginBottom: "5px",
  color: "#333",
  lineHeight: "1.2",
  fontFamily: "Times New Roman",
  marginTop: "10px",
};

const metaStyle = {
  fontSize: "1.1em",
  color: "grey",
  marginBottom: "5px",
  fontFamily: "Times New Roman",
};

const descriptionStyle = {
  marginBottom: "10px",
  color: "#555",
  fontFamily: "Times New Roman",
};

const priceContainerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.2em",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
  fontFamily: "Times New Roman",
};

const priceIconStyle = {
  marginRight: "5px",
  color: "green",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "auto",
  marginBottom: "20px",
};

const CardDescriptionStyle = {
  color: "black",
  fontFamily: "Casendra",
  textAlign: "justify",
  fontSize: "15px",
};

const List = [
  "Learn from industry experts with real-world experience.",
  "Gain practical coding experience with hands-on projects and exercises.",
  "Build a strong foundation for advanced topics and future learning",
];
const CardExampleImageCard = ({
  data,
  onAddHandle,
  isLogin,
  handleIsLogin,
  handleIsLogout,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      style={{
        ...cardStyle,
        ...(isHovered ? cardHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={flipCard}
    >
      <div
        style={{
          ...contentStyle,
          ...(isFlipped ? backStyle : frontStyle),
        }}
      >
        <div style={imageContainerStyle}>
          <div
            style={{
              ...imageStyle,
              backgroundImage: `url(${data.Course_ImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <CardContent>
          <div>
            <CardHeader style={headerStyle}>
              {data.Course_Name} ({data.Course_Id})
            </CardHeader>
            <CardMeta style={metaStyle}>
              <span>
                <b>{data.Course_Offer}%</b>
                <span style={{ color: "red" }}> Off</span>
              </span>
            </CardMeta>
            <CardDescription style={priceContainerStyle}>
              <Icon name="rupee" style={priceIconStyle} />
              <span>{data.Course_Price}</span>
            </CardDescription>
            <CardDescription style={descriptionStyle}>
              <Rating icon="star" defaultRating={4} maxRating={5} />
            </CardDescription>
          </div>
          <div style={buttonContainerStyle}>
            {isLogin && (
              <ShowModal
                buttonName="Add To cart"
                onClick={() => onAddHandle(data)}
              >
                <h3>Added To Cart</h3>
              </ShowModal>
            )}

            {!isLogin && (
              <ShowModal buttonName="Add To cart">
                <h3>You are not Login Yet Please login...</h3>
              </ShowModal>
            )}
          </div>
        </CardContent>
      </div>

      <div
        style={{
          ...contentStyle,
          ...(isFlipped ? frontStyle : backStyle),
        }}
      >
        <CardContent>
          <CardHeader style={headerStyle}>{data.Course_Name}</CardHeader>
          <br></br>
          <CardDescription style={CardDescriptionStyle}>
            {data.Course_Description}
          </CardDescription>
          <br></br>

          <ul
            style={{
              ...CardDescriptionStyle,
              listStyleType: "none",
              padding: "5px",
            }}
          >
            {List.map((list) => {
              return (
                <li
                  style={{
                    position: "relative",
                    paddingLeft: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <Icon
                    name="check"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0.1em",
                      color: "green",
                    }}
                  />
                  {list}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
};

export default CardExampleImageCard;

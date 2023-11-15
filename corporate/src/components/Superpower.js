import React from "react";
import { Card } from "react-bootstrap";

const data = [
  {
    id: 1,
    link: "source",
    Topic: "Super Power 1",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 2,
    link: "source",
    Topic: "Super Power 2",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 3,
    link: "source",
    Topic: "Super Power 3",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
];

const renderedData = data.map((item) => (
  <Card
    key={item.id}
    style={{
      width: "23rem",
      height: "22rem",
      marginRight: "25px",
      background: `linear-gradient(to right, darkblue, blue, blue)`,
    }}
  >
    <Card.Img variant="top" src={item.link} />
    <Card.Body>
      <Card.Title style={{ color: "white" }}>{item.Topic}</Card.Title>
      <Card.Text>{item.Content}</Card.Text>
    </Card.Body>
  </Card>
));

function Superpower() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#e5e8e7",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <h2 style={{ padding: "90px 90px 0px 90px", marginBottom: "0px" }}>
          We give you these 3 superpowers!
        </h2>

        <div
          style={{
            padding: "30px 90px 90px 90px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {renderedData}
        </div>
      </div>
    </>
  );
}

export default Superpower;

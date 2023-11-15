import React from "react";
import { Card } from "react-bootstrap";

const data = [
  {
    id: 1,
    link: "https://github.com/atomicno28/corporate_tools/blob/main/corporate/src/media/Superpower1.JPG?raw=true",
    Topic: "Super Power 1",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 2,
    link: "https://github.com/atomicno28/corporate_tools/blob/main/corporate/src/media/Superpower2.JPG?raw=true",
    Topic: "Super Power 2",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 3,
    link: "https://github.com/atomicno28/corporate_tools/blob/main/corporate/src/media/Superpower3.JPG?raw=true",
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
      height: "25rem",
      marginRight: "25px",
      background: `linear-gradient(to right, #010048,#02006c)`,
      borderRadius: "20px",
    }}
  >
    <Card.Img
      variant="top"
      src={item.link}
      height="180px"
      style={{ padding: "30px" }}
    />
    <Card.Body>
      <Card.Title style={{ color: "white", fontSize: "1.7rem" }}>
        <b>{item.Topic}</b>
      </Card.Title>
      <Card.Text style={{ color: "white", fontSize: "1.4rem" }}>
        {item.Content}
      </Card.Text>
    </Card.Body>
  </Card>
));

function Working() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#03002e",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <h2
          style={{
            padding: "90px 90px 0px 90px",
            marginBottom: "0px",
            fontSize: "2.5rem",
            color: "white",
          }}
        >
          <b> We give you these 3 superpowers!</b>
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

export default Working;

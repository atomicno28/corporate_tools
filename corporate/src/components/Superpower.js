import React from "react";
import { Card } from "react-bootstrap";

const data = [
  {
    id: 1,
    link: "https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome-thumbnail.png",
    Topic: "Super Power 1",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 2,
    link: "https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome-thumbnail.png",
    Topic: "Super Power 2",
    Content:
      "Lorem ipsum praesent massa at ligula reet ist icuqilla. Vivamius est mist aliquit elit milt ac nisl.",
  },
  {
    id: 3,
    link: "https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome-thumbnail.png",
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
      height: "23rem",
      marginRight: "25px",
      background: `linear-gradient(to right, #191970,#000080)`,
      borderRadius: "20px",
    }}
  >
    <Card.Img
      variant="top"
      src={item.link}
      height="170px"
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
        <h2
          style={{
            padding: "90px 90px 0px 90px",
            marginBottom: "0px",
            fontSize: "2.5rem",
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

export default Superpower;

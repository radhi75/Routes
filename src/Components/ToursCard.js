import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ToursCard = ({ voyage }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={voyage.image} />
        <Card.Body>
          <Card.Title>{voyage.name}</Card.Title>
          <Card.Text>{voyage.info}</Card.Text>
          <Button variant="warning">
            <Link to={`/tour/${voyage.id}`}>More Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToursCard;

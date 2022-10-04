import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
const Pricing = ({ tour }) => {
  const { id } = useParams();
  const price = tour.find((el) => el.id == id);
  return (
    <div>
      <Card>
        <Card.Body> {price.price}</Card.Body>
        <Link to="/tours">
          <Button>Go back</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Pricing;

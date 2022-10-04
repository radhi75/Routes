import React from "react";
import ToursCard from "./ToursCard";

const Tours = ({ tour }) => {
  return (
    <div>
      {tour.map((voyage) => (
        <ToursCard key={voyage.id} voyage={voyage} />
      ))}
    </div>
  );
};

export default Tours;

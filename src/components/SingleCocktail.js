import React from "react";
import { Link } from "react-router-dom";

import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
const Cocktail = ({ cocktail }) => {
  return (
    <div style={{ width: "200px" }}>
      <Card>
        <CardImg
          variant="top"
          width="100%"
          src={cocktail.strDrinkThumb}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{Cocktail.name}</CardTitle>
          <Link to={"/cocktail/${cocktail.idDrink}"}>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
export default Cocktail;

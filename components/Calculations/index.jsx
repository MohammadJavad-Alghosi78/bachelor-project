import React from "react";
import EconomicCard from "../EconomicCard";
import { Col, Container, Row } from "react-bootstrap";
import { CalculationPageWrapper } from "./style";
import EconomicParameters from "../../public/static/economic-parameters.json";
import Link from "next/link";

const Calculations = () => {
  return (
    <CalculationPageWrapper>
      <Row>
        {EconomicParameters?.map((item) => (
          <Link href={item.route} passHref>
            <Col
              key={item.id}
              className="economic-parameter-element"
              xs={12}
              md={{ span: 6 }}
              lg={4}
            >
              <EconomicCard title={item.name} />
            </Col>
          </Link>
        ))}
      </Row>
    </CalculationPageWrapper>
  );
};

export default Calculations;

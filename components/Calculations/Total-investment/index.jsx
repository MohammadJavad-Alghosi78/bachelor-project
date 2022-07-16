import React, { useState } from "react";
import axios from "axios";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { Button, Form, Row, Col } from "react-bootstrap";
import { LoginFormWrapper } from "../../LoginForm/style";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalInvestmentForm = () => {
  // States
  const [X, setX] = useState(""); // X
  const [XPrim, setXPrim] = useState(""); // X-prim
  const [expAppCosts, setExpAppConsts] = useState([]); // C_ex&app
  const [directCapitalCosts, setDirectCapitalCosts] = useState([]); // DDC
  const [indirectCosts, setIndirectCosts] = useState([]); // IDC
  const [totalInvestmentAmount, setTotalInvestmentAmount] = useState(0);
  const [finalExpAppCosts, setFinalExpAppCosts] = useState(0);
  const [finalDirectCapitalCast, setFinalDirectCapitalCast] = useState(0);
  const [finalIndirectCostsList, setFinalIndirectCostsList] = useState(0);
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/total-investment", {
        X,
        XPrim,
        expAppCosts,
        directCapitalCosts,
        indirectCosts,
      })
      .then((response) => {
        setTotalInvestmentAmount(
          response.data.totalInvestmentAmount.totalInvestmentAmount.toFixed(2)
        );
        const {
          finalDirectCapitalCast,
          finalExpAppCostsList,
          finalIndirectCostsList,
        } = response.data.totalInvestmentAmount;
        setFinalExpAppCosts(
          finalExpAppCostsList.reduce((prev, current) => prev + current)
        );
        setFinalDirectCapitalCast(
          finalDirectCapitalCast.reduce((prev, current) => prev + current)
        );
        setFinalIndirectCostsList(
          finalIndirectCostsList.reduce((prev, current) => prev + current)
        );
        setDoughnutChartData({
          labels: [
            "exploration and appraisal costs",
            "direct capital costs",
            "indirect costs",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [
                finalExpAppCostsList.reduce((prev, current) => prev + current),
                finalDirectCapitalCast.reduce(
                  (prev, current) => prev + current
                ),
                finalIndirectCostsList.reduce(
                  (prev, current) => prev + current
                ),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  };

  // JSX
  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <LoginFormWrapper>
          <Form onSubmit={handleSubmit}>
            <LoginFormTitle title="Total Investment Form" />
            <LoginFormItem
              controlId="X-prim"
              label="Length of project:"
              type="number"
              placeholder="Example: 10"
              required
              value={XPrim}
              onChange={(event) => setXPrim(event.target.value)}
            />
            <LoginFormItem
              controlId="X"
              label="Length of exploration and appraisal phases:"
              type="number"
              placeholder="Example: 3"
              required
              value={X}
              onChange={(event) => setX(event.target.value)}
            />
            <LoginFormItem
              controlId="expAppCosts"
              label="List of exploration and appraisal costs( X 1,000,000$):"
              type="text"
              placeholder="Example: 1, 0.7, 0.8"
              required
              value={expAppCosts}
              onChange={(event) => setExpAppConsts(event.target.value)}
            />
            <LoginFormItem
              controlId="directCapitalCosts"
              label="List of direct capital costs( X 1,000,000$):"
              type="text"
              placeholder="Example: 1, 0.7, 0.8, 0.6, 1.2, 1, 0.5"
              required
              value={directCapitalCosts}
              onChange={(event) => setDirectCapitalCosts(event.target.value)}
            />
            <LoginFormItem
              controlId="indirectCosts"
              label="List of indirect costs( X 1,000,000$):"
              type="text"
              placeholder="Example: 1, 0.7, 0.8, 0.6, 1.2, 1, 0.5"
              required
              value={indirectCosts}
              onChange={(event) => setIndirectCosts(event.target.value)}
            />
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </LoginFormWrapper>
      </Col>
      <Col xs={12} md={12} lg={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "32px 0",
          }}
        >
          <Doughnut data={doughnutChartData} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
            margin: "32px 0",
          }}
        >
          <h3>
            Sum of exploration and appraisal costs: {finalExpAppCosts / 1000}
            <span style={{ fontWeight: "bold", display: "block" }}>
              (
              {String(
                (finalExpAppCosts) /
                  (finalExpAppCosts +
                    finalDirectCapitalCast +
                    finalIndirectCostsList)
              )
                .split(".")[1]
                ?.slice(0, 4) / 100}
              % )
            </span>
          </h3>
          <h3>
            Sum of direct capital costs:
            {String(finalDirectCapitalCast).split(".")[0] / 1000}
            <span style={{ fontWeight: "bold", display: "block" }}>
              (
              {String(
                (finalDirectCapitalCast) /
                  (finalExpAppCosts +
                    finalDirectCapitalCast +
                    finalIndirectCostsList)
              )
                .split(".")[1]
                ?.slice(0, 4) / 100}
              % )
            </span>
          </h3>
          <h3>
            Sum of indirect costs:
            {String(finalIndirectCostsList).split(".")[0] / 1000}
            <span style={{ fontWeight: "bold", display: "block" }}>
              (
              {String(
                finalIndirectCostsList /
                  (finalExpAppCosts +
                    finalDirectCapitalCast +
                    finalIndirectCostsList)
              )
                .split(".")[1]
                ?.slice(0, 4) / 100}
              % )
            </span>
          </h3>
        </div>
      </Col>
    </Row>
  );
};

export default TotalInvestmentForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LoginFormWrapper } from "../../LoginForm/style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: "Net Present Value Chart",
      font: {
        size: 24,
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    x: {
      axis: "test",
      type: "linear",
      display: true,
      position: "left",
      title: "4545454",
    },
    y1: {
      type: "linear",
      display: true,
      title: "kfsjaljfl",
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const NpvCp = () => {
  // States
  const [projectYears, setProjectYears] = useState(""); // t
  const [discountRate, setDiscountRate] = useState(""); // r
  const [totalRevenue, setTotalRevenue] = useState([]); // TR
  const [totalCosts, setTotalCosts] = useState([]); // TC
  const [npv, setNpv] = useState(0);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/npv", {
        projectYears,
        discountRate,
        totalRevenue,
        totalCosts,
      })
      .then((response) => {
        const {
          discountedPresentValues,
          npv,
          timeSteps,
          totalCosts,
          totalRevnue,
        } = response.data;
        setChartData({
          labels: timeSteps,
          datasets: [
            {
              label: "Total Revenue",
              data: totalRevnue,
              borderColor: "green",
              backgroundColor: "green",
            },
            {
              label: "Total Costs",
              data: totalCosts,
              borderColor: "red",
              backgroundColor: "red",
            },
            {
              label: "Discounted Present Values",
              data: discountedPresentValues,
              borderColor: "blue",
              backgroundColor: "blue",
            },
          ],
        });
        setNpv(npv);
      })
      .catch((error) => console.log(error));
  };

  // JSX
  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <LoginFormWrapper>
          <Form onSubmit={handleSubmit}>
            <LoginFormTitle title="Net Present Value" />
            <LoginFormItem
              controlId="project-years"
              label="Length of project(year):"
              type="number"
              placeholder="Example: 2"
              required
              value={projectYears}
              onChange={(event) => setProjectYears(event.target.value)}
            />
            <LoginFormItem
              controlId="discount-rate"
              label="Discount rate:"
              type="number"
              placeholder="Example: 0.2"
              required
              value={discountRate}
              onChange={(event) => setDiscountRate(event.target.value)}
            />
            <LoginFormItem
              controlId="total-revenue"
              label="List of Total Revenue( X 1,000,000$):"
              type="text"
              placeholder="Example: 1, 0.8, 0.7"
              required
              value={totalRevenue}
              onChange={(event) => setTotalRevenue(event.target.value)}
            />
            <LoginFormItem
              controlId="total-costs"
              label="List of Total costs( X 1,000,000$):"
              type="text"
              placeholder="Example: 0.6, 0.4, 0.5"
              required
              value={totalCosts}
              onChange={(event) => setTotalCosts(event.target.value)}
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
          }}
        >
          <Line options={options} data={chartData} />
        </div>
      </Col>
    </Row>
  );
};

export default NpvCp;

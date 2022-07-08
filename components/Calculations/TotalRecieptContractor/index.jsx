import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { LoginFormWrapper } from "../../LoginForm/style";

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
import { Line, Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
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

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
      text: "Total Receipt Contractor",
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

const TotalRecieptContractor = () => {
  const [opex, setOpex] = useState("");
  const [idcrecBeforeFDP, setIdcrecBeforeFDP] = useState("");
  const [idcrecAfterFDP, setIdcrecAfterFDP] = useState("");
  const [costOfMoney, setCostOfMoney] = useState("");
  const [directCapitalCast, setDirectCapitalCast] = useState("");
  const [remunerationFeeRecovery, setRemunerationFeeRecovery] = useState("");

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/total-receipt-contractor", {
        opex,
        idcrecBeforeFDP,
        idcrecAfterFDP,
        costOfMoney,
        directCapitalCast,
        remunerationFeeRecovery,
      })
      .then((response) => {
        const {
          finalOpex,
          finalIdcrecBeforeFDP,
          finalIdcrecAfterFDP,
          finalCostOfMoney,
          finalDirectCapitalCast,
          finalRemunerationFeeRecovery,
        } = response.data;
        const mainChartData = finalOpex.map((item, index) => {
          return (
            finalOpex[index] +
            finalIdcrecAfterFDP[index] +
            finalIdcrecBeforeFDP[index] +
            finalCostOfMoney[index] +
            finalDirectCapitalCast[index] +
            finalRemunerationFeeRecovery[index]
          );
        });
        setChartData({
          labels: finalOpex.map((item, index) => index),
          datasets: [
            {
              label: "test",
              data: mainChartData,
              borderColor: "black",
              backgroundColor: "black",
            },
          ],
        });
        const sumOpex = finalOpex.reduce((prev, current) => prev + current);
        const sumIdcrecAfterFDP = finalIdcrecAfterFDP.reduce(
          (prev, current) => prev + current
        );
        const sumIdcrecBeforeFDP = finalIdcrecBeforeFDP.reduce(
          (prev, current) => prev + current
        );
        const sumCostOfMoney = finalCostOfMoney.reduce(
          (prev, current) => prev + current
        );
        const sumDirectCapitalCast = finalDirectCapitalCast.reduce(
          (prev, current) => prev + current
        );
        const sumRemunerationFeeRecovery = finalRemunerationFeeRecovery.reduce(
          (prev, current) => prev + current
        );
        setDoughnutChartData({
          labels: [
            "opex",
            "Indirect costs recovery before fdp",
            "Indirect costs recovery after fdp",
            "cost of money recovery",
            "direct capital costs recovery",
            "remuneration recovery",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [
                sumOpex,
                sumIdcrecBeforeFDP,
                sumIdcrecAfterFDP,
                sumCostOfMoney,
                sumDirectCapitalCast,
                sumRemunerationFeeRecovery,
              ],
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("==========>", doughnutChartData)
  }, [doughnutChartData])

  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <LoginFormWrapper>
          <Form onSubmit={handleSubmit}>
            <LoginFormTitle title="Total Receipt Contractor" />
            <LoginFormItem
              controlId="opex"
              label="OPEX:"
              type="text"
              placeholder="Example: 1000000, 2,000000, 1000000"
              required
              value={opex}
              onChange={(event) => setOpex(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-before-fdp"
              label="indirect costs before first date production:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={idcrecBeforeFDP}
              onChange={(event) => setIdcrecBeforeFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-after-fdp"
              label="indirect costs after first date production:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={idcrecAfterFDP}
              onChange={(event) => setIdcrecAfterFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="cost-of-money"
              label="cost of money:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={costOfMoney}
              onChange={(event) => setCostOfMoney(event.target.value)}
            />
            <LoginFormItem
              controlId="direct-capital-cast"
              label="direct capital cast:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={directCapitalCast}
              onChange={(event) => setDirectCapitalCast(event.target.value)}
            />
            <LoginFormItem
              controlId="remuneration-fee-recovery"
              label="remuneration fee recovery:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={remunerationFeeRecovery}
              onChange={(event) =>
                setRemunerationFeeRecovery(event.target.value)
              }
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: '32px 0'
          }}
        >
          <Doughnut data={doughnutChartData} />
        </div>
      </Col>
    </Row>
  );
};

export default TotalRecieptContractor;

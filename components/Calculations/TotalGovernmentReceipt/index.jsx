import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
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

export const mainChartOptions = {
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
      text: "Total Government Receipt",
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

export const oilPriceChartOptions = {
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
      text: "Oil Price",
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

const TotalGovernmentReceipt = () => {
  const [oilPrice, setOilPrice] = useState("");
  const [productionRate, setProductionRate] = useState("");
  const [opex, setOpex] = useState("");
  const [idcrecBeforeFDP, setIdcrecBeforeFDP] = useState("");
  const [idcrecAfterFDP, setIdcrecAfterFDP] = useState("");
  const [costOfMoney, setCostOfMoney] = useState("");
  const [directCapitalCast, setDirectCapitalCast] = useState("");
  const [remunerationFeeRecovery, setRemunerationFeeRecovery] = useState("");

  const [oilPriceChartData, setOilPriceChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [mainChartData, setMainChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/total-govenment-receipt", {
        oilPrice,
        productionRate,
        opex,
        idcrecBeforeFDP,
        idcrecAfterFDP,
        costOfMoney,
        directCapitalCast,
        remunerationFeeRecovery,
      })
      .then((response) => {
        const {
          finalOilPrice,
          finalProductionRate,
          finalOpex,
          finalIdcrecBeforeFDP,
          finalIdcrecAfterFDP,
          finalCostOfMoney,
          finalDirectCapitalCast,
          finalRemunerationFeeRecovery,
        } = response.data;
        setOilPriceChartData({
          labels: finalOilPrice.map((item, index) => index),
          datasets: [
            {
              label: "Oil price",
              data: finalOilPrice,
              borderColor: "black",
              backgroundColor: "black",
            },
          ],
        });
        const mainChartData = finalOilPrice.map((item, index) => {
          return (
            finalOilPrice[index] * finalProductionRate[index] -
            finalOpex[index] +
            finalIdcrecAfterFDP[index] +
            finalIdcrecBeforeFDP[index] +
            finalCostOfMoney[index] +
            finalDirectCapitalCast[index] +
            finalRemunerationFeeRecovery[index]
          );
        });
        setMainChartData({
          labels: finalOilPrice.map((item, index) => index),
          datasets: [
            {
              label: "Total Government Receipt",
              data: mainChartData,
              borderColor: "green",
              backgroundColor: "green",
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <LoginFormWrapper>
          <Form onSubmit={handleSubmit}>
            <LoginFormTitle title="Total Government Reciepts" />
            <LoginFormItem
              controlId="oil-price"
              label="oil price:"
              type="text"
              placeholder="Example: 100, 70, 80"
              required
              value={oilPrice}
              onChange={(event) => setOilPrice(event.target.value)}
            />
            <LoginFormItem
              controlId="production-rate"
              label="production rate:"
              type="text"
              placeholder="Example: 1,000,000, 2,000,000, 1,000,000"
              required
              value={productionRate}
              onChange={(event) => setProductionRate(event.target.value)}
            />
            <LoginFormItem
              controlId="opex"
              label="OPEX:"
              type="text"
              placeholder="Example: 1,000,000, 2,000,000, 1,000,000"
              required
              value={opex}
              onChange={(event) => setOpex(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-before-fdp"
              label="indirect costs before first date production:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={idcrecBeforeFDP}
              onChange={(event) => setIdcrecBeforeFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-after-fdp"
              label="indirect costs after first date production:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={idcrecAfterFDP}
              onChange={(event) => setIdcrecAfterFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="cost-of-money"
              label="cost of money:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={costOfMoney}
              onChange={(event) => setCostOfMoney(event.target.value)}
            />
            <LoginFormItem
              controlId="direct-capital-cast"
              label="direct capital cast:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={directCapitalCast}
              onChange={(event) => setDirectCapitalCast(event.target.value)}
            />
            <LoginFormItem
              controlId="remuneration-fee-recovery"
              label="remuneration fee recovery:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
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
          <Line options={mainChartOptions} data={mainChartData} />
        </div>
        {mainChartData?.datasets.length && (
          <h1 style={{ textAlign: "center", margin: "32px 0" }}>
            Sum:
            {mainChartData.datasets[0].data.reduce(
              (prev, current) => prev + current
            )}
          </h1>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <Line options={oilPriceChartOptions} data={oilPriceChartData} />
        </div>
      </Col>
    </Row>
  );
};

export default TotalGovernmentReceipt;

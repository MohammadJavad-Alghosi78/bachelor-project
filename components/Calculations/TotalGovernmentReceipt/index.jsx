import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { Doughnut, Line } from "react-chartjs-2";
import numberWithCommas from "../../../utils/number-seperator";
import { Table, TableCol, TableRow } from "../TotalRecieptContractor/style";

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
      axis: "",
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
      axis: "",
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

export const productionRateChartOptions = {
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
      text: "Production Rate",
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
      axis: "",
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

export const eachYearOptions = {
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
      text: "Each Year(Percent)",
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
      axis: "",
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

  const [productionRateChartData, setProductionRateChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [oilPriceChartData, setOilPriceChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [mainChartData, setMainChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [eachYearTotalGovernment, setEachYearTotalGovernment] = useState({
    labels: [],
    datasets: [],
  });

  const [sumContractor, setSumContractor] = useState(0);
  const [sumGovernment, setSumGovernment] = useState(0);
  const [doughnutChartData, setDoughnutChartData] = useState({
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
          labels: finalOilPrice.map((item, index) => index + 1),
          datasets: [
            {
              label: "Oil price",
              data: finalOilPrice,
              borderColor: "black",
              backgroundColor: "black",
            },
          ],
        });
        setProductionRateChartData({
          labels: finalOilPrice.map((item, index) => index + 1),
          datasets: [
            {
              label: "Total Government Receipt",
              data: finalProductionRate,
              borderColor: "blue",
              backgroundColor: "blue",
            },
          ],
        });
        const mainChartData = finalOilPrice.map((item, index) => {
          return (
            finalOilPrice[index] * finalProductionRate[index] -
            finalOpex[index] -
            finalIdcrecAfterFDP[index] -
            finalIdcrecBeforeFDP[index] -
            finalCostOfMoney[index] -
            finalDirectCapitalCast[index] -
            finalRemunerationFeeRecovery[index]
          );
        });
        setMainChartData({
          labels: finalOilPrice.map((item, index) => index + 1),
          datasets: [
            {
              label: "Total Government Receipt",
              data: mainChartData,
              borderColor: "green",
              backgroundColor: "green",
            },
          ],
        });
        const eachYearData = finalOilPrice.map((item, index) => {
          return (
            ((finalOilPrice[index] * finalProductionRate[index] -
              finalOpex[index] -
              finalIdcrecAfterFDP[index] -
              finalIdcrecBeforeFDP[index] -
              finalCostOfMoney[index] -
              finalDirectCapitalCast[index] -
              finalRemunerationFeeRecovery[index]) *
              100) /
            (finalOilPrice[index] * finalProductionRate[index])
          );
        });
        setEachYearTotalGovernment({
          labels: finalOilPrice.map((item, index) => index + 1),
          datasets: [
            {
              label: "Total Government Receipt",
              data: eachYearData,
              borderColor: "green",
              backgroundColor: "green",
            },
          ],
        });
        setSumContractor(
          finalOilPrice
            .map(
              (item, index) =>
                finalOpex[index] +
                finalIdcrecAfterFDP[index] +
                finalIdcrecBeforeFDP[index] +
                finalCostOfMoney[index] +
                finalDirectCapitalCast[index] +
                finalRemunerationFeeRecovery[index]
            )
            .reduce((prev, current) => prev + current)
        );
        setSumGovernment(
          finalOilPrice
            .map(
              (item, index) =>
                finalOilPrice[index] * finalProductionRate[index] -
                finalOpex[index] -
                finalIdcrecAfterFDP[index] -
                finalIdcrecBeforeFDP[index] -
                finalCostOfMoney[index] -
                finalDirectCapitalCast[index] -
                finalRemunerationFeeRecovery[index]
            )
            .reduce((prev, current) => prev + current)
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (sumGovernment && sumContractor) {
      setDoughnutChartData({
        labels: ["Total Receipt Contractor", "Total Government Receipt"],
        datasets: [
          {
            label: "# of Votes",
            data: [sumContractor, sumGovernment],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
          },
        ],
      });
    }
    console.log("sumGovernment: ", sumGovernment);
    console.log("sumContractor: ", sumContractor);
  }, [sumGovernment, sumContractor]);

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
            {numberWithCommas(
              mainChartData.datasets[0].data.reduce(
                (prev, current) => prev + current
              )
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "32px 0",
          }}
        >
          <Line
            options={productionRateChartOptions}
            data={productionRateChartData}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "32px 0",
          }}
        >
          <Line options={eachYearOptions} data={eachYearTotalGovernment} />
        </div>
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
            width: "100%",
            alignItems: "center",
            margin: "32px 0",
          }}
        >
          <Table>
            <TableRow>
              <TableCol>Total Receipt Contractor</TableCol>
              <TableCol>
                {(
                  (sumContractor * 100) /
                  (sumContractor + sumGovernment)
                ).toFixed(2)}
                %
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>Total Government Receipt</TableCol>
              <TableCol>
                {(
                  (sumGovernment * 100) /
                  (sumContractor + sumGovernment)
                ).toFixed(2)}
                %
              </TableCol>
            </TableRow>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default TotalGovernmentReceipt;

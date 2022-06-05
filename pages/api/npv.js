import npvModel from "../../models/npv";

const NpvHandler = (req, res) => {
  const { projectYears, discountRate, totalRevenue, totalCosts } = req.body;
  const data = npvModel(projectYears, discountRate, totalRevenue, totalCosts);
  res.status(200).json(data);
};

export default NpvHandler;

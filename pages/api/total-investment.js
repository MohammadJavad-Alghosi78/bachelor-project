import totalInvestment from "../../models/total-investment";

const totalInvestmentHandler = (req, res) => {
  const { X, XPrim, expAppCosts, directCapitalCosts, indirectCosts } = req.body;
  const totalInvestmentAmount = totalInvestment(
    X,
    XPrim,
    expAppCosts,
    directCapitalCosts,
    indirectCosts
  );
  res.status(200).json({ totalInvestmentAmount });
};

export default totalInvestmentHandler;

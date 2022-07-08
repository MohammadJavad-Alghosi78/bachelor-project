const totalInvestment = (
  x,
  xprim,
  expAppCostsList,
  directCapitalCostsList,
  indirectCostsList
) => {
  const expAppCostsSumation = expAppCostsList
    ?.split(",")
    .reduce(
      (prevExpAppCost, nextExpAppCost) => +prevExpAppCost + +nextExpAppCost,
      0
    );
  const directCapitalCostsSumation = directCapitalCostsList
    ?.split(",")
    .reduce(
      (prevExpAppCost, nextExpAppCost) => +prevExpAppCost + +nextExpAppCost,
      0
    );
  const indirectCostsSumation = indirectCostsList
    ?.split(",")
    .reduce(
      (prevExpAppCost, nextExpAppCost) => +prevExpAppCost + +nextExpAppCost,
      0
    );

  const finalExpAppCostsList = expAppCostsList
    .split(",")
    .map((item) => parseFloat(item));
  const finalDirectCapitalCast = directCapitalCostsList
    .split(",")
    .map((item) => parseFloat(item));
  const finalIndirectCostsList = indirectCostsList
    .split(",")
    .map((item) => parseFloat(item));

  return {
    totalInvestmentAmount:
      expAppCostsSumation + directCapitalCostsSumation + indirectCostsSumation,
    finalExpAppCostsList,
    finalDirectCapitalCast,
    finalIndirectCostsList,
  };
};

export default totalInvestment;

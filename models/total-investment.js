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

  return (
    expAppCostsSumation + directCapitalCostsSumation + indirectCostsSumation
  );
};

export default totalInvestment;

import arrayRange from "../utils/array-range";

const totalGovernmentReceiptModel = (
  oilPrice,
  productionRate,
  opex,
  idcrecBeforeFDP,
  idcrecAfterFDP,
  costOfMoney,
  directCapitalCast,
  remunerationFeeRecovery
) => {
  const finalOilPrice = oilPrice.split(",").map((item) => parseFloat(item));
  const finalProductionRate = productionRate
    .split(",")
    .map((item) => parseFloat(item));
  const finalOpex = opex.split(",").map((item) => parseFloat(item));
  const finalIdcrecBeforeFDP = idcrecBeforeFDP
    .split(",")
    .map((item) => parseFloat(item));
  const finalIdcrecAfterFDP = idcrecAfterFDP
    .split(",")
    .map((item) => parseFloat(item));
  const finalCostOfMoney = costOfMoney
    .split(",")
    .map((item) => parseFloat(item));
  const finalDirectCapitalCast = directCapitalCast
    .split(",")
    .map((item) => parseFloat(item));
  const finalRemunerationFeeRecovery = remunerationFeeRecovery
    .split(",")
    .map((item) => parseFloat(item));
  return {
    finalOilPrice,
    finalProductionRate,
    finalOpex,
    finalIdcrecBeforeFDP,
    finalIdcrecAfterFDP,
    finalCostOfMoney,
    finalDirectCapitalCast,
    finalRemunerationFeeRecovery,
  };
};

export default totalGovernmentReceiptModel;

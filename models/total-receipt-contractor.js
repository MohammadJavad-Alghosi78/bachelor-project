import arrayRange from "../utils/array-range";

const totalReceiptContractorModel = (
  opex,
  idcrecBeforeFDP,
  idcrecAfterFDP,
  costOfMoney,
  directCapitalCast,
  remunerationFeeRecovery
) => {
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
    finalOpex,
    finalIdcrecBeforeFDP,
    finalIdcrecAfterFDP,
    finalCostOfMoney,
    finalDirectCapitalCast,
    finalRemunerationFeeRecovery,
  };
};

export default totalReceiptContractorModel;

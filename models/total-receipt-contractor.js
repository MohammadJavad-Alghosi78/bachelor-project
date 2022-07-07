import arrayRange from "../utils/array-range";

const totalReceiptContractorModel = (
  opex,
  idcrecBeforeFDP,
  idcrecAfterFDP,
  costOfMoney,
  directCapitalCast
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

  return {
    finalOpex,
    finalIdcrecBeforeFDP,
    finalIdcrecAfterFDP,
    finalCostOfMoney,
    finalDirectCapitalCast,
  };
};

export default totalReceiptContractorModel;

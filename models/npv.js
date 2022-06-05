import arrayRange from "../utils/array-range";

const npvModel = (N, r, TR, TC) => {
  const finalTR = TR.split(",").map((item) => parseFloat(item));
  const finalTC = TC.split(",").map((item) => parseFloat(item));
  const npv = parseFloat(
    arrayRange(0, 1, N)
      .map(
        (item) =>
          (parseFloat(finalTR[item]) - parseFloat(finalTC[item])) /
          (1 + parseFloat(r)) ** item
      )
      .reduce((prev, next) => prev + next)
      .toFixed(6)
  );

  return {
    totalRevnue: finalTR,
    totalCosts: finalTC,
    npv,
  };
};

export default npvModel;

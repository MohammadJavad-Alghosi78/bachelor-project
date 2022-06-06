import arrayRange from "../utils/array-range";

const npvModel = (N, r, TR, TC) => {
  const finalTR = TR.split(",").map((item) => parseFloat(item));
  const finalTC = TC.split(",").map((item) => parseFloat(item));
  const timeSteps = arrayRange(0, 1, N);
  const npv = parseFloat(
    timeSteps
      .map(
        (item) =>
          (parseFloat(finalTR[item]) - parseFloat(finalTC[item])) /
          (1 + parseFloat(r)) ** item
      )
      .reduce((prev, next) => prev + next)
      .toFixed(6)
  );

  const discountedPresentValues = timeSteps.map(
    (item) =>
      +(
        (parseFloat(finalTR[item]) - parseFloat(finalTC[item])) /
        (1 + parseFloat(r)) ** item
      ).toFixed(6)
  );

  return {
    totalRevnue: finalTR,
    totalCosts: finalTC,
    npv,
    timeSteps,
    discountedPresentValues,
  };
};

export default npvModel;

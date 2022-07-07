import totalGovernmentReceiptModel from "../../models/total-government-receipt";

const totalGovernmentReceiptHandler = (req, res) => {
  const {
    oilPrice,
    productionRate,
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast,
    remunerationFeeRecovery,
  } = req.body;
  const data = totalGovernmentReceiptModel(
    oilPrice,
    productionRate,
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast,
    remunerationFeeRecovery
  );
  res.status(200).json(data);
};

export default totalGovernmentReceiptHandler;

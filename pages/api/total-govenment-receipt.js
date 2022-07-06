import totalGovernmentReceiptModel from "../../models/total-government-receipt";

const NpvHandler = (req, res) => {
  const {
    oilPrice,
    productionRate,
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast,
  } = req.body;
  const data = totalGovernmentReceiptModel(
    oilPrice,
    productionRate,
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast
  );
  res.status(200).json(data);
};

export default NpvHandler;

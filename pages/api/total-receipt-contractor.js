import totalReceiptContractorModel from "../../models/total-receipt-contractor";

const totalReceiptContractorHandler = (req, res) => {
  const {
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast,
  } = req.body;
  const data = totalReceiptContractorModel(
    opex,
    idcrecBeforeFDP,
    idcrecAfterFDP,
    costOfMoney,
    directCapitalCast
  );
  console.log(data)
  res.status(200).json(data);
};

export default totalReceiptContractorHandler;

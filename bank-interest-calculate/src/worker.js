const worker = () => {
  const Constants = require("./helpers/constants")
  const NUMBER_OF_MONTH_IN_YEAR = 12;
  function getDepositData() {
    return {};
  }
  function getLoanData(
    money,
    rate,
    year,
    floatingInterest,
    numberOfPreferentialYears
  ) {
    let numberOfMonth = year * NUMBER_OF_MONTH_IN_YEAR;
    let principalMoney = money / numberOfMonth;
    let ratePerMonth = rate / NUMBER_OF_MONTH_IN_YEAR;
    let data = [];
    let totalInterest = 0;
    const endOfPreferentialTime =
      numberOfPreferentialYears * NUMBER_OF_MONTH_IN_YEAR + 1;
    for (let index = 1; index <= numberOfMonth; index++) {
      if (index === endOfPreferentialTime) {
        rate += floatingInterest;
        console.log(rate);
        ratePerMonth = rate / NUMBER_OF_MONTH_IN_YEAR;
      }
      let moneyByRatePerMonth = (money * ratePerMonth) / 100;
      totalInterest += moneyByRatePerMonth;
      money = money - principalMoney;
      const loanInformation = {
        month: index,
        principalMoney: principalMoney.toFixed(),
        interestMoney: moneyByRatePerMonth.toFixed(),
        monthlyPayment: (principalMoney + moneyByRatePerMonth).toFixed(),
        moneyStillOwed: money.toFixed(),
      };
      data.push(loanInformation);
    }
    return { data: data, totalInterest: totalInterest.toFixed() };
  }

  onmessage = (e) => {
    console.log(e.data);
    console.log(e.data.param);
    const {
      loan,
      loanInterestRate,
      loanTerm,
      floatingInterest,
      numberOfPreferentialYears,
    } = e.data.param;
    const calculatingType = e.data.type;
    let result = {};
    switch (calculatingType) {
      case Constants.CALCULATING_LOAN_INTEREST:
        result = getLoanData(
          Number(loan),
          Number(loanInterestRate),
          Number(loanTerm),
          Number(floatingInterest),
          Number(numberOfPreferentialYears)
        );
        break;
      case Constants.CALCULATING_DEPOSIT_INTEREST:
        result = getDepositData();
        break;
      default:
        break;
    }
    postMessage({
      result: result,
    });
  };
};

let code = worker.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);
module.exports = worker_script;

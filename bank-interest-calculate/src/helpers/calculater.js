const Constants = require("./constants");
function getLoanData(
  money,
  rate,
  year,
  monthlyPayment,
  floatingInterest,
  numberOfPreferentialYears
) {
  let numberOfMonth = year * Constants.NUMBER_OF_MONTH_IN_YEAR;
  // let principalMoney = money / numberOfMonth;
  let ratePerMonth = rate / Constants.NUMBER_OF_MONTH_IN_YEAR;
  let data = [];
  let totalInterest = 0;
  const endOfPreferentialTime =
    numberOfPreferentialYears * Constants.NUMBER_OF_MONTH_IN_YEAR + 1;
  for (let index = 1; index <= numberOfMonth; index++) {
    if(money <= 0) break;
    if (index === endOfPreferentialTime) {
      rate += floatingInterest;
      ratePerMonth = rate / Constants.NUMBER_OF_MONTH_IN_YEAR;
    }
    let moneyByRatePerMonth = (money * ratePerMonth) / 100;
    let principalMoney = monthlyPayment - moneyByRatePerMonth;
    if(money <= monthlyPayment){
      principalMoney = money - moneyByRatePerMonth
      money = 0;
    }
    else {
      money = money - principalMoney;
    }
    totalInterest += moneyByRatePerMonth;
    const loanInformation = {
      month: index,
      principalMoney: principalMoney.toFixed(3),
      interestMoney: moneyByRatePerMonth.toFixed(3),
      monthlyPayment: (principalMoney + moneyByRatePerMonth).toFixed(3),
      moneyStillOwed: money.toFixed(3),
    };
    data.push(loanInformation);
  }
  return { data: data, totalInterest: totalInterest.toFixed(3) };
}

function getInterestRateByWeek(numberOfWeek, interestRate) {
  const result = (interestRate * numberOfWeek) / Constants.NUMBER_OF_WEEK_IN_YEAR ;
  console.log("result: ", result)
  return result;
}

function getInterestRateByMonth(interestRate, numberOfMonth) {
    console.log("getInterestRateByMonth", interestRate)
    console.log(numberOfMonth)
  return (
    (interestRate / Constants.NUMBER_OF_MONTH_IN_YEAR ) * numberOfMonth
  );
}

function getInterestRateByDepositType(depositType, interestRate) {
  switch (Constants.DEPOSIT_TYPE[depositType]) {
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_1WEEK:
      return getInterestRateByWeek(1, interestRate);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_2WEEK:
      return getInterestRateByWeek(2, interestRate);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_3WEEK:
      return getInterestRateByWeek(3, interestRate);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_1MONTH:
      return getInterestRateByMonth(interestRate, 1);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_2MONTH:
      return getInterestRateByMonth(interestRate, 2);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_3MONTH:
      return getInterestRateByMonth(interestRate, 3);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_4MONTH:
      return getInterestRateByMonth(interestRate, 4);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_5MONTH:
      return getInterestRateByMonth(interestRate, 5);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_6MONTH:
      return getInterestRateByMonth(interestRate, 6);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_7MONTH:
      return getInterestRateByMonth(interestRate, 7);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_8MONTH:
      return getInterestRateByMonth(interestRate, 8);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_9MONTH:
      return getInterestRateByMonth(interestRate, 9);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_10MONTH:
      return getInterestRateByMonth(interestRate, 10);
    case Constants.DEPOSIT_TYPE.DEPOSIT_BY_11MONTH:
      return getInterestRateByMonth(interestRate, 11);
    default:
      return interestRate;
  }
}

function getDepositData(money, interestRate, term, depositType) {
  let data = [];
  let totalInterest = 0;
  const rate = getInterestRateByDepositType(depositType, interestRate)
  console.log(rate)
  for (let index = 1; index <= term; index++) {
    const interestMoney = (money * rate);
    console.log(interestMoney)
    money += interestMoney;
    const obj = {
      termNumber: index,
      interestMoney: interestMoney.toFixed(3),
      availableMoney: money.toFixed(3),
    };
    data.push(obj);
    totalInterest += interestMoney;
  }
  return { data: data, totalInterest: totalInterest.toFixed(3) };
}

const calculater = { getLoanData, getDepositData };

export default calculater;

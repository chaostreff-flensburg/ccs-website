type fundingType = {
  fundedAmount: string;
  goal: string;
  percentage: number;
};

const fundedAmountNumber = 1470.42;
const goalNumber = 20000;

const fundedAmount = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
}).format(fundedAmountNumber);

const goal = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
}).format(goalNumber);

export const funding: fundingType = {
  fundedAmount: fundedAmount,
  goal: goal,                 
  percentage: Math.round((fundedAmountNumber / goalNumber) * 100),
};

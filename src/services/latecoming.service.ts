// Penalty of every minute late. Starts from the first minute until the tenth-minute
const NOKPenaltyPerMinuteInc = [12, 9, 7, 6, 5, 4, 3, 2, 1, 1];

// Probability for discount or addition of penalty
const ADDITION_PROBABILITY = 0.05;
const DISCOUNT_PROBABILITY = 0.1;

// Percentage value if addition or discount appears
const ADDITION_PERCENT = 0.1;
const DISCOUNT_PERCENT = 0.4;

interface PenaltyResult {
  penaltyNOK: number;
  luckyDiscount: number;
}

export const calculateLatecomingPenalty = (minutes: number): PenaltyResult => {
  // calculate NOK penalty
  const penaltyNOK = getPenaltyNOK(minutes);

  // chance for discount/addition
  const luckyDiscountResult = luckyDiscountOrNot(penaltyNOK);

  const penaltyAfterDiscount = penaltyNOK + luckyDiscountResult;

  return {
    penaltyNOK: Math.round(penaltyAfterDiscount),
    luckyDiscount: Math.round(luckyDiscountResult),
  };
};

/**
 * Input: minutes late
 * @returns penalty in NOK
 * */
const getPenaltyNOK = (minutes: number): number => {
  const penaltyListNOK = NOKPenaltyPerMinuteInc.slice(0, minutes);
  const totalPenalty = penaltyListNOK.reduce((acc, i) => acc + i, 0);
  return totalPenalty;
};

/**
 * Input: penalty
 * @returns negative number if discount, positive number if addition. Returns 0 if no discount or addition is given.
 */
const luckyDiscountOrNot = (penalty: number): number => {
  const luckyNumber = Math.random();

  if (luckyNumber <= ADDITION_PROBABILITY) {
    return penalty * ADDITION_PERCENT;
  } else if (
    luckyNumber > ADDITION_PROBABILITY &&
    luckyNumber <= DISCOUNT_PROBABILITY + ADDITION_PROBABILITY
  ) {
    return -(penalty * DISCOUNT_PERCENT);
  }

  return 0;
};

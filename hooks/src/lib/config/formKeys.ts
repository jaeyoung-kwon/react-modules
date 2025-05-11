export const CARD_NUMBERS_KEY = {
  part1: 'part1',
  part2: 'part2',
  part3: 'part3',
  part4: 'part4',
} as const;
export type CardNumbersKey = keyof typeof CARD_NUMBERS_KEY;

export const EXPIRY_DATE_KEY = {
  month: 'month',
  year: 'year',
} as const;
export type ExpiryDateKey = keyof typeof EXPIRY_DATE_KEY;

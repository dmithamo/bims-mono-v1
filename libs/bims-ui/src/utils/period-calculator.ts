import { TPeriodBtnDates } from '@bims/bims-ui';
import { padWithZero } from './num-format';

const MILLIS_IN_A_YEAR = 12 * 30.44 * 24 * 60 * 60 * 1000;

export function periodCalculator({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}): TPeriodBtnDates {
  // @ts-ignore
  let diffInMillis = endDate - startDate;

  const years = Math.floor(diffInMillis / MILLIS_IN_A_YEAR);
  diffInMillis -= years * MILLIS_IN_A_YEAR;
  const months = Math.floor(diffInMillis / (MILLIS_IN_A_YEAR / 12));
  diffInMillis -= months * (MILLIS_IN_A_YEAR / 12);
  const days = Math.floor(diffInMillis / (MILLIS_IN_A_YEAR / 12 / 30.44));
  diffInMillis -= days * (MILLIS_IN_A_YEAR / 12 / 30.44);
  const hours = Math.floor(diffInMillis / (MILLIS_IN_A_YEAR / 12 / 30.44 / 24));
  diffInMillis -= hours * (MILLIS_IN_A_YEAR / 12 / 30.44 / 24);
  const minutes = Math.floor(
    diffInMillis / (MILLIS_IN_A_YEAR / 12 / 30.44 / 24 / 60)
  );
  diffInMillis -= minutes * (MILLIS_IN_A_YEAR / 12 / 30.44 / 24 / 60);
  const seconds = Math.floor(diffInMillis / 1000);

  return {
    years: {
      amount: padWithZero(years),
      label: 'years',
    },
    months: {
      amount: padWithZero(months),
      label: 'months',
    },
    days: {
      amount: padWithZero(days),
      label: 'days',
    },
    hours: {
      amount: padWithZero(hours),
      label: 'hours',
    },
    minutes: {
      amount: padWithZero(minutes),
      label: 'minutes',
    },
    seconds: {
      amount: padWithZero(seconds),
      label: 'seconds',
    },
  };
}

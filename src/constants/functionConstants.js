import moment from 'moment'

export const dateStartOf = date => moment(date).startOf('day')
export const dateEndOf = date => moment(date).endOf('day')
export const weekPeriod = date => moment(date).subtract(1, 'weeks').startOf('date')
export const monthPeriod = date => moment(date).subtract(1, 'month').startOf('date')
export const sixMonthPeriod = date => moment(date).subtract(6, 'months').startOf('date')
export const compareDates = (fir, sec) => moment(fir).isSame(moment(sec))


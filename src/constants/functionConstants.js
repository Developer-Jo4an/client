import moment from 'moment'

export const dateStartOf = date => moment(date).startOf('day')
export const dateEndOf = date => moment(date).endOf('day')
export const weekAgo = date => moment(date).subtract(1, 'weeks').startOf('date')
export const monthAgo = date => moment(date).subtract(1, 'months').startOf('date')
export const halfYearAgo = date => moment(date).subtract(6, 'months').startOf('date')
export const yearAgo = date => moment(date).subtract(1, 'years').startOf('date')
export const allTimeAgo = date => moment(date).subtract(30, 'years').startOf('data')
export const compareDates = (fir, sec) => moment(fir).isSame(moment(sec))

// 01.01.24
export const formattedRange = range => `${moment(range[0]).format('DD.MM.YY')} - ${moment(range[1]).format('DD.MM.YY')}`




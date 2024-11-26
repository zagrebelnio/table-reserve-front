const formatDate = (date) =>
  new Date(date.toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .split('.')[0]
    .slice(0, 16);

export default formatDate;

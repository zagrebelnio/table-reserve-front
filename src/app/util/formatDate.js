const formatDate = (date) => {
  const local = new Date(date);
  const offsetMs = local.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(local.getTime() - offsetMs);

  return localDate.toISOString().slice(0, 16);
};

export default formatDate;

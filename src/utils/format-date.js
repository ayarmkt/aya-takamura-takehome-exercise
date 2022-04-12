const monthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const formatDate = (enteredDate) => {
  if (!enteredDate) return '';
  const date = new Date(enteredDate);

  const month = monthArr[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${day} ${month} ${year} ${hour}:${min}`;
};

export default formatDate;

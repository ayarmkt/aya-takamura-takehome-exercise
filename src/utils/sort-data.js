//import { useSelector } from 'react-redux';

//const data = require('../assets/tasks.json');

const sortData = (data, selectedTab) => {
  let usedData;
  switch (selectedTab) {
    case 'All Tasks':
      usedData = data;
      //usedData = tasks;
      break;

    case 'Closed Tasks':
      usedData = data.filter((info) => info.selection.status === 'closed');
      //usedData = tasks.filter((info) => info.selection.status === 'closed');
      break;

    case 'Close to Deadline':
      usedData = [...data].sort((a, b) => {
        if (a.selection.privateUntil === null) return 1;
        if (b.selection.privateUntil === null) return -1;
        if (a.selection.privateUntil === b.selection.privateUntil) {
          return 0;
        }

        return new Date(a.selection.privateUntil) <
          new Date(b.selection.privateUntil)
          ? -1
          : 1;
      });
      break;

    default:
      usedData = data;
      break;
  }

  return usedData;
};

export default sortData;

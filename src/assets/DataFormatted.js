import { useSelector } from 'react-redux';

const jsonData = require('./tasks.json');

const DataFormatted = () => {
  const { selectedTab } = useSelector((state) => state.ui);

  let usedData;
  switch (selectedTab) {
    case 'All Tasks':
      usedData = jsonData;
      break;

    case 'Closed Tasks':
      usedData = jsonData.filter((info) => info.selection.status === 'closed');
      break;

    case 'Close to Deadline':
      usedData = [...jsonData].sort((a, b) => {
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
      usedData = jsonData;
      break;
  }

  return usedData;
};

export default DataFormatted;

import TaskItemContainer from '../UI/TaskItemContainer';

const TaskSubSection = ({ data }) => {
  const tasks = data.map((task) => <TaskItemContainer task={task} />);
  return (
    <div>
      <h2>TITLE</h2>
      <div>{tasks}</div>
    </div>
  );
};

export default TaskSubSection;

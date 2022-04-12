import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import TaskItemDetailModal from './components/TaskItemDetailModal';
import { useSelector } from 'react-redux';

function App() {
  const { modalOpen } = useSelector((state) => state.ui);

  return (
    <React.Fragment>
      <MainPage />
      {modalOpen && <TaskItemDetailModal />}
    </React.Fragment>
  );
}

export default App;

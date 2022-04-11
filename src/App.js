import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import TaskItemDetailModal from './components/TaskItemDetailModal';

function App() {
  return (
    <React.Fragment>
      <MainPage />
      <TaskItemDetailModal />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import CreateTask from './components/CreateTask';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

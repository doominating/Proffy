import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/learn' component={TeacherList} />
      <Route path='/teach' component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;

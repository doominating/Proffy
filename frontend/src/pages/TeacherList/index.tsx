import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import { SUBJECTS, WEEK_DAYS } from '../../utils/constants';
import './styles.css';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers'>
          <Select name='subject' label='Matéria' options={WEEK_DAYS} />
          <Select name='week_day' label='Dia da semana' options={SUBJECTS} />
          <Input type='time' name='time' label='Hora' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;

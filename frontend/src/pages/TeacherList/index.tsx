import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import { SUBJECTS, WEEK_DAYS } from '../../utils/constants';
import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            options={SUBJECTS}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <Select
            name='week_day'
            label='Dia da semana'
            options={WEEK_DAYS}
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
          />
          <Input
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;

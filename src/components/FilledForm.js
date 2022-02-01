import React from 'react';
import Header from './Header';
import './FilledForm.css';

const FilledForm = (props) => {
  return (
    <div className='container'>
      <Header
        text={`${props.state.fields.name} ${props.state.fields.surname}`}
      />
      <table>
        <tbody>
          <tr>
            <th>Дата рождения</th>
            <td>{props.state.fields.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Телефон</th>
            <td>{props.state.fields.phone}</td>
          </tr>
          <tr>
            <th>Сайт</th>
            <td>{props.state.fields.site}</td>
          </tr>
          <tr>
            <th>О себе</th>
            <td>{props.state.fields.about}</td>
          </tr>
          <tr>
            <th>Стек технологий </th>
            <td>{props.state.fields.technologyStack}</td>
          </tr>
          <tr>
            <th>Описание последнего проекта</th>
            <td>{props.state.fields.lastProject}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FilledForm;

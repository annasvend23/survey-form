import React from "react";
import Header from './Header';
import "./FilledForm.css";

class FilledForm extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header text={`${this.props.state.fields.name} ${this.props.state.fields.surname}`}/>
        <table>
          <tr>
            <th>Дата рождения</th>
            <td>{this.props.state.fields.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Телефон</th>
            <td>{this.props.state.fields.phone}</td>
          </tr>
          <tr>
            <th>Сайт</th>
            <td>{this.props.state.fields.site}</td>
          </tr>
          <tr>
            <th>О себе</th>
            <td>{this.props.state.fields.about}</td>
          </tr>
          <tr>
            <th>Стек технологий </th>
            <td>{this.props.state.fields.technologyStack}</td>
          </tr>
          <tr>
            <th>Описание последнего проекта</th>
            <td>{this.props.state.fields.lastProject}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default FilledForm;

import React from 'react';
import FormField from './FormField';
import Button from './Button';
import FilledForm from './FilledForm';
import Header from './Header';
import './SurveyForm.css';

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        surname: '',
        dateOfBirth: '',
        phone: '',
        site: '',
        about: '',
        technologyStack: '',
        lastProject: '',
      },
      errors: {},
      isSubmit: false,
      count: {
        about: 0,
        technologyStack: 0,
        lastProject: 0,
      },
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [e.target.name]: e.target.value.trim(),
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      errors: this.validate(this.state.fields),
      isSubmit: true,
    });
  };

  counter = (e) => {
    this.setState((prevState) => ({
      count: {
        ...prevState.count,
        [e.target.name]: e.target.value.length,
      },
    }));
  };

  validate = (values) => {
    const errors = {};
    const limit = 600;
    const regexPhone = /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
    if (!values.name) {
      errors.name = 'Поле пустое. Заполните пожалуйста';
    } else if (values.name[0] !== values.name[0].toUpperCase()) {
      errors.name = 'Первая буква должна быль заглавной';
    }

    if (!values.surname) {
      errors.surname = 'Поле пустое. Заполните пожалуйста';
    } else if (values.surname[0] !== values.surname[0].toUpperCase()) {
      errors.surname = 'Первая буква должна быль заглавной';
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Поле пустое. Заполните пожалуйста';
    }

    if (!values.phone) {
      errors.phone = 'Поле пустое. Заполните пожалуйста';
    } else if (!values.phone.match(regexPhone)) {
      errors.phone = 'Введите телефон в формате 7-7777-77-77';
    }

    if (!values.site) {
      errors.site = 'Поле пустое. Заполните пожалуйста';
    } else if (!values.site.startsWith('https://')) {
      errors.site = 'Сайт должен начинаться с https://';
    }

    if (!values.about) {
      errors.about = 'Поле пустое. Заполните пожалуйста';
    } else if (values.about.length >= limit) {
      errors.about = 'Превышен лимит символов в поле';
    }

    if (!values.technologyStack) {
      errors.technologyStack = 'Поле пустое. Заполните пожалуйста';
    } else if (values.technologyStack.length >= limit) {
      errors.technologyStack = 'Превышен лимит символов в поле';
    }

    if (!values.lastProject) {
      errors.lastProject = 'Поле пустое. Заполните пожалуйста';
    } else if (values.lastProject.length >= limit) {
      errors.lastProject = 'Превышен лимит символов в поле';
    }

    return errors;
  };

  clearForm = () => {
    this.setState({
      fields: {
        name: '',
        surname: '',
        dateOfBirth: '',
        phone: '',
        site: '',
        about: '',
        technologyStack: '',
        lastProject: '',
      },
      errors: {},
      isSubmit: false,
      count: {
        about: 0,
        technologyStack: 0,
        lastProject: 0,
      },
    });
  };

  render() {
    const isSubmitWithoutErrors =
      Object.keys(this.state.errors).length === 0 && this.state.isSubmit;

    return (
      <>
        {isSubmitWithoutErrors ? (
          <FilledForm state={this.state} />
        ) : (
          <form className='form' onSubmit={this.handleSubmit}>
            <Header text='Создание анкеты' />
            <FormField
              isMultiline={false}
              type='text'
              value={this.state.fields.name}
              name='name'
              onChange={this.handleChange}
              label='Имя'
              error={this.state.errors.name}
            />
            <FormField
              isMultiline={false}
              type='text'
              value={this.state.fields.surname}
              name='surname'
              onChange={this.handleChange}
              label='Фамилия'
              error={this.state.errors.surname}
            />
            <FormField
              isMultiline={false}
              type='date'
              value={this.state.fields.dateOfBirth}
              name='dateOfBirth'
              onChange={this.handleChange}
              label='Дата рождения'
              error={this.state.errors.dateOfBirth}
            />
            <FormField
              isMultiline={false}
              type='tel'
              value={this.state.fields.phone}
              name='phone'
              onChange={this.handleChange}
              label='Телефон формата 7-7777-77-77'
              error={this.state.errors.phone}
            />
            <FormField
              isMultiline={false}
              type='text'
              value={this.state.fields.site}
              name='site'
              onChange={this.handleChange}
              label='Сайт'
              error={this.state.errors.site}
            />
            <FormField
              isMultiline={true}
              value={this.state.fields.about}
              name='about'
              onChange={(e) => {
                this.handleChange(e);
                this.counter(e);
              }}
              label='О себе'
              error={this.state.errors.about}
              count={this.state.count.about}
              limit={600}
            />
            <FormField
              isMultiline={true}
              value={this.state.fields.technologyStack}
              name='technologyStack'
              onChange={(e) => {
                this.handleChange(e);
                this.counter(e);
              }}
              label='Стек технологий'
              error={this.state.errors.technologyStack}
              count={this.state.count.technologyStack}
              limit={600}
            />
            <FormField
              isMultiline={true}
              value={this.state.fields.lastProject}
              name='lastProject'
              onChange={(e) => {
                this.handleChange(e);
                this.counter(e);
              }}
              label='Описание последнего проекта'
              error={this.state.errors.lastProject}
              count={this.state.count.lastProject}
              limit={600}
            />
            <div className='buttons-container'>
              <Button
                className='button_submit'
                text='Сохранить'
                type='submit'
              />
              <Button
                className='button_clear'
                text='Очистить'
                type='button'
                onClick={this.clearForm}
              />
            </div>
          </form>
        )}
      </>
    );
  }
}

export default SurveyForm;

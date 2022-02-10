import React, { useCallback } from 'react';
import FormField from './FormField';
import Button from './Button';
import FilledForm from './FilledForm';
import Header from './Header';
import useSurveyForm from './useSurveyForm';
import validate from './validate';
import './SurveyForm.css';

const SurveyForm = (props) => {
  const [state, dispatch] = useSurveyForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'submit',
      payload: {
        errors: validate(state.fields),
        isSubmit: true,
      },
    });
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'change',
      payload: {
        [name]: value.trim(),
      },
    });
  }, [dispatch]);

  const counter = useCallback((e) => {
    dispatch({
      type: 'counter',
      payload: {
        [e.target.name]: e.target.value.length,
      },
    });
  }, [dispatch]);

  const clearForm = useCallback(() => {
    dispatch({
      type: 'clear',
    });
  }, [dispatch]);

  const isSubmitWithoutErrors =
    Object.keys(state.errors).length === 0 && state.isSubmit;

  return (
    <>
      {isSubmitWithoutErrors ? (
        <FilledForm state={state} />
      ) : (
        <form className='form' onSubmit={handleSubmit}>
          <Header text='Создание анкеты' />
          <FormField
            isMultiline={false}
            type='text'
            value={state.fields.name}
            name='name'
            onChange={handleChange}
            label='Имя'
            error={state.errors.name}
          />
          <FormField
            isMultiline={false}
            type='text'
            value={state.fields.surname}
            name='surname'
            onChange={handleChange}
            label='Фамилия'
            error={state.errors.surname}
          />
          <FormField
            isMultiline={false}
            type='date'
            value={state.fields.dateOfBirth}
            name='dateOfBirth'
            onChange={handleChange}
            label='Дата рождения'
            error={state.errors.dateOfBirth}
          />
          <FormField
            isMultiline={false}
            type='tel'
            value={state.fields.phone}
            name='phone'
            onChange={handleChange}
            label='Телефон формата 7-7777-77-77'
            error={state.errors.phone}
          />
          <FormField
            isMultiline={false}
            type='text'
            value={state.fields.site}
            name='site'
            onChange={handleChange}
            label='Сайт'
            error={state.errors.site}
          />
          <FormField
            isMultiline={true}
            value={state.fields.about}
            name='about'
            onChange={(e) => {
              handleChange(e);
              counter(e);
            }}
            label='О себе'
            error={state.errors.about}
            count={state.count.about}
            limit={600}
          />
          <FormField
            isMultiline={true}
            value={state.fields.technologyStack}
            name='technologyStack'
            onChange={(e) => {
              handleChange(e);
              counter(e);
            }}
            label='Стек технологий'
            error={state.errors.technologyStack}
            count={state.count.technologyStack}
            limit={600}
          />
          <FormField
            isMultiline={true}
            value={state.fields.lastProject}
            name='lastProject'
            onChange={(e) => {
              handleChange(e);
              counter(e);
            }}
            label='Описание последнего проекта'
            error={state.errors.lastProject}
            count={state.count.lastProject}
            limit={600}
          />
          <div className='buttons-container'>
            <Button className='button_submit' text='Сохранить' type='submit' />
            <Button
              className='button_clear'
              text='Очистить'
              type='button'
              onClick={clearForm}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default SurveyForm;

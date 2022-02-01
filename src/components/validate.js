const validate = (values) => {
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

export default validate;

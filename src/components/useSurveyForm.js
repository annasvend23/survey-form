import { useReducer } from 'react';

const initialState = {
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return { ...state, ...action.payload };
    case 'change':
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload,
        },
      };
    case 'counter':
      return {
        ...state,
        count: {
          ...state.count,
          ...action.payload,
        },
      };
    case 'clear':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const useSurveyForm = () => {
  return useReducer(reducer, initialState);
};

export default useSurveyForm;

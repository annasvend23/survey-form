import React from 'react';
import './FormField.css';

const FormField = (props) => {
  const renderTextarea = () => {
    return (
      <>
        <textarea
          className='field__textarea'
          name={props.name}
          id={props.name}
          onChange={props.onChange}
          value={props.value}
        />
        {props.error && <span className='error'>{props.error}</span>}
        {renderCharLimit()}
      </>
    );
  };

  const renderCharLimit = () => {
    const shouldRenderLimit = !props.error && props.limit;
    if (!shouldRenderLimit) {
      return null;
    }

    const isUnderLimit = props.value.length <= props.limit;
    if (isUnderLimit) {
      return (
        <span className='counter'>
          {props.count}/{props.limit}
        </span>
      );
    }

    return <span className='counter'>Превышен лимит символов в поле</span>;
  };

  const renderInput = () => {
    return (
      <>
        <input
          className='field__input'
          type={props.type}
          name={props.name}
          id={props.name}
          onChange={props.onChange}
          value={props.value}
        />
        {props.error && <span className='error'>{props.error}</span>}
      </>
    );
  };

  return (
    <div className='field'>
      <label className='field__name' htmlFor={props.name}>
        {props.label}
      </label>
      {props.isMultiline ? renderTextarea() : renderInput()}
    </div>
  );
};

export default FormField;

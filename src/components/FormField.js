import React from 'react';
import './FormField.css';

class FormField extends React.Component {
  renderTextarea() {
    return (
      <>
        <textarea
          className='field__textarea'
          name={this.props.name}
          id={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        {this.props.error && <span className='error'>{this.props.error}</span>}
        {this.renderCharLimit()}
      </>
    );
  }

  renderCharLimit() {
    const shouldRenderLimit = !this.props.error && this.props.limit;
    if (!shouldRenderLimit) {
      return null;
    }

    const isUnderLimit = this.props.value.length <= this.props.limit;
    if (isUnderLimit) {
      return (
        <span className='counter'>
          {this.props.count}/{this.props.limit}
        </span>
      );
    }

    return <span className='counter'>Превышен лимит символов в поле</span>;
  }

  renderInput() {
    return (
      <>
        <input
          className='field__input'
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        {this.props.error && <span className='error'>{this.props.error}</span>}
      </>
    );
  }

  render() {
    return (
      <div className='field'>
        <label className='field__name' htmlFor={this.props.name}>
          {this.props.label}
        </label>
        {this.props.isMultiline ? this.renderTextarea() : this.renderInput()}
      </div>
    );
  }
}

export default FormField;

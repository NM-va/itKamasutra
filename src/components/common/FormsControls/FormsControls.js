import React from 'react';
import styles from './FormControls.module.css';

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        {React.createElement(props.el, {...input, ...props})}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export const Textarea = (props) => {
  return <FormControl {...props} el='textarea'></FormControl>
};

export const Input = (props) => {
  return <FormControl {...props} el='input'></FormControl>
};
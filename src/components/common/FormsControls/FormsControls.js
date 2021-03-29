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

export const Textarea = (props) => <FormControl {...props} el='textarea' />;

export const Input = (props) => <FormControl {...props} el='input' />;


// const FormControl = ({input, meta, child, ...props}) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 {props.children}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// };
//
// export const Textarea = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>;
// };
//
// export const Input = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><input {...input} {...restProps} /></FormControl>;
// };
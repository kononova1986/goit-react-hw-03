import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .matches(/^[0-9]{3,50}$/, 'This is not a number!')
    .required('Required'),
});

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    addContact({
      id: (values.id = nanoid()),
      name: values.name,
      number: values.number,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid rgb(0, 40, 56)',
          padding: '15px',
          marginBottom: '15px',
        }}
      >
        <label htmlFor={nameId}>Name</label>
        <Field
          style={{
            borderRadius: '8px',
            border: '1px solid rgb(0, 40, 56)',
            padding: '15px',
          }}
          id={nameId}
          name="name"
          type="text"
        />
        <ErrorMessage style={{ color: 'red' }} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          style={{
            borderRadius: '8px',
            border: '1px solid rgb(0, 40, 56)',
            padding: '15px',
          }}
          id={numberId}
          name="number"
          type="tel"
        />
        <ErrorMessage style={{ color: 'red' }} name="number" component="span" />
        <button style={{ marginTop: '15px' }} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

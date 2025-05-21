import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateForm } from '../utils/validation.jsx';

const states = ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra pradesh', 'Telangana'];

const UserForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        pincode: '',
        state: '',
        district: '',
        id: '',
        phone: '',
        email: '',
      }}
      validate={validateForm}
      onSubmit={(values, { resetForm }) => {
        alert('Form submitted successfully!');
        resetForm();
      }}
    >
      <Form style={{ maxWidth: '500px', margin: '0 auto' }}>
        {[
          { name: 'firstName', label: 'First Name' },
          { name: 'lastName', label: 'Last Name' },
          { name: 'age', label: 'Age', type: 'number' },
          { name: 'address', label: 'Address' },
          { name: 'pincode', label: 'Pincode' },
          { name: 'district', label: 'District' },
          { name: 'id', label: 'ID' },
          { name: 'phone', label: 'Phone' },
          { name: 'email', label: 'Email', type: 'email' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name}>
            <label>{label}</label>
            <Field name={name} type={type} />
            <ErrorMessage name={name} component="div" className="error" />
          </div>
        ))}

      
        <div>
          <label>State</label>
          <Field name="state" as="select">
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Field>
          <ErrorMessage name="state" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>

        <style>{`
          .error {
            color: red;
            font-size: 0.9em;
            margin-bottom: 10px;
          }
        `}</style>
      </Form>
    </Formik>
  );
};

export default UserForm;

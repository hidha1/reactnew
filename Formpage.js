import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function FormPage() {
  const { setFormData } = useContext(AppContext);
  const [form, setForm] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    email: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Required';
    if (!form.phone) errs.phone = 'Required';
    if (!form.email) errs.email = 'Required';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setFormData(form);
      navigate('/form-details');
    } else {
      setErrors(errs);
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      {errors.name && <span>{errors.name}</span>}
      <input placeholder="Age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <input placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      {errors.phone && <span>{errors.phone}</span>}
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      {errors.email && <span>{errors.email}</span>}
      <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;

import React, { useState } from 'react';
import {
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  Form,
  FormField,
} from 'semantic-ui-react';


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const initialFormData = {
  firstName: '',
  lastName: '',
  gender: '',
  courseType: '',
  about: '',
  terms: false,
};

const Contactus = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e, { name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitButton = () => {
    if (
      formData.firstName.trim() !== ' ' &&
      formData.lastName.trim() !== ' ' &&
      formData.gender.trim() !== ' ' &&
      formData.courseType.trim() !== ' ' &&
      formData.about.trim() !== ' ' &&
      formData.terms
    ) {
      alert('Data is submitted');
      setFormData(initialFormData); 
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Form>
      <h1>Contact us</h1>
      <FormGroup widths='equal'>
        <FormField required>
          <FormInput
            fluid
            label='First name'
            placeholder='First name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormInput
            fluid
            label='Last name'
            placeholder='Last name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormField>

        <FormSelect
          fluid
          label='Gender'
          options={options}
          placeholder='Gender'
          name='gender'
          value={formData.gender}
          onChange={handleChange}
        />
      </FormGroup>
      <FormField required>
        <FormGroup>
          <label >Course type</label>
          <FormRadio  style={{ marginLeft: '30px' }}
            label='pre-recorded lessons'
            value='pre'
            checked={formData.courseType === 'pre'}
            onChange={handleChange}
            name='courseType'
          />
          <FormRadio  style={{ marginLeft: '40px' }}
            label='live lectures'
            value='ll'
            checked={formData.courseType === 'll'}
            onChange={handleChange}
            name='courseType'
          />
          <FormRadio  style={{ marginLeft: '30px' }}
            label='interactive and off-line tests'
            value='io'
            checked={formData.courseType === 'io'}
            onChange={handleChange}
            name='courseType'
          />
        </FormGroup>
      </FormField>
      <FormTextArea
        label='About'
        placeholder='Tell us more about you...'
        name='about'
        value={formData.about}
        onChange={handleChange}
      />
      <FormCheckbox  
       label='I agree to the Terms and Conditions'
       name='terms'
       checked={formData.terms}
       onChange={(e, { name, checked }) =>
        handleChange(e, { name, value: checked })}
       >I agree to the Terms and Conditions</FormCheckbox>

      <FormButton disabled={!formData.terms} onClick={handleSubmitButton}>
        Submit
      </FormButton>

      <p>
        Have questions or feedback? We'd love to hear from you! Contact us at{' '}
        <a href='mailto:info@example.com'>edusavyinfo@gmail.com</a> or{' '}
        <a href='tel:+1234567890'>8378895600</a>.
      </p> 
    </Form>
  );
};

export default Contactus;

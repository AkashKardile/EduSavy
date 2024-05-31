import React, { useState } from "react";
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
} from "semantic-ui-react";

const options = [
  { key: "fsd", text: "Full Stack Developer", value: "Full Stack Developer" },
  { key: "ds", text: "Data Science", value: "Data Science" },
  { key: "da", text: "Data Analytics", value: "Data Analytics" },
  { key: "cs", text: "Cybersecurity", value: "Cybersecurity" },
  { key: "ac", text: "Accounting", value: "Accounting" },
  { key: "dsa", text: "Data Structure", value: "Data Structure" },
  { key: "o", text: "Other", value: "Other" },
];

const initialFormData = {
  firstName: "",
  lastName: "",
  course: "",
  courseType: "",
  query: "",
  terms: false,
};

const HelpCentre = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButton = () => {
    const { firstName, lastName, course, courseType, query, terms } = formData;
    if (
      firstName.trim() &&
      lastName.trim() &&
      course &&
      courseType &&
      query.trim() &&
      terms
    ) {
      alert("Data is submitted");
      setFormData(initialFormData);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Form>
      <h1>Help Centre</h1>
      <FormGroup widths="equal">
        <FormInput
          fluid
          label="First Name"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          fluid
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormSelect
          fluid
          label="Course"
          options={options}
          placeholder="Select the Course"
          name="course"
          value={formData.course}
          onChange={(_, { name, value }) => handleChange(_, { name, value })}
        />
      </FormGroup>
      <FormField required>
        <FormGroup>
          <label>Course type</label>
          <FormRadio
            style={{ marginLeft: "30px" }}
            label="pre-recorded lessons"
            value="pre"
            checked={formData.courseType === "pre"}
            onChange={handleChange}
            name="courseType"
          />
          <FormRadio
            style={{ marginLeft: "40px" }}
            label="live lectures"
            value="ll"
            checked={formData.courseType === "ll"}
            onChange={handleChange}
            name="courseType"
          />
          <FormRadio
            style={{ marginLeft: "30px" }}
            label="interactive and off-line tests"
            value="io"
            checked={formData.courseType === "io"}
            onChange={handleChange}
            name="courseType"
          />
        </FormGroup>
      </FormField>
      <FormTextArea
        label="Query"
        placeholder="Write your query here..."
        name="query"
        value={formData.query}
        onChange={handleChange}
      />
      <FormCheckbox
        label="I agree to the Terms and Conditions"
        name="terms"
        checked={formData.terms}
        onChange={(_, { name, checked }) =>
          handleChange(_, { name, value: checked })
        }
      />
      <FormButton
        disabled={!formData.terms}
        onClick={handleSubmitButton}
        primary
        style={{ marginTop: "10px" }}
      >
        Submit
      </FormButton>
      <p>
        Have more questions or feedback? We'd love to hear from you! Contact us
        at <a href="mailto:info@example.com">edusavyinfo@gmail.com</a> or{" "}
        <a href="tel:+1234567890">8378895600</a>.
      </p>
    </Form>
  );
};

export default HelpCentre;

import React from 'react';
import { 
  FormGroup, 
  Label, 
  Input, 
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';
import { Form, Field } from "react-final-form";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Styled from './styled';
import { signupRequest } from '../../store/modules/auth/actions';
import bg_signup from '../../assets/images/bg_signup.png'

const SignUp = (props) => {
  function onFinish(values) {
    const { signupRequest } = props;
    signupRequest(values);
    return false;
  }

  return (
    <Styled.ContainerForm>
      <Container
        fluid
      >
        <Row>
          <Col
            className="content_left"
            xs="8"
          >
            <img src={bg_signup} alt='bg' />
          </Col>
          <Col
            className="content_right"
            xs="4"
          >
          <h3>Adventure starts here</h3>
          <p>Make your app management easy and fun!</p>
          <Form
            onSubmit={onFinish}
            validate={values => {
              const errors = {};
              function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
              }
              function validatePassword(password) {
                var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,18}$/;
                return re.test(String(password));
              }
              if (!values.firstName) {
                errors.firstName = "The first name is required";
              }
              if (!values.lastName) {
                errors.lastName = "The last name is required";
              }
              if (!values.email) {
                errors.email = "The email is required";
              } else if (!validateEmail(values.email)) {
                errors.email = "The email is not valid";
              }
              if (!values.password) {
                errors.password = "The password is required";
              } else if (!validatePassword(values.password)) {
                errors.password = "The password must be between 6-18 characters, at least one digit, one special character, and one letter";
              }
              return errors;
            }}
            render={({ handleSubmit, values, submitting, validating, valid }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label
                    for="firstName"
                  >
                    FirstName<span className='required'>*</span>
                  </Label>
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="first name"
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && <span className='invalid-feedback'>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label
                    for="lastName"
                  >
                    LastName<span className='required'>*</span>
                  </Label>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="last name"
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && <span className='invalid-feedback'>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email<span className='required'>*</span></Label>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="email"
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && <span className='invalid-feedback'>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup className='mb-sm-2'>
                  <Label for="password">Password<span className='required'>*</span></Label>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="password"
                          placeholder="password"
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && <span className='invalid-feedback'>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>
                    i agree to<a href='/#'> privacy policy & terms</a>
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Button type="submit">
                    Sign Up
                  </Button>
                </FormGroup>
                <FormGroup className='text-center'>
                  <Label>
                    Already have an account?<Link to="/login"> Sign in instead</Link>
                  </Label>
                </FormGroup>
              </form>
            )}
          />
          </Col>
        </Row>
      </Container>
    </Styled.ContainerForm>
  );
}
SignUp.propTypes = {
  signupRequest: PropTypes.func,
};
export default connect(null, { signupRequest })(SignUp);

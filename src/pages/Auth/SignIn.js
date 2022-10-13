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
import { loginRequest } from '../../store/modules/auth/actions';
import bg_login from '../../assets/images/bg_login.png'

const SignIn = (props) => {
  function onFinish(values) {
    const { loginRequest } = props;
    loginRequest(values);
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
            <img src={bg_login} alt='bg' />
          </Col>
          <Col
            className="content_right"
            xs="4"
          >
          <h3>Welcome to Entrance Test Interview!</h3>
          <p>Please sign-in to your account and start the adventure</p>
          <Form
            onSubmit={onFinish}
            validate={values => {
              const errors = {};
              function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
              }
              if (!values.email) {
                errors.email = "The email is required";
              } else if (!validateEmail(values.email)) {
                errors.email = "The email is not valid";
              }
              if (!values.password) {
                errors.password = "The password is required";
              } else if (values.password.trim().length < 6 || values.password.trim().length > 18) {
                errors.password = "The password must be between 6-18 characters";
              }
              return errors;
            }}
            render={({ handleSubmit, values, submitting, validating, valid }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Email<span className='required'>*</span></Label>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="johndoe@gmail.com"
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
                    Remember me
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Button type="submit">
                    Login
                  </Button>
                </FormGroup>
                <FormGroup className='text-center'>
                  <Label>
                    New on our platform?<Link to="/signup"> Create an account</Link>
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
SignIn.propTypes = {
  loginRequest: PropTypes.func,
};
export default connect(null, { loginRequest })(SignIn);

import React, { FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import Button from "../atoms/Button";

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(
      (key: string) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
};

const btnProps = {
  className: "submitBtn",
};

interface FormError {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: FunctionComponent = () => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({
            "form-name": "contact-demo",
            ...values,
          }),
        })
          .then(() => {
            actions.resetForm();
          })
          .catch(() => {
            alert("Error");
          })
          .finally(() => {
            actions.setSubmitting(false);
          });
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors: FormError = {};
        if (!values.name) {
          errors.name = "*";
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "*";
        }
        if (!values.message) {
          errors.message = "*";
        }
        return errors;
      }}
    >
      {() => (
        <StyledForm
          id="contact-form"
          name="contact-demo"
          className="contactForm"
          data-netlify={true}
        >
          <Row>
            <StyledField placeholder="Name" name="name" />
            <Error name="name" />
          </Row>
          <Row>
            <StyledField placeholder="Email" name="email" />
            <Error name="email" />
          </Row>
          <Row>
            <StyledField
              placeholder="Message"
              name="message"
              component="textarea"
              rows="10"
            />
            <Error name="message" />
          </Row>
          <Row>
            <Button {...btnProps} type="submit">
              Submit
            </Button>
          </Row>
        </StyledForm>
      )}
    </Formik>
  );
};

const Error = styled(ErrorMessage)`
  text-align: center;
  position: absolute;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

const StyledForm = styled(Form)`
  margin: 50px auto;
  opacity: 0;
`;

const StyledField = styled(Field)`
  font-size: 16px;
  font-family: inherit;
  width: 100%;
  max-width: 350px;
  resize: none;
  padding: 10px 5px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.foreground};
  border-bottom: 1px solid ${(props) => props.theme.colors.foreground};
`;

export default ContactForm;

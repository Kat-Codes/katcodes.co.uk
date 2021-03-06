import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Button from './button';

let submitted = false;

const encode = (data: any) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

class ContactForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = submitted;
    }

    render() {
        return (
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                onSubmit={(values, actions) => {
                    fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: encode({
                            'form-name': 'contact-demo',
                            ...values,
                        }),
                    })
                        .then(() => {
                            actions.resetForm();
                        })
                        .catch(() => {
                            alert('Error');
                        })
                        .finally(() => {
                            actions.setSubmitting(false);
                            this.setState({ submitted: true });
                        });
                }}
                validate={(values) => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    const errors: any = {};
                    if (!values.name) {
                        errors.name = '*';
                    }
                    if (!values.email || !emailRegex.test(values.email)) {
                        errors.email = '*';
                    }
                    if (!values.message) {
                        errors.message = '*';
                    }
                    return errors;
                }}>
                {() => (
                    <StyledForm name='contact-demo' data-netlify={true}>
                        <Row>
                            <StyledField placeholder='Name' name='name' />
                            <Error name='name' />
                        </Row>
                        <Row>
                            <StyledField placeholder='Email' name='email' />
                            <Error name='email' />
                        </Row>
                        <Row>
                            <StyledField
                                placeholder='Message'
                                name='message'
                                component='textarea'
                                rows='10'
                            />
                            <Error name='message' />
                        </Row>
                        <Row>
                            <Button type='submit'>Submit</Button>
                        </Row>
                    </StyledForm>
                )}
            </Formik>
        );
    }
}

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
    color: black;
    border-bottom: 1px solid black;
`;

export default ContactForm;

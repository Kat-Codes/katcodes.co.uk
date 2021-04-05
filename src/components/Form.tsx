import React from 'react';
import gsap from 'gsap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Button from './Button';

const encode = (data: any) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const btnProps = {
    className: 'submitBtn',
};

interface AppState {
    submitted: boolean;
}

class ContactForm extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false
        };
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
                            const tl = gsap.timeline();
                            tl.to('.submitBtn', { y: -25, opacity: 1 });
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
                    <StyledForm
                        name='contact-demo'
                        className='contactForm'
                        data-netlify={true}>
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
                            <Button {...btnProps} type='submit'>
                                {this.state.submitted}
                            </Button>
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
    color: black;
    border-bottom: 1px solid black;
`;

export default ContactForm;

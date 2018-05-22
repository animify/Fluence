import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
    (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const minLength = min => value =>
    (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
const email = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined);
const password = value =>
    (value && value.length < 9 ? 'You need 8 password characters' : undefined);
const aol = value =>
    (value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input">
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        <label>{label}</label>
    </div>
);

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="name"
                type="text"
                component={renderField}
                label="Name"
                validate={[required]}
            />
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={email}
                warn={aol}
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required, minLength8]}
                warn={password}
            />
            <div>
                <button className="button base" type="submit" disabled={submitting}>Create Account</button>
                <button className="button" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm);

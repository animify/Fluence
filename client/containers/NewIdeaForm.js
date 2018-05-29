import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input">
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        <label>{label}</label>
    </div>
);

const renderSelect = ({ input, label, type, children, meta: { touched, error, warning } }) => (
    <div className="input">
        <select {...input} type={type}>
            {children}
        </select>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        <label>{label}</label>
    </div>
);
const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input">
        <textarea {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        <label>{label}</label>
    </div>
);

const IdeaForm = ({ handleSubmit, pristine, reset, submitting }) => (
    <form onSubmit={handleSubmit}>
        <Field
            name="summary"
            type="text"
            component={renderField}
            label="Summary"
            validate={[required]}
        />
        <Field
            name="Account"
            type="select"
            component={renderSelect}
            label="Category"
        >
            <option name="Account" value="Account">Account</option>
            <option name="Audio" value="Audio">Audio</option>
            <option name="Interface" value="Interface">Interface</option>
            <option name="Other" value="Other">Other</option>
        </Field>
        <Field
            name="description"
            type="textarea"
            component={renderTextarea}
            label="Describe your idea"
            validate={[required]}
        />
        <div className="input">
            <button className="button base" type="submit" disabled={submitting}>Post Idea</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'ideaForm' // a unique identifier for this form
})(IdeaForm);

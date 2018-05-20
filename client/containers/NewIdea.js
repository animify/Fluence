import React from 'react';
import { connect } from 'react-redux';
import { newIdea } from '../store/actions';

const NewIdea = ({ dispatch }) => {
    let summaryInput;
    let descriptionInput;
    let categoryInput;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!summaryInput.value.trim() || !descriptionInput.value.trim()) {
                        return;
                    }

                    dispatch(newIdea(summaryInput.value, descriptionInput.value, categoryInput.value));

                    summaryInput.value = '';
                    descriptionInput.value = '';
                }}
            >
                <div className="input">
                    <input name="idea-summary" type="text" ref={node => (summaryInput = node)} />
                    <label htmlFor="idea-summary">Summary</label>
                </div>
                <div className="input">
                    <select name="idea-category" ref={node => (categoryInput = node)} >
                        <option value="Account">Account</option>
                        <option value="Audio">Audio</option>
                        <option value="Interface">Interface</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="idea-category">Category</label>
                </div>
                <div className="input">
                    <textarea name="idea-description" ref={node => (descriptionInput = node)} />
                    <label htmlFor="idea-description">Describe Your Idea</label>
                </div>
                <div className="input">
                    <button className="button base" type="submit">Post Idea</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(NewIdea);

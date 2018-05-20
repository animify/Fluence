import React from 'react';
import { connect } from 'react-redux';
import { addFeedback } from '../store/actions';

const AddFeedback = ({ dispatch }) => {
    let summaryInput;
    let descriptionInput;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!summaryInput.value.trim() || !descriptionInput.value.trim()) {
                        return;
                    }

                    dispatch(addFeedback(summaryInput.value, descriptionInput.value));

                    summaryInput.value = '';
                    descriptionInput.value = '';
                }}
            >
                <div className="input">
                    <input name="feedback-summary" type="text" ref={node => (summaryInput = node)} />
                    <label htmlFor="feedback-summary">Summary</label>
                </div>
                <div className="input">
                    <input name="feedback-description" type="text" ref={node => (descriptionInput = node)} />
                    <label htmlFor="feedback-description">Description</label>
                </div>
                <div className="input">
                    <button className="button base" type="submit">Add Feedback</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddFeedback);

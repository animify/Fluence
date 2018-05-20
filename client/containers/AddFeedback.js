import React from 'react';
import { connect } from 'react-redux';
import { addFeedback } from '../store/actions';

const AddFeedback = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!input.value.trim()) {
                        return;
                    }

                    dispatch(addFeedback(input.value));

                    input.value = '';
                }}
            >
                <div className="input">
                    <input type="text" ref={node => (input = node)} />
                </div>
                <div className="input">
                    <button className="button base" type="submit">Add Feedback</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddFeedback);

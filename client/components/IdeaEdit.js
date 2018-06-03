import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const IdeaEdit = ({ isOwner, idea }) => {
    console.log(isOwner, idea);
    return (
        <Fragment>
            {isOwner ?
                <Fragment>
                    <div className="input inline">
                        <select name="category" type="select">
                            <option name="Account" value="Account">Account</option>
                            <option name="Audio" value="Audio">Audio</option>
                            <option name="Interface" value="Interface">Interface</option>
                            <option name="Other" value="Other">Other</option>
                        </select>
                    </div>
                    <div className="input inline">
                        <a className="button">Edit</a>
                    </div>
                </Fragment> : null}
        </Fragment>
    );
};

IdeaEdit.propTypes = {
    isOwner: PropTypes.bool.isRequired,
    idea: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        upvotes: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired
};

export default IdeaEdit;

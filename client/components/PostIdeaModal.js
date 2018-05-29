import React from 'react';
import NewIdeaForm from '../containers/NewIdeaForm';
import { Ideas } from '../Api';
// import NewIdea from '../containers/NewIdea';

const PostIdeaModal = () => (
    <div className="modal-container overlay" modal-name="post-idea">
        <div className="background" />
        <div className="modal-x" modal-cancel="" />
        <div className="modal">
            <div className="header">
                <h4>Post a new idea</h4>
                <p>Thought of something awesome? Share it with the team at Fluence.</p>
            </div>
            <div className="body">
                <NewIdeaForm onSubmit={Ideas.new} />
                {/* <NewIdea /> */}
            </div>
        </div>
    </div>
);

export default PostIdeaModal;

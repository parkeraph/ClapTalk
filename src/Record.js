import React from 'react';
import './Record.css';

const Record  = (props) => {
    const content = props.content;
    return (
        <div class="record">
            {content}
        </div>
    )
}

export default Record;
import React from 'react';

const Helmet = (props) => {
    document.title = `Metro Santiago - ${props.title}`;

    return (
        <div className=''>{props.children}</div>
    )
}

export default Helmet;
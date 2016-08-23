import React from 'react';

function HiMessage() {
    return <div>{"Hello World"}</div>;
}

console.log('Test debugging message');

// need to turn off the stateless function warning because, as explained in Readme, React Hot Loader
// doesn't work with a stateless, functional component as the root component
// eslint-disable-next-line react/prefer-stateless-function
export default class Root extends React.Component {
    render() {
        return <div><HiMessage /></div>;
    }
}

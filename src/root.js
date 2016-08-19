import React from "react"

const hiMessage = () => {
    return <h1>{"Hello Woqrd322"}</h1>;
}

export class Root extends React.Component {
    render() {
        return (<div>{"hi"}<hiMessage/></div>);
    }
}
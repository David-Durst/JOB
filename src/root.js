import React from "react"

const HiMessage = (props) => <div>{"Hello World"}</div>;
console.log("Test debugging message");
export class Root extends React.Component {
    render() {
        return <div><HiMessage /></div>;
    }
}
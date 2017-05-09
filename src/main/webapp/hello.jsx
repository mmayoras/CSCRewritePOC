import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import toastr from 'toastr';

class Hello extends React.Component {
    render() {
        return <h1>Hello</h1>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
import React from 'react';

class ConsumerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', strNumber: '', date: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createConsumer = this.createConsumer.bind(this);
    }

    handleChange(event) {
        console.log("NAME: " + event.target.name + " VALUE: " + event.target.value)
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        var newConsumer = {firstName: this.state.firstName, lastName: this.state.lastName, strNumber: this.state.strNumber, date: this.state.date};
        this.createConsumer(newConsumer);
    }

    createConsumer(consumerApplication) {
        this.props.createConsumer(consumerApplication);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Start Consumer Application</div>
                <div className="panel-body">
                <form className="form-inline">
                    <div className="col-md-2">
                        <input type="text" placeholder="Firstname" className="form-control" name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Lastname" className="form-control" name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Store Number" className="form-control" name="strNumber" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Date" className="form-control" name="date" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default ConsumerForm;
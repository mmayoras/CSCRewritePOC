import React from 'react';
import SkyLight from "react-skylight";

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

        var newConsumer = {id: 0, firstName: this.state.firstName, lastName: this.state.lastName, strNumber: this.state.strNumber, date: this.state.date};
        this.createConsumer(newConsumer);
        this.refs.simpleDialog.hide();
    }

    createConsumer(consumerApplication) {
        this.props.createConsumer(consumerApplication);
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="simpleDialog">
                    <div className="panel panel-default">
                        <div className="panel-heading">Start Consumer Application</div>
                        <div className="panel-body">
                            <form style={{paddingLeft: ".5%", paddingRight:".5%"}} >
                                <div className="col-sm-3">
                                    <input type="text" placeholder="First Name" className="form-control" name="firstName" onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <input type="text" placeholder="Last Name" className="form-control" name="lastName" onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <input type="text" placeholder="Store Number" className="form-control" name="strNumber" onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <input type="text" placeholder="Date" className="form-control" name="date" onChange={this.handleChange}/>
                                </div>
                                <div className="col-sm-1">
                                    <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </SkyLight>
                <div style={{paddingBottom: "10px", textAlign: "center"}}>
                    <button className="btn btn-primary" onClick={() => this.refs.simpleDialog.show()}>New Consumer Application</button>
                </div>
            </div>
        );
    }
}

export default ConsumerForm;
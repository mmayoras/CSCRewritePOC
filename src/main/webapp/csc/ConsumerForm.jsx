import React from 'react';
import SkyLight from "react-skylight";

class ConsumerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', middleInitial: '', lastName: '', strNumber: '', date: new Date(), addressLine1: '', addressLine2: '', city: '', state: ''};
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

        var newConsumer = {id: 0, firstName: this.state.firstName, middleInitial: this.state.middleInitial,
            lastName: this.state.lastName, strNumber: this.state.strNumber, date: this.state.date, addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2, city: this.state.city, state: this.state.state};

        this.createConsumer(newConsumer);

        this.setState({
            firstName: '',
            middleInitial: '',
            lastName: '',
            strNumber: '',
            date: new Date(),
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: ''
        });

        this.refs.simpleDialog.hide();
    }

    createConsumer(consumerApplication) {
        this.props.createConsumer(consumerApplication);
    }

    render() {
        var inputStyle = {
            paddingLeft: "0.5%",
            paddingRight: "0.5%",
            position: "relative",
            float: "left",
            minHeight: "1px"
        };

        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="simpleDialog">
                    <div className="panel panel-default">
                        <div className="panel-heading">Start Consumer Application</div>
                        <div className="panel-body">
                            <form className="form-inline">
                                <div style={inputStyle}>
                                    <input type="text" placeholder="First Name" className="form-control" name="firstName" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Middle Initial" className="form-control" name="middleInitial" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Last Name" className="form-control" name="lastName" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Store Number" className="form-control" name="strNumber" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Date" className="form-control" name="date" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Address Line 1" className="form-control" name="addressLine1" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="Address Line 2" className="form-control" name="addressLine2" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="City" className="form-control" name="city" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
                                    <input type="text" placeholder="State" className="form-control" name="state" onChange={this.handleChange}/>
                                </div>
                                <div style={inputStyle}>
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
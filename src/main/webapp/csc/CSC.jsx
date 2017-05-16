import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CommercialTable from './CommercialTable.jsx';
import ConsumerTable from './ConsumerTable.jsx';
import { connect } from '../socket';

class CSC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {consumerApplications: [], commercialApplications: []};
    }

    loadConsumerApplicationsFromServer() {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/consumerApplications"
        }).then(function (data) {
            self.setState({consumerApplications: data._embedded.consumerApplications});
        });
    }

    loadCommercialApplicationsFromServer() {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/commercialApplications"
        }).then(function (data) {
            self.setState({commercialApplications: data._embedded.commercialApplications});
        });
    }

    componentDidMount() {
        this.loadConsumerApplicationsFromServer();
        this.loadCommercialApplicationsFromServer();
    }

    render() {
        var imageStyle = {
            float: "left"
        };
        var divHeaderStyle = {
            textAlign:"center",
            position: "relative"
        };

        return (
            <div>
                <div>
                    <img src="images/Master_Depot_Logo.jpg" style={imageStyle}/>
                    <h1 style={divHeaderStyle}>Credit Services Center</h1>
                </div>
                <div style={{clear: 'both', display: "table"}}>
                    <ConsumerTable consumerApplications={this.state.consumerApplications} />
                    <CommercialTable commercialApplications={this.state.commercialApplications} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<CSC/>, document.getElementById('csc'));
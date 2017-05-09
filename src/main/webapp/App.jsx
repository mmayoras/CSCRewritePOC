import React from 'react';
import ReactDOM from 'react-dom';
import ConsumerTable from './ConsumerTable.jsx';
import CommercialTable from './CommercialTable.jsx';

class App extends React.Component() {

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

    getInitialState() {
        return {consumerApplications: [], commercialApplications: []};
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
            textAlign:"center"
        };
        var divBodyStyle = {
            clear:"left"
        };

        return (
            <div>
                <img src="images/Master_Depot_Logo.jpg" style={imageStyle}/>
                <h1 style={divHeaderStyle}>Credit Services Center</h1>
                <div style={divBodyStyle}>
                    <ConsumerTable consumerApplications={this.state.consumerApplications} />
                    <CommercialTable commercialApplications={this.state.commercialApplications} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
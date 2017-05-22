import React from 'react';
import ReactDOM from 'react-dom';
import CommercialTable from './CommercialTable.jsx';
import ConsumerTable from './ConsumerTable.jsx';

class CSC extends React.Component {
    constructor(props) {
        super(props);
        this.deleteConsumerApplication = this.deleteConsumerApplication.bind(this);
        this.deleteCommercialApplication = this.deleteCommercialApplication.bind(this);
        this.state = {consumerApplications: [], commercialApplications: []};
    }

    deleteConsumerApplication(consumerApplication) {
        fetch (consumerApplication._links.self.href,
            { method: 'DELETE',})
            .then(
                res => this.loadConsumerApplicationsFromServer()
            )
            .catch( err => console.error(err))
    }

    deleteCommercialApplication(commercialApplication) {
        fetch (commercialApplication._links.self.href,
            { method: 'DELETE',})
            .then(
                res => this.loadCommercialApplicationsFromServer()
            )
            .catch( err => console.error(err))
    }

    loadConsumerApplicationsFromServer() {
        fetch('http://localhost:8080/api/consumerApplications')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    consumerApplications: responseData._embedded.consumerApplications,
                });
            });
    }

    loadCommercialApplicationsFromServer() {
        fetch('http://localhost:8080/api/commercialApplications')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    commercialApplications: responseData._embedded.commercialApplications,
                });
        });
    }

    componentDidMount() {
        this.loadConsumerApplicationsFromServer();
        this.loadCommercialApplicationsFromServer();
    }

    render() {
        var imageStyle = {
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "60px",
            float: "left"
        };
        var divHeaderStyle = {
            verticalAlign: "middle",
            fontSize: "3.5em",
            position: "relative",
            height: "84px"
        };

        return (
            <div>
                <div>
                    <img src="images/Master_Depot_Logo.jpg" style={imageStyle}/>
                    <h1 style={divHeaderStyle}>Credit Services Center</h1>
                </div>
                <div style={{clear: 'both', display: "table", width: "100%"}}>
                    <ConsumerTable deleteConsumerApplication={this.deleteConsumerApplication} consumerApplications={this.state.consumerApplications} />
                    <CommercialTable deleteCommercialApplication={this.deleteCommercialApplication} commercialApplications={this.state.commercialApplications} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<CSC/>, document.getElementById('csc'));
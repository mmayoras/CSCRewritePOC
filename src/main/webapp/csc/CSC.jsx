import React from 'react';
import ReactDOM from 'react-dom';
import CommercialTable from './CommercialTable.jsx';
import ConsumerTable from './ConsumerTable.jsx';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CSC extends React.Component {
    constructor(props) {
        super(props);
        this.createConsumer = this.createConsumer.bind(this);
        this.createCommercial = this.createCommercial.bind(this);
        this.deleteConsumerApplication = this.deleteConsumerApplication.bind(this);
        this.deleteCommercialApplication = this.deleteCommercialApplication.bind(this);
        this.state = {consumerApplications: [], commercialApplications: [], conId: 2, comId: 2};
    }

    // Create new consumerApplication
    createConsumer(consumerApplication) {
        this.setState({
            conId: this.state.conId + 1
        });

        consumerApplication.id = this.state.conId;

        fetch('http://localhost:8080/api/consumerApplications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(consumerApplication)
        })
            .then(
                res => this.loadConsumerApplicationsFromServer()
            )
            .catch( err => console.error(err))
    }

    // Create new commercialApplication
    createCommercial(commercialApplication) {
        this.setState({
            comId: this.state.comId + 1
        });

        commercialApplication.id = this.state.comId;

        fetch('http://localhost:8080/api/commercialApplications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commercialApplication)
        })
            .then(
                res => this.loadCommercialApplicationsFromServer()
            )
            .catch( err => console.error(err))
    }

    deleteConsumerApplication(consumerApplication) {
        if (consumerApplication.id === (this.state.conId - 1))
        {
            this.setState({
                conId: this.state.conId - 1
            });
        }

        fetch (consumerApplication._links.self.href,
            { method: 'DELETE',})
            .then(
                res => this.loadConsumerApplicationsFromServer()
            )
            .then(() => {
                Alert.success('Consumer Application Deleted', {
                    position: 'bottom-left',
                    effect: 'slide'
                });
            })
            .catch( err => console.error(err))
    }

    deleteCommercialApplication(commercialApplication) {
        if (commercialApplication.id === (this.state.comId - 1))
        {
            this.setState({
                comId: this.state.comId - 1
            });
        }

        fetch (commercialApplication._links.self.href,
            { method: 'DELETE',})
            .then(
                res => this.loadCommercialApplicationsFromServer()
            )
            .then(() => {
                Alert.success('Commercial Application Deleted', {
                    position: 'bottom-left',
                    effect: 'slide'
                });
            })
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
      var divMainStyle = {
        marginLeft: "25%",
        paddingTop:"1px",
        paddingRigt: "16px"
      };

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
              <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#consumer">Consumer Credit App</a></li>
                <li><a href="#commercial">Commercial Credit App</a></li>
                <li><a href="#about">About</a></li>
              </ul>
              <div style={divMainStyle}>
                <div>
                  <img src="images/Master_Depot_Logo.jpg" style={imageStyle}/>
                  <h1 style={divHeaderStyle}>Credit Services Center</h1>
                </div>
                <div style={{clear: 'both', display: "table", width: "100%"}}>
                  <ConsumerTable createConsumer={this.createConsumer} deleteConsumerApplication={this.deleteConsumerApplication} consumerApplications={this.state.consumerApplications} />
                  <CommercialTable createCommercial={this.createCommercial} deleteCommercialApplication={this.deleteCommercialApplication} commercialApplications={this.state.commercialApplications} />
                  <Alert stack={true} timeout={2000} />
                </div>
              </div>
            </div>
        );
    }
}

ReactDOM.render(<CSC/>, document.getElementById('csc'));
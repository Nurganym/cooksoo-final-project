import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return(
            <MuiThemeProvider>
            <React.Fragment>
                <div className="container">
                    <h1 className="text-title text-blue p-2"> Спасибо, заявка принято! </h1>
    
                </div>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
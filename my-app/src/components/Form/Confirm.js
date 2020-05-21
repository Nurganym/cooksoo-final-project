import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { имя, телефон, улица, дом, квартира, подъезд, этаж, 
            комментарий}} = this.props;
        return(
            <MuiThemeProvider>
            <React.Fragment>
                <div className="container">
                    <h1 className="text-title text-blue p-2"> Адресс доставки </h1>
                    <div className="text-field p-1">
                    <List>
                        <ListItem>
                            primaryText="Имя"
                            secondaryText={ имя }
                        </ListItem>
                        <ListItem>
                            primaryText="Телефон"
                            secondaryText={ телефон }
                        </ListItem>
                        <ListItem>
                            primaryText="Улица"
                            secondaryText={ улица }
                        </ListItem>
                        <ListItem>
                            primaryText="Дом"
                            secondaryText={ дом }
                        </ListItem>
                        <ListItem>
                            primaryText="Квартира"
                            secondaryText={ квартира }
                        </ListItem>
                        <ListItem>
                            primaryText="Подъезд"
                            secondaryText={ подъезд }
                        </ListItem>
                        <ListItem>
                            primaryText="Этаж"
                            secondaryText={ этаж }
                        </ListItem>
                        <ListItem>
                            primaryText="Комментарий"
                            secondaryText={ комментарий }
                        </ListItem>
                    </List>
                    <br/>
                 <RaisedButton
                     label="отправить"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                 />
                 <RaisedButton
                     label="назад"
                     primary={false}
                     style={styles.button}
                     onClick={this.back}
                 />
                    </div>
                </div>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
  button:{
      margin:15
  }
}

export default Confirm
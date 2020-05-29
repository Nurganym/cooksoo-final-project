import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'


export class FormDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    // back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }
    render() {
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
            <React.Fragment>
                <div className="container">
                    <h1 className="text-title text-blue p-2"> Адресс доставки </h1>
                    <div className="text-field p-1">
                    <TextField
                hintText="Имя"
                floatingLabelText="Имя"
                onChange={handleChange('name')}
                defaultValue={values.name}
                 />
                 <br/>
                 <TextField
                hintText="Телефон"
                floatingLabelText="Телефон"
                onChange={handleChange('number')}
                defaultValue={values.number}
                 />
                 <br/>
                 <TextField
                hintText="Улица"
                floatingLabelText="Улица"
                onChange={handleChange('street')}
                defaultValue={values.street}
                 />
                 <br/>
                 <TextField
                hintText="Дом"
                floatingLabelText="Дом"
                onChange={handleChange('house')}
                defaultValue={values.house}
                 />
                 <br/>
                 <TextField
                hintText="Квартира"
                floatingLabelText="Квартира"
                onChange={handleChange('flat')}
                defaultValue={values.flat}
                 />
                 <br/>
                 <TextField
                hintText="Подъезд"
                floatingLabelText="Подъезд"
                onChange={handleChange('porch')}
                defaultValue={values.porch}
                 />
                 <br/>
                 <TextField
                hintText="Этаж"
                floatingLabelText="Этаж"
                onChange={handleChange('floor')}
                defaultValue={values.floor}
                 />
                 <br/>
                 <TextField
                hintText="Комментарий"
                floatingLabelText="Комментарий"
                onChange={handleChange('comments')}
                defaultValue={values.comments}
                 />
                 <br/>
                  <Link to="./cart">
                 <RaisedButton
                     label="назад"
                     style={styles.button}
                 />
                 </Link>
                 <RaisedButton
                     label="отправить"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
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

export default FormDetail
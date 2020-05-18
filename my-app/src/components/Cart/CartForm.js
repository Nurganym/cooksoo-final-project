import React from 'react';

export default function CartForm() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                   
                </div>
            </div>
        </React.Fragment>
    )
}
<form id="form_id" method="post" name="myform">
<label>Login :</label>
<input type="text" name="login" id="login"/>
<label>Password :</label>
<input type="password" name="password" id="password"/>
<input type="button" value="Login" id="submit" onclick="validate()"/>
</form>
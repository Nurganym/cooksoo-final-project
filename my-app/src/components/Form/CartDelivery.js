import React from 'react';
import '../Form/Form.css';

export default function CartDelivery() {
    return(
        <React.Fragment>
            <div className="form">
                <div className="field text-uppercase">
                    <label>имя</label>
                    <input id="name" />
                </div>
                <div className="field text-uppercase">
                    <label>телефон</label>
                    <input id="number" />
                </div>
                <div className="field text-uppercase">
                    <label>улица</label>
                    <input id="text" />
                </div>
                <div className="field text-uppercase">
                    <label>дом</label>
                    <input id="text" />
                </div>
                <div className="field text-uppercase">
                    <label>квартира</label>
                    <input id="text" />
                </div>
                <div className="field text-uppercase">
                    <label>этаж</label>
                    <input id="text" />
                </div>
                <div className="field text-uppercase">
                    <label>подъезд</label>
                    <input id="text" />
                </div>
                <div className="field text-uppercase">
                    <label>комментарий</label>
                    <input id="text" />
                </div>
                <div className="actions text-uppercase">
                    <button type="reset">назад</button>
                    <button>отправить</button>
                </div>
            </div>
        </React.Fragment>
    )
}

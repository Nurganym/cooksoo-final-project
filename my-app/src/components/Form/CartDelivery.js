import React from 'react';
import '../Form/Form.css';

export default function CartDelivery() {
    return(
        <div className="container">
            <div className="row">
                <h1>Hello, React!</h1>
            </div>
        </div>
    )
}

// const noop = () =>{}
// const defaultState = {
//     name:'',
//     number:'',
//     street:'',
//     house:'',
//     flat:'',
//     floor:'',
//     porch:'',
//     comments:'',

// }

// export default function CartDelivery() {
//     const [state, setState] = useState(defaultState);
//     const setField = e => {
//         const{name, value} = e.currentTarget

//       setState(s => ({...s, [name]:value}))

//     }
//     const reset = () => setState(defaultState)

//     return(
//         <React.Fragment>
//             <div className="form" onSubmit ={noop}>
//                 <div className="field text-uppercase">
//                     <label>имя</label>
//                     <input id="name" value={state.name} 
//                     onchange={setField} name="name"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>телефон</label>
//                     <input id="number" value={state.number}
//                      onchange={setField} name="number"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>улица</label>
//                     <input id="street" value={state.street}
//                      onchange={setField} name="street"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>дом</label>
//                     <input id="house" value={state.house}
//                      onchange={setField} name="house"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>квартира</label>
//                     <input id="flat" value={state.flat}
//                      onchange={setField} name="flat"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>этаж</label>
//                     <input id="floor" value={state.floor}
//                      onchange={setField} name="floor"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>подъезд</label>
//                     <input id="porch" value={state.porch}
//                      onchange={setField} name="porch"
//                     />
//                 </div>
//                 <div className="field text-uppercase">
//                     <label>комментарий</label>
//                     <input id="comments" value={state.comments}
//                      onchange={setField} name="comments"
//                     />
//                 </div>
//                 <div className="actions text-uppercase">
//                     <button type="reset" onClick="reset">назад</button>
//                     <button>отправить</button>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

import React, { Component }  from 'react';
import {Mail} from './../asset/mail.png'
import {Phone} from './../asset/phone.png'

function customer_care() {

  return (
    <h1> Care </h1>
  )
}

export default customer_care;

//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       subject: '',
//       text: ''
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);

//   }

//   handleInputChange(); {
//     const target = target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render (); {
//     return (
      

//       <div>

//         <h1>Kontaktformular</h1>

//         <div style={{ backgroundColor: "white", borderRadius: '10px', width: "80%"}}>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <label>
//             Betreff:
//             <input type="text" name="subject" />
//           </label>
//           <label>
//             Text:
//             <input type="text" name="text" />
//           </label>
//           <input type="submit" value="Absenden" />
//         </form>

//         </div>

//       </div>

//     )
//   }
// }

// export default customer_care;

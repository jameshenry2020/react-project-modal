import React from 'react'

export const Modal = (props) => {
    return (
        <div className="modal-content">
            <div className="modal-header">
             <span className="closeBtn" onClick={()=>props.hid()}>&times;</span>
             <h2>Login Modal</h2>
             </div>
             <div className="modal-body">
                 <form>
                  <div className="container">
                    <label htmlfor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <div class="clearfix">
                        <button type="button" class="cancelbtn" onClick={()=>props.hid()}>Cancel</button>
                        <button type="submit" class="loginbtn">Login</button>
                    </div>
                  </div>
                 </form>   
             </div><hr/>
               <div className="modal-footer">
                    
                     <p>footer of modal</p>   
                    
               </div>
        </div>
    )
}

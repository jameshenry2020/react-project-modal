import React from 'react'
import { Modal } from './Modal'
export const ModalContainer = (props) => {
    return (
        <div className={`modal-wrapper ${props.show ? "active" : ""}`}> 
              <Modal hid={props.close}/>     
        </div>
    )
}

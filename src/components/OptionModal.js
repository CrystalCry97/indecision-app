import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} //open when selectedOption exist, while close when selectedOption is cleared
        //clear selectedOption and close modal when click background of modal or press Esc
        onRequestClose={props.handleClearSelectedOption} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button 
            className="button" 
            //clear selectedOption and close modal when click button
            onClick={props.handleClearSelectedOption} 
        >Okay</button>
    </Modal>
);
    


export default OptionModal;
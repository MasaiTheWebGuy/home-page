import React, { useState } from 'react'
import './NavButton.css'
import Modal from 'react-modal'
import NavigationLinks from '../NavigationLinks/NavigationLinks'


function NavButton (){

const [modalIsOpen, setModalIsOpen] = useState(false)

function openModal() {
  if(modalIsOpen === true){
      setModalIsOpen(false)
  } else if(modalIsOpen === false){
      setModalIsOpen(true)
  }
}

function navClick(){
    if(modalIsOpen){
        modalIsOpen = true
    } else{
        modalIsOpen()
    }
}

    
    return(
        <div>
             <div className="navi" onClick={openModal}>
                <p>TC</p>
            </div>
            <Modal isOpen={modalIsOpen}>
                <NavigationLinks navClick={navClick}/>
            </Modal>
          

        </div>
    )

}

export default NavButton
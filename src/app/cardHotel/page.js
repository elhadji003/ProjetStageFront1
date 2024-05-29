"use client"
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../../pages/sidebar/Sidebar';
import Hotel from '../../pages/hotel/Hotel';
import Navbar2 from '../../pages/navbar2/Navbar2';
import CreerHotel from '../creerHotel/page';
import { Modal } from '../../styles/Hotel.Style';

export default function CardHotel() {
  const [seeModal, setSeeModal] = useState(false);
  const [seeHotel, setSeeHotel] = useState(true);

  const handleClick = () => {
    setSeeModal(!seeModal);
    setSeeHotel(!seeHotel);
  };

  const handleClose = () => {
    setSeeModal(false);
    setSeeHotel(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-12 col-lg-10">
          <Navbar2 handleClick={handleClick} />

          {seeHotel && (
            <Modal>
              <Hotel />
            </Modal>
          )}

          {seeModal && (
            <Modal>
              <CreerHotel handleClose={handleClose} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import QLDonDatPhong from '../Components/QLDonDatPhong/QLDonDatPhong'
import ThemDDP from '../Components/ThemDDP/ThemDDP'
import CapNhatDDP from '../Components/CapNhatDDP/CapNhatDDP';

const BookingManagement = () => {

  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);

  const openPopupCreate = () => {
    setIsCreatePopupOpen(true);
    setIsUpdatePopupOpen(false);
  };

  const closePopupCreate = () => {
    setIsCreatePopupOpen(false);
  };

  const openPopupUpdate = () => {
    setIsUpdatePopupOpen(true);
    setIsCreatePopupOpen(false);
  };

  const closePopupUpdate = () => {
    setIsUpdatePopupOpen(false);
  };

  return (
    <div>
      <QLDonDatPhong openPopupCreate={openPopupCreate} openPopupUpdate={openPopupUpdate} />

      {isCreatePopupOpen && (
        <div className="overlay">
          <ThemDDP closePopupCreate={closePopupCreate} />
        </div>
      )}

      {isUpdatePopupOpen && (
        <div className="overlay">
          <CapNhatDDP closePopupUpdate={closePopupUpdate} />
        </div>
      )}
    </div>
  )
}

export default BookingManagement

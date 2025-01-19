import React from "react";
import styles from "./styles/contact.module.css";

const ContactCard = ({ contact, handleDelete }) => {
  const handleViewAddress = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contact.address
    )}`;
    window.location.href = mapsUrl;
  };

  const handleDeleteUser = () => {
    handleDelete(contact.id); 
    window.location.reload();
  };

  return (
    <div className={styles.UserDetails}>
      <div className={styles.userImg}>
        <img src={contact?.photoUrl} alt="Image" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.ProfileName}>{contact.name}</h3>
        <p>{contact.details}</p>
        <div className={styles.address}>
          <h3>Address:</h3>
          <p>{contact.address}</p>
        </div>
        <div className={styles.UserBtns}>
          <button
            onClick={handleViewAddress}
            className={styles.viewButton}
            formTarget="blank"
          >
            View in Map
          </button>
          <button onClick={handleDeleteUser} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

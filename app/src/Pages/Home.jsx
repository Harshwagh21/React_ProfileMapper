import React from "react";
import styles from "./styles/home.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import ContactCard from "../Components/ContactCard";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import defaultData from "../defaultData";

const Home = ({ profiles }) => {
  const navigate = useNavigate();
  const [allContacts, setAllContacts] = React.useState([...defaultData, ...profiles]);

  const handleDelete = (id) => {
    const updatedContacts = allContacts.filter((contact) => contact.id !== id);
    setAllContacts(updatedContacts);
    localStorage.setItem("profiles", JSON.stringify(updatedContacts));
  };

  return (
    <div className={styles.main}>
      <div className={styles.ControlBox}>
        <div className={styles.search}>
          <HiOutlineMagnifyingGlass size={25} style={{ color: "#9C9C9C" }} />
          <input type="text" placeholder="Search Here" />
        </div>
        <button className={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="10px"
            y="10px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
          </svg>
        </button>
      </div>
      {allContacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
      <div className={styles.AdminAddBtn} onClick={() => navigate("/admin")}>
        <FiPlus />
      </div>
    </div>
  );
};

export default Home;

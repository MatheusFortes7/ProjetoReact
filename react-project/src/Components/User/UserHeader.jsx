import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    if ("/conta/estatisticas" === location.pathname) {
      setTitle("Estatísticas");
    } else if ("/conta/postar" === location.pathname) {
      setTitle("Poste sua foto");
    } else {
      setTitle("Minha conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;

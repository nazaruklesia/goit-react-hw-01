import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.listItem}>
      <img className={styles.imgAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.status, isOnline ? styles.green : styles.red)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;

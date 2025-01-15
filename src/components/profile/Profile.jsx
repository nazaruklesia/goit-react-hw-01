import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.box}>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}> Followers</span>
          <span className={styles.stat}>{stats.followers}</span>
        </li>

        <li className={styles.item}>
          <span className={styles.text}>Views</span>
          <span className={styles.stat}>{stats.views}</span>
        </li>

        <li className={styles.item}>
          <span className={styles.text}>Likes</span>
          <span className={styles.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

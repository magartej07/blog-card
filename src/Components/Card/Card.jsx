import cardImg from "../../assets/illustration-article.svg";
import Badge from "../Badge/Badge";
import authorImg from '../../assets/image-avatar.webp'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.Card}>
      <img className={styles.CardImg} src={cardImg} alt="image" />
      <div><Badge>Loading</Badge></div>
      
      <p>Published 21 Dec 2023</p>
      <h3>HTML & CSS Foundation</h3>
      <p className={styles.Desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
        doloribus? Praesentium nulla voluptatem temporibus quae.
      </p>
      <div className={styles.Author}>
      <img src={authorImg} alt="grey oper" width='30' height='30' />
      <p>Grey Hopper</p>
      </div>
      
    </div>
  );
};
export default Card;

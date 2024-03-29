import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/Card.module.css";
import { icons } from "@/constants/icons";

function Card({ data: { _id, category, title, location, price,  published} }) {
 
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      {published === false ? <p className={styles.waiting}>Waiting</p> : null}
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} $ </span>
      <Link href={`/buy-residential/${_id}`}>
        View Commercial
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;

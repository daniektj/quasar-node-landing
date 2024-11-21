import React from 'react'
import styles from './CardBasic.module.css'

interface CardBasicProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const CardBasic= ({ title, description, imageUrl, imageAlt }: CardBasicProps) => {
    return (
      <div className={styles.card__container}>
        <div className={styles.card__bg_image01} />
        <div className={styles.card__radial_left} />
        <div className={styles.card__radial_right} />
        <div className={styles.card__radial_blue} />
        <img className={styles.card__image} src={imageUrl} alt={imageAlt} width={400} height={260} />
        <div className="w-full mt-[24px] mb-[24px]">
          <div className="font-bold text-xl mb-2 ">{title}</div>
          <p className="text-[#777F8E] text-base ">
            {description}
          </p>
        </div>
      </div>
    );
  };

export default CardBasic
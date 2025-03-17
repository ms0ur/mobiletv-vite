import styles from './FirstSection.module.scss';
import logo from '../../assets/svg/logo.svg';
import mouse from '../../assets/svg/mouse.svg';
import {ZButton} from "../zbutton/ZButton.tsx";

export function FirstSection() {
    return (
        <div className={styles.sectionMain}>
            <div className={styles.sectionMainLogo}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.sectionMainInfo}>
                <h2 className={styles.sectionMainInfoTitle}>
                    Прямой эфир, программы, новости, документальные циклы и фильмы, стримы ведущих телеканала "ЗВЕЗДА" в вашем смартфоне
                </h2>
                <p>Приложение для смартфонов на базе операционной системы Android</p>
                <ZButton text={"Прочитать инструкцию"} />
            </div>
            <div className={styles.tvImage}>
                <img className={styles.tvImageImg} src="/tvzprograms_poster.png" alt=""/>
                <div className={styles.gradientTop}></div>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientBottom}></div>
            </div>
            <div className={styles.mouseContainer}>
                <a href="/#secondSection">
                    <img src={mouse} alt=""/>
                </a>
            </div>
        </div>

    );
}
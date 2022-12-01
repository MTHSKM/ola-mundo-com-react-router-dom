import React from "react";
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.paragrafo}>
                    Oi! Meu nome é Matheus Kim e seja bem vindo(a)! Atualmente estou cursando Engenharia de Computação pela UNIFEI. E estudo, nos tempos livres pela plataforma Alura, JavaScript voltado tanto para FrontEnd quanto para BackEnd. Mas sempre de olho em outras oportunidades de aprendizagem
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}></img>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de Matheus Kim'></img>
            </div>
        </div>
    )
}

export default Banner
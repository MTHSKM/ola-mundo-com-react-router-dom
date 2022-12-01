import React from "react";
import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada></MarcaRegistrada>
            Desenvolvido por <a href="https://www.linkedin.com/in/matheus-kim-19b154251/" target='_blank' rel='noreferrer'>Matheus Kim</a> em conjunto com a <a href="https://www.alura.com.br/" target='_blank' rel='noreferrer'>Alura</a>
        </footer>
    )
}

export default Rodape
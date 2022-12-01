import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

const SobreMim = () => {
    console.log({fotoCapa})
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim...'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Matheus!
            </h3>

            <img src={fotoSobreMim} alt='Foto de Matheus' className={styles.fotoSobreMim}></img>

            
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de engenharia de computação pela UNIFEI, e estudo cursos voltados a FullStack pela plataforma Alura.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou na Universidade Federal de Itajubá (UNIFEI), quando comecei a me graduar em engenharia de computação. Eu aprendi lógica de programação e o básico de várias linguagens, como C++, Java, C#, mas sem aprofundar muito em cada uma delas. Gosto muito de programar, sinto prazer na sensação de "dar certo", aquela sensação em que você realiza algo que projetou em sua mente é insuperável.
            </p>

            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar engenharia de computação na Universidade Federal de Itajubá (UNIFEI). {/* Colocar os projetos de extensões */}
            </p>

            <p className={styles.paragrafo}>
                Em conjunto com a UNIFEI, estudo programação FullStack pela plataforma Alura, como dito anteriormente,e lá é onde eu me preparo para vários casos de desenvolvimento web, combino o ensido da UNIFEI com a Alura para progredir cada vez mais em meus estudos de programação. Mas sempre de olho em outras oportunidades de aprendizagem.
            </p>

            <p className={styles.paragrafo}>
                No momento em que eu escrevo essa redação, estou cursando o meu quarto (4º) período, sempre tendo em mente que novos desafios virão!
            </p>
        </PostModelo>
    )
}

export default SobreMim
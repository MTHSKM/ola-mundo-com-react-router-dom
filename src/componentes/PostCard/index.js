import BotaoPrincipal from "componentes/BotaoPrincipal";
import React from "react";
import { Link } from "react-router-dom";
import styles from './Post.module.css'

const PostCard = (post) => {
    return(
        <Link to={`/posts/${post.post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${post.post.id}/capa.png`} alt="Imagem de capa do post"></img>
                <h2 className={styles.titulo}>{post.post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard
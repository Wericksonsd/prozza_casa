"use client";

import styles from "./logar.module.css"
import React, { ReactNode } from "react"
import ButtonLogar from "../_Buttons/_Button_Login/buttonLogar"


function Logar(){

    return(
        <div className={styles.container}>
            <label htmlFor="nameInput" className={styles.label}>USUÁRIO:</label>
            <input
                id="nameInput"
                className={styles.input}
            />
            <div className={styles.space}></div>
            <label htmlFor="passInput" className={styles.label}>SENHA:</label>
            <input
                id="passInput"
                type="password"
                className={styles.input}
            />
            <div className={styles.containerBaixo}>
                <ButtonLogar />
                <p>ESQUECI A <span className={styles.esqSenha}>SENHA</span></p>
            </div>
        </div>
    )

}

export default Logar
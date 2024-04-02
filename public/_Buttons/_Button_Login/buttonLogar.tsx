import styles from "./buttonLogar.module.css"
import Link from "next/link";


function ButtonLogar(){

    return(
        <Link href='/Messages' className={styles.container} >
            LOGAR
        </Link>
    )

}

export default ButtonLogar
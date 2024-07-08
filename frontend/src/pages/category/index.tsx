import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './style.module.css'

export default function Category(){
    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        alert("CATEGORIA " + name)
    }


    return(
        <>
        <Head>
            <title>Nova categoria - Sujeito Pizzaria</title>
        </Head>
        <div>
            <Header/>

            <main className={styles.container}>
                <h1>Cadastrar categorias</h1>

                <form className={styles.form} onSubmit={handleRegister}>
                    <input 
                    type="text" 
                    placeholder="Digite o nome da categoria"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>

                </form>

            </main>
        </div>

        </>
    )
}
import { useState, FormEvent, useContext } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoimg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button/index'

import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

import Link from 'next/link';

export default function Register() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  

    async function handleSignUp(event: FormEvent){
      event.preventDefault();

      if(name === '' || email === '' || password === ''){
        toast.warning("Preencha todos os campos!")
        return;
      }

      setLoading(true);

      let data = {
        name,
        email,
        password
      }

      await signUp(data)

      setLoading(false)

    }

  

  return (
    <>
      <Head>
        <title>Faça seu cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoimg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
            <h1>Criando conta</h1>

          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>
        
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Fazer Login</a>
          </Link>

        </div>
      </div>
    </>
  );
}
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoimg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button/index'

import Link from 'next/link';

export default function Register() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoimg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
            <h1>Criando conta</h1>

          <form>
            <Input
              placeholder="Digite seu nome"
              type="text"
            />

            <Input
              placeholder="Digite seu email"
              type="text"
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
            />

            <Button
              type="submit"
              loading={false}
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
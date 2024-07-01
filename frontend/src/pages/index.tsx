import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoimg from '../../public/logo.svg';

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button/index'

export default function Home() {
  return (
      <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoimg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}></div>
        <form>
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
            Acessar
          </Button>

        </form>
      </div>
      </>
  );
}

import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
  const { signOut } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    setShowModal(true);
  };

  const confirmSignOut = () => {
    signOut();
    setShowModal(false);
  };

  const cancelSignOut = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/logo.svg" width={190} height={60} alt="Logo" />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category" legacyBehavior>
            <a className={styles.menuLink}>Categoria</a>
          </Link>

          <Link href="/product" legacyBehavior>
            <a className={styles.menuLink}>Cardápio</a>
          </Link>

          <button onClick={handleSignOut}>
            <FiLogOut color="#FFF" size={24} />
          </button>
        </nav>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Você tem certeza que quer sair?</h2>
            <div className={styles.modalActions}>
              <button onClick={confirmSignOut} className={styles.confirmButton}>
                Sim
              </button>
              <button onClick={cancelSignOut} className={styles.cancelButton}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { Link } from 'react-dom';

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a className={styles.netlifyLink} href="https://netlify.com" target="_blank">
          Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> Netlify
        </a>
      </footer>
    </>
  )
}

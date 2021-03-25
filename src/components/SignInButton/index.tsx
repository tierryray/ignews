import { signIn, signOut, useSession } from 'next-auth/client';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
      <button 
        type="button"
        className={styles.signInButton}
      >
        <FaGithub color="#04D361" />
          {session.user.name}
        <FiX 
          className={styles.closeIcon} 
          color="#737380" 
          onClick={() => signOut()}
        />
      </button>
  ) : (
    <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('github')}
      >
        <FaGithub color="#EBA417" />
        Sign in with Github
      </button>
  )
}
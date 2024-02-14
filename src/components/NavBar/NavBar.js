import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="/"><i className="fa fa-tasks"></i></a>
      </div>
      <ul className={styles.right}>
        <li><a href="/">Home</a></li>
        <li><a href="/favorite">Favorite</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
import s from './Navbar.module.css';

// let s = {
//   'nav': 'Navbar_nav__3ou9Q',
//   'item': 'Navbar_item__3qaF3',
// };

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <a href="#">Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Messages</a>
    </div>
    <div className={s.item}>
      <a href="#">News</a>
    </div>
    <div className={s.item}>
      <a href="#">Music</a>
    </div>
    <div className={s.item}>
      <a href="#">Settings</a>
    </div>
  </nav>
}

export default Navbar;
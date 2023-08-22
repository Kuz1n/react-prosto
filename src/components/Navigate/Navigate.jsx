import s from './Navigate.module.css';

function Navigate() {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <a>Profile</a>
        </div>
        <div className={s.item}>
          <a>Messages</a>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    );
  }

export default Navigate
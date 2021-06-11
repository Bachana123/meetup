import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
  const favortesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{favortesCtx.favoritesCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
import { useContext } from 'react'

import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const FavoritesCtx = useContext(FavoritesContext)

  let content;

  if (FavoritesCtx.favoritesCount === 0) {
    content = <p>You got no favorites. start adding some?</p>
  } else {
    content = <MeetupList meetups={FavoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage;
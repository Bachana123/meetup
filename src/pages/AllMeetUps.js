import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState();
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-testing-app-14325-default-rtdb.firebaseio.com/meetups.json')
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      const dataArray = [];
      for (const key in data) {
        dataArray.push({...data[key], id: key});
      }
      setLoadedMeetups(dataArray);
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetUpsPage;
import Show from './show';
import styled from 'styled-components'
const shows = [{
    showName: 'Fody\'s Tavern',
    url: 'https://www.facebook.com/fodysnashua',
    date: 'November 3',
    time: '8PM'
}, {
    showName: 'Kathleen\'s Irish Pub',
    url: 'https://www.facebook.com/KathleensIrishPub',
    date: 'November 6',
    time: '7PM'
}, {
    showName: 'The Comedy Studio at Vera\'s',
    url: 'https://www.eventbrite.com/e/the-comedy-studio-at-veras-tickets-158177357735',
    date: 'December 9',
    time: '8PM'
}]

const ExpandUpcomingShows = styled.div`

`

const upcomingShows = () => {
    return(
        <div>
            <ExpandUpcomingShows>
                Upcoming Shows
            </ExpandUpcomingShows>
            {shows.map(show => <Show show={show} />)}
        </div>
    )
}

export default upcomingShows()
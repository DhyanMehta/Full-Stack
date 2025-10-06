import React from 'react'
import DateTime from '../components/DateTime'
import Greetings from '../components/Greetings'
import FeedbackPanel from '../components/FeedBackPanel'

const Home = () => {
    return (
        <div>
            <Greetings />
            <DateTime />
            <FeedbackPanel />
        </div>
    )
}

export default Home



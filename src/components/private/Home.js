import React from 'react';
import './home.css'
import HomeSlider from './HomeSlider';
export const Home = () => {
    let wellcome = ''
    const date = new Date()
    const time = date.getHours();
    if (time < 12 && time >= 0) { wellcome = "Good Morning" }
    else if (time >= 12 && time <= 17) { wellcome = "Good Afternoon" }
    else if (time <= 24 && time > 17) { wellcome = "Good Evening" }

    return (<>

        {console.log(time)}
        {<p className="welcome">{wellcome},<br></br> Welcome to our site!!! </p>}
        <HomeSlider />
    </>
    )
}
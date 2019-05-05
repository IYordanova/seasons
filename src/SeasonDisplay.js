import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr...It's chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// the root of the component has className = the component file/code name
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return (
        <div className={ `season-display ${season}` }>
            <i className={ `icon-left massive ${seasonConfig[season].iconName} icon` }/>
            <h1>{ seasonConfig[season].text } </h1>
            <i className={ `icon-right massive ${seasonConfig[season].iconName} icon` }/>
        </div>
    );
};

export default SeasonDisplay;
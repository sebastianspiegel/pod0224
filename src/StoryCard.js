import React from 'react'
import Character from './Character.js'

class StoryCard extends React.Component {


    render(){
        return(
            <div>
                <h1 onClick={() => this.props.setCurrentStory(this.props.id)}>{this.props.name}</h1>
            </div>
        )
    }
}

export default StoryCard
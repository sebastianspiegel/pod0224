import React from 'react'
import Character from './Character.js'
import StoryCard from './StoryCard.js'
import StoryDetails from './StoryDetails.js'

class StoryContainer extends React.Component {

    state = {
        stories: [],
        currentStory: null 
    }

    componentDidMount(){
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(json => {
            this.setState ({
                stories: json.data
            })
        })
    }

    renderStories(){
        return this.state.stories.map(story => <StoryCard name={story.attributes.title} id={story.id} setCurrentStory={this.setCurrentStory}/>)
    }

    renderStory(){
        let s = this.state.stories.find(story => story.id === this.state.currentStory)

        return <StoryDetails id={this.state.currentStory} title={s.attributes.title} resetCurrentStory={this.resetCurrentStory}/>
    }

    setCurrentStory = (storyID) => {
        this.setState ({
            currentStory: storyID 
        })
    }

    resetCurrentStory = () => {
        this.setState ({
            currentStory: null 
        })
    }

    render(){
        return(
            <div>
                
                <h3>Characters</h3>
                {this.state.currentStory ? this.renderStory() : this.renderStories()}
            </div>
        )
    }
}

export default StoryContainer
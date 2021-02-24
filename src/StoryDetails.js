import React from 'react'
import Character from './Character.js'

class StoryDetails extends React.Component {

    state = {
        characters: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            let id = this.props.id 
            this.setState ({
                characters: json.data.filter(char => char.attributes.story_id == this.props.id)
            })
        })
    }

    renderCharacters(){
        return this.state.characters.map(character => <Character name={character.attributes.name} description={character.attributes.description}/>)
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>Characters</h3>
                {this.renderCharacters()}
                <button onClick={this.props.resetCurrentStory}>Back</button>
            </div>
        )
    }
}

export default StoryDetails 
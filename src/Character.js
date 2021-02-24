import React from 'react'

class Character extends React.Component {

    render(){
        return(
            <div>
                <h3> {this.props.name} </h3>
                <div> {this.props.description} </div>
            </div>
        )
    }
}

export default Character
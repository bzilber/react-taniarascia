import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
 
  state = {
     characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
     ],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((character,i) => { //1
        return i !== index 
      }),
    })
  }

    render() {
        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App


//1: https://stackoverflow.com/questions/418799 what-does-colon-do-in-javascript , so setState.chars = chars.filter()`
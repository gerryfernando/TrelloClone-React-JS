import './App.css';
import List from './components/List';
import React from 'react'


class App extends React.Component {

  state = {
    cards: [<List></List>,<List></List>,<List></List>,<List></List>]
  }

  addL = () => {
    this.setState({
      cards: [...this.state.cards, <List />]
    })
  }

  render(){
    return (
      <div className="App-">
        <header className="App-header">
          <h1> Trello Clone </h1>
        </header>
        <div className="Content">
          <table className="TabH">
            <tr className="Tab1">
              {this.state.cards}
              <td>
                <div>
                  <button style={{width :"75px"}} className="Buttons1" onClick={this.addL}>Add List</button>
                </div>
              </td>
            </tr>
          </table>
        </div>

      </div>
    );
  }
  
}



export default App;

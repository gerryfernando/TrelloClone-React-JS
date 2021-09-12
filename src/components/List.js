import Card from './Card';
import './css/Tes.css';
import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

class List extends React.Component{
    
  state = {
        cards: [<Card/>,<Card/>,<Card/>],
        showL : true
      }
    
      addC = () => {
        this.setState({
          
          cards: [...this.state.cards, <Card />]
        })
      }

      DelL = () => {
        this.setState({
          showL : !this.state.showL
        })
      }

     
    render(){

    // function handleOnDragEnd(result) {

    //   const items = Array.from(this.state.cards);
    //   const [reorderedItem] = items.splice(result.source.index, 1);
    //   items.splice(result.destination.index, 0, reorderedItem);
    //   this.state.cards(items);
    //   }
    return (
        <DragDropContext >
      <Droppable droppableId="MainC">
      {(provided)=>(
          <td style={{display: this.state.showL ? '' : 'none' }}   {...provided.droppableProps} ref={provided.innerRef} >
          <div className="Card-h">
              <div className="Titl">
                  <button className="Buttons3" onClick={this.DelL} >Delete list</button>
                  <h1 onfocus="document.execCommand('selectAll',false,null);" contentEditable="true" >Title(Editable)  </h1> 
              </div>
              <div className="Card-I" ondrop="drop(event)" ondragover="allowDrop(event)"   >
              {this.state.cards}
              <div className="addC">
                  <button style={{marginBottom : "15px"}} className="Buttons1" onClick={this.addC} >Add Card</button>
              </div>
              </div>
          </div>
          
      </td>

      )}
      </Droppable>
    </DragDropContext>
    

  
    );
    }
}

export default List;
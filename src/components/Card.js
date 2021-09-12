import React from "react";
import './css/Tes.css';
import uniqueId from 'lodash/uniqueId'
import {Draggable} from 'react-beautiful-dnd'


class Card extends React.Component{
    
    state = {
        Id : uniqueId('myprefix-'),
        shows: true,
        edits:false,
        val:"Press the edit button to change the content"
      }
    
      DelC = () => {
        this.setState({
          shows : !this.state.shows
        })
        console.log(this.state.shows )
      }

      EditC = () => {
        this.setState({
          edits : !this.state.edits
        })
        console.log(this.state.Id )
      }

    
    render(){
        return (
            <Draggable key ={this.state.Id} draggableId={this.state.Id}>
                {(provided)=>(

                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div  className="MainC"  style={{display: this.state.shows ? 'block' : 'none' }}  >
                            
                            <ul className="nav">
                                <li>
                                    
                                    <div style={{float:'left'}} >
                                        <button className="Buttons3" onClick={this.DelC}>Delete</button>
                                    </div>
                                    <div style={{float:'left',display: this.state.edits ? 'none' : 'block'}}>
                                        <button className="Buttons2" onClick={this.EditC}>Edit</button>
                                    </div>
                                    <div style={{float:'left', display: this.state.edits ? 'block' : 'none'}}>
                                        <button className="Buttons1" onClick={this.EditC}>Save</button>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div class="Txt" contentEditable={this.state.edits}>{this.state.val}  </div>
                                </li>
                            </ul>
                        </div>       
                    </div>
                        


                )}

            </Draggable>
            
            
        );
    }
    

}

export default Card;
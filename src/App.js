import React from "react"
import logo from "./me.png"
import "./App.css"


class App extends React.Component{


  constructor(props){ //we keeps the hold of state
    super(props);
    this.state= {
      newItem : "",
      list : []
    }
  }

  addItem(mytodo){
    if(mytodo !== ""){
      const newItem = {
        id : Date.now(),
        value : mytodo,
        isDone : false
      }

      const list = [...this.state.list]
      list.push(newItem)

      //now we cannot directly change the state list with the local list
      this.setState({ //things we wanna update
        list,
        newItem
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedlist = list.filter(item => item.id !== id) //returns the elements whoes id doesnt match with the provided id
    
    //now update the state list 
    this.setState({
      list : updatedlist
    })
  }

  updateInput(input){
    this.setState({
      newItem : input
    })
  }

  render(){ //we are expected to return something in render

    return (
      <div>
        <img src={logo} width="175" height="175" className="logo"/>
        <h1 className="app-title">X ToDo App</h1>
        <div className="container">
          Add an item..
          <br/>
          <input 
            type="text"
            className="input-text"
            placeholder="write a Todo"
            required
            value = {this.state.newItem}//we storing the current newItem
            onChange = {e =>this.updateInput(e.target.value)} //if gets changed then we invke updateinput()
          />
          <button 
            className="add-btn"
            onClick = {() =>this.addItem(this.state.newItem)}//adding the current newItem
            disabled = {!this.state.newItem.length} //wont work when length is zero
          >Add to todo</button>
          <div className="list">
            <ul>
      
              {this.state.list.map(item =>{ //looping
                return(

                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      onChange={()=>{}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() =>this.deleteItem(item.id)}
                    >Delete</button>
                  </li>

                )
              })}

              <li>
                <input type="checkbox" name="" id=""/>
                Let's achieve Nirvana
                <button className="btn">Delete</button>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )

  }

}


export default App
import React, { Component } from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message: 'welcome to home page',
            todolist: [
                {task: "learn react today"},
                {task: "learn react redux"}, 
                {task : "learn git hub"}
            ]
        };
    }    
    
    render(){
            let task1=this.state.todolist[0].task  
        return(

            <div>
                {
                    this.state.message
                }
                <form>
                <input type="text" id="name" name="name"></input>
                <input type="submit" value="Submit"></input>
                </form>
                <div>
            <h1>todolist</h1>
                
                for(let i= 0; i<4 ; i++) 
                  {  this.state.todolist[i].task } 
                    
                }
    
                </div>
            </div>




        )
    }
}

export default Home;
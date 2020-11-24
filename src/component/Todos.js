import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Todos extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">posts</Mui.Button>
                        <Mui.Button href="/Comments">Comments</Mui.Button>
                        <Mui.Button href="/Albums">Albums</Mui.Button>
                        <Mui.Button href="/Photos">Photos</Mui.Button>
                        <Mui.Button href="/Todos">Todos</Mui.Button>
                    </Mui.ButtonGroup>
                </center>
                <h1 align="center">data json posts</h1>
                    <table border="1">
                        <tr>
                        <td>userId</td>
                        <td>id</td>
                        <td>Title</td>
                        <td>completed</td>
                        </tr>
                        {data.map(todo =>
                        <tr hey={todo.userId}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed}</td>
                        </tr>
                        )}
                    </table>
            </div>
        )
    }
}
    
export default Todos;
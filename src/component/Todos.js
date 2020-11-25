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
                <nav>
                    <div class="nav-wrapper  deep-orange">
                    <a href="#" class="brand-logo right">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/">Posts</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Todos">Todos</a></li>
                        <li><a href="/Users">Users</a></li>
                    </ul>
                    </div>
                </nav>
                <h2 align="center">DATA JSON TODOS</h2><br/>

                    <div class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s2">
                            <img src="/gustaf.jpg" alt="" width="150" height="150" class="circle responsive-img" />
                            </div>
                            <div class="col s10">
                            <span class="black-text">
                                This is a square image. Add the "circle" class to it to make it appear circular.
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    <table border="1">
                    <thead>
                        <tr class="responsive-table card-panel blue darken-1 centered">
                        <td>userId</td>
                        <td>id</td>
                        <td>Title</td>
                        <td>completed</td>
                        </tr>
                    </thead>
                        {data.map(todo =>
                    <thead>
                        <tr hey={todo.userId}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed}</td>
                        </tr>
                    </thead>
                        )}
                    </table>
            </div>
        )
    }
}
    
export default Todos;
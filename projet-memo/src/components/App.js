import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './Addtask'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../initialData';
import initialData from '../initialData';

class App extends React.Component{


    


    render(){
      return(
        <section id="todo">
          <h1 className="m-3">Liste de tâches</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/add-task" component={AddTask} />
                    <Route path="/:filter?" render={(props) => < ToDoList  {...props} tasks={initialData}/>} />
                </Switch>
                <NavBar />
            </BrowserRouter>
        </section>
      )
    }
  }

  export default App;

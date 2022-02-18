import TodoForm from "./todoForm";
import { Row,Col, Divider } from "antd";
import { useEffect, useState } from "react";
import TodoList from "./todoList";



const Todo = ()=>{

  
    const [count,setCount] = useState(false);
    const [todo,setTodo] = useState([]);
    const [edit,setEdit] = useState("");
     
    useEffect(()=>{
      
      let todolist = localStorage.getItem("todo");
      let todoss = JSON.parse(todolist);
      setTodo(todoss);
    },[count]);

    useEffect(()=>{
      localStorage.setItem("todo", JSON.stringify(todo));
    },[todo])

    const addTodo = (data)=>{    
      setTodo([...todo,data]);
      setCount(!count);    
    };

    const editTodo = (data)=>{
      console.log(data);
      const newData = todo.findIndex((todo)=>{
        return todo.id==data.id;
    });
    
    todo[newData]=data;
    setTodo(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
    setCount(!count);
    setEdit("");
    console.log("completed");
    }

    const editedData=(data)=>{
      console.log(data);
      setEdit(data);
    }
    const cancelIt=()=>{
      setEdit("");
      setCount(!count);
    }

    const deleteTodo = (id)=>{
      const updatedTodo = todo.filter((todo)=>{
        return todo.id != id;
      });
      setTodo(updatedTodo);
    };

    return(
        <>
          <Divider/>
          <Divider/>
            <Row>
          
              <Col span={12}>
                <TodoForm 
                  addTodo={addTodo}
                  edit={edit}
                  editTodo={editTodo}
                  cancelIt={cancelIt}   
                />
              </Col>
             
          
              <Col span={10}>
                <TodoList 
                  todo={todo} 
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  editedData={editedData}  
                  />
              </Col>
            </Row>     
        </>
    )
}


export default Todo;
import TodoForm from "./todoForm";
import { Row,Col, Divider } from "antd";
import { useEffect, useState } from "react";
import TodoList from "./todoList";



const Todo = ()=>{
  
    let todolist = localStorage.getItem("todo");
    let todoss = JSON.parse(todolist);

  
    const [todo,setTodo] = useState(todoss);
    const [edit,setEdit] = useState("");
  


    const addTodo = (data)=>{
      setTodo([...todo,data]);
  
    };
    useEffect(()=>{
      localStorage.setItem("todo", JSON.stringify(todo));
    
    },[todo]);

    const deleteTodo = (id)=>{
      const updatedTodo = todo.filter((todo)=>{
        return todo.id != id;
      });
      setTodo(updatedTodo);
    };

    const editTodo = (data)=>{
   
  
      console.log(data);
      setEdit(data);
      
    };

    const editedData = (data)=>{
      console.log(data);
      const newData = todo.findIndex((todo)=>{
        return todo.id==data.id;
    });
    
    todo[newData]=data;
    console.log(todo);
    setTodo(todo);
    console.log("completed");
  
  
    }

    const addData = ()=>{

    }
  
  

    return(
        <>
            <Divider/>
            <Row>
                <Col span={12}>
                  <TodoForm 
                    addTodo={addTodo}
                    editTodo={editTodo}
                    editedData={editedData}
                    edit={edit}
                  />

                </Col>
                <Col span={10}>
                    <TodoList 
                      todo={todo} 
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                    />
                </Col>
            </Row>
            
        </>
    )
}





export default Todo;
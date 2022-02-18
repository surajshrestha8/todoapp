
import { Form ,Button,Input,message,Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect,useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CATEGORY } from "../../constants/CATEGORY/category";

const TodoForm = ({ addTodo ,edit ,editedData})=>{

    const { Option } = Select;
    const [form] = useForm();
    console.log(edit);
    
    if(edit){
        form.setFieldsValue({
            todo: edit.todo,
            status: edit.status,
            category:edit.category,
        })
    }


    const submitTodo =(todo)=> {  

                if(edit){
                    const eData = {
                        id:edit.id,
                        todo:todo.todo,
                        category:todo.category,
                        status:todo.status,
                    }
                editedData(eData);
                form.resetFields();
                

                }
                else{
                    const todoData = {
                        id: uuidv4(),
                        todo:todo.todo,
                        category:todo.category,
                        status:todo.status,
                    };
                    addTodo(todoData);
                    form.resetFields();
                    message.success("Todo added");
                    
                }
             
    }
 
    return(
        <>
            <Form form={form}  onFinish={submitTodo}>
                <Form.Item
                    name="todo"
                    label="Todo"
                    labelCol={{ span:4 }}
                    wrapperCol={{ span:8 }}
                
                
                    rules={[
                        {
                            required:true,
                            message:"Enter todo",
                        }
                    ]}
                >
                    <Input name="todo" placeholder="Enter todo"  ></Input>

                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    labelCol={{ span:4 }}
                    wrapperCol={{ span:8 }}
                    rules={[
                        {
                            required:true,
                            message:"Select a category",
                        }
                    ]}
                >
                    <Select placeholder="Select a category">
                        {
                            CATEGORY.map((category)=>{
                              return  <Option value={category.name} key={category.id}>{category.name}</Option>
                            })    
                        }     
                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Status"
                    labelCol={{ span:4 }}
                    wrapperCol={{ span:8 }}
                    rules={[
                        {
                            required:true,
                            message:"Select a status",
                        }
                    ]}

                >
                    <Select placeholder="Select status">
                      <Option value="completed" key="completed">Completed</Option>
                      <Option value="pending" key = "pending">Pending</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                  labelCol={{ span:4}}
                  wrapperCol={{ span:11}}  
                >
                  <Button type="primary" htmlType="submit">Add Todo</Button>
                

                </Form.Item>
                
            </Form>
        </>
    )

}


export default TodoForm;
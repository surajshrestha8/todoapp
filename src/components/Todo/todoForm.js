
import { Form ,Button,Input,message,Select,Space, Divider } from "antd";
import { useForm } from "antd/lib/form/Form";

import { v4 as uuidv4 } from "uuid";
import { CATEGORY } from "../../constants/CATEGORY/category";

const TodoForm = ({ addTodo ,edit,editTodo,cancelIt})=>{

    const { Option } = Select;
    const [form] = useForm();

    if(edit){
        form.setFieldsValue({
            todo:edit.todo,
            category:edit.category,
            status:edit.status,
        })
    }

    const cancelEdit = ()=>{
        form.resetFields();
        cancelIt();
    }
    message.config({
        top:80,
    });

    const submitTodo =(todo)=> {  

        if(edit){
            const newData = {
                id:edit.id,
                todo:todo.todo,
                status:todo.status,
                category:todo.category,
            }
            console.log(newData);
            editTodo(newData);
            form.resetFields();
            message.success("Edited successfully");
        }
                    
        else{
            
            const todoData = {
                id: uuidv4(),
                todo:todo.todo,
                category:todo.category,
                status:todo.status,
                };
            addTodo(todoData);
            console.log(todoData);
            form.resetFields();
            message.success("Todo added"); 
        }             
    }
 
    return(
        <>  
            {
                edit ? <h2>Edit Todo</h2> : <h2>Add Todo</h2>
            }
            <Divider/>
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
                    {
                        edit ? 
                        <Space>
                            <Button type="primary" htmlType="submit">Edit Todo</Button>
                            <Button danger onClick={cancelEdit}>Cancel</Button>
                        </Space>  
                        :
                        <Button type="primary" htmlType="submit">Add Todo</Button>
                
                    }
                </Form.Item>
                
            </Form>
        </>
    )

}


export default TodoForm;
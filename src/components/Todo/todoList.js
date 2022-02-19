import { Table,Button ,message,Popconfirm,Tag ,Space} from "antd";



const TodoList = ({ todo,deleteTodo,editedData}) =>{

    const editData= (data)=>{
        console.log(data);
        editedData(data);
    };

    const deleteData=(id)=>{
        deleteTodo(id);
        message.success("Todo deleted");
    };

    const columns = [
        {
            title:"Todo",
            dataIndex:"todo",
            key:"todo",
        },
        {
            title:"Category",
            dataIndex:"category",
            key:"category",
            filters:[
                { text:"Education",value:"Education",key:"Education" },
                { text:"Sports",value:"Sports",key:"Sports" },
                { text:"Entertainment",value:"Entertainment",key:"Entertainment" },
                { text:"Utility",value:"Utility",key:"Utility"},

              ],
              onFilter:(value,record)=>record.category===value,                
        },
        {
            title:"Status",
            dataIndex:"status",
            key:"status", 
            render:(status) =>(
                <span>
                    {  
                      status==="completed" ? 
                        <Tag color="green" key={status}>
                          {status.toUpperCase()}
                        </Tag>
                      :   
                        <Tag color="red" key={status}>
                          {status.toUpperCase()}                            
                        </Tag> 
                    }          
                </span>   
            ),
            filters:[
                { text:"Completed",value:"completed",key:"completed"},
                { text:"Pending",value:"pending",key:"pending"},
            ],
            onFilter:(value,record)=>record.status===value,
        },
        {
            title:"Actions",
            key:"Actions",
            render(todo){
                return(
                    <div key={todo.id}> 
                    <li key={todo.id}></li>
                    <Space>
                        <Button type="primary" key={todo.id} onClick={()=>editData(todo)}>Edit</Button>
                        <Popconfirm
                        title="Do you want to delete this todo?"
                        onConfirm={()=>deleteData(todo.id)}
                        key={todo.id}
                        >
                        <Button danger key={todo.id}>Delete</Button>
                        </Popconfirm>
                    </Space>
                    </div>
                )
            }
        }
    ]
 
    return (
        <>
            <h2>Todos:</h2>
            <Table 
              dataSource={todo}
              columns={columns}
              pagination={{ pageSize:4}}
            
        
            >
            </Table>
        </>
    )
}
export default TodoList;
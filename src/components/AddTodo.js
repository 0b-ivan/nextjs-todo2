
/*
Static memory Clientseitige funktion die durch für das Clientseitige rendering notwendig ist.
Verteilte Systeme die über eine (API) Schnittstelle kommuniziert.
persönliche Ansicht der Webseite.
*/
'use client'
import Input from "@/components/Input"

/*
useState wird durch das react Framework geliefert
 */
import {useState} from "react";



export default function AddTodo({todos:todos}) {
    /**
     * setinput setzt die funktion vom inputfeld
     */
    const[input, setinput] = useState('')
    const[todos, settodos] = useState([{todoName:'ich bin ein test',dueDate: new Date(),checked: false}])
    const addTodo = () => {
        if(input.trim() === '') return
        const currentdate = new Date();
        /*todo:Rename field with i_name*/
        const deadline = currentdate.setDate(currentdate.getDate() + 1)
        const newTodo = {todoName:input,dueDate:deadline,checked:false}
        settodos(prev=>[...prev,newTodo])
        setinput('')
        console.log('#################################')
        console.log(newTodo)
        console.log(todos);

    }
    return (
        <div style={{
           border: "2px solid green",
           padding: "1rem"
        }}>
            {/*<Input placeholder="Your todo" /> */}
            <input
                id="task_id"
                type="text"
                placeholder="Your todo"
                onChange={(e) => setinput(e.target.value)}
            />
            <button onClick={addTodo} id="add_btn_id" >Add your todo</button>
        </div>
    )
}
import React, { useState } from "react"

export default {
    title: 'React.memo demo'
}

const Counter = (props: {count: number}) => {
    return (
        <div>{props.count}</div>
    )
}
const UsersSecret = (props:{users: Array<string>}) => {
    console.log("Users");
    
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div> )}</div>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Examle1');
    
    let [count, setCounter] = useState(0)
    let [users, setUsers] = useState(["Dim", "Val", "And"])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(count + 1)} >+</button>
            <button onClick={addUser} >add user</button>
            <Counter count={count}/>
            <Users users={users}/>
        </> 
    )
}
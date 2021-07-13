import React, { useState } from "react"
import { useMemo } from "react";

export default {
    title: 'UseMemo demo'
}

const UsersSecret = (props:{users: Array<string>}) => {
    console.log("Users");
    
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div> )}</div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    
    let [count, setCounter] = useState(0)
    let [users, setUsers] = useState(["Dim", "Val", "And"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLocaleLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(count + 1)} >+</button>
            <button onClick={addUser} > add user </button>
            {count}
            <Users users={newArray}/>
        </> 
    )
}

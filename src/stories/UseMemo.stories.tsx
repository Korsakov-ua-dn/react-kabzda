import React, {useCallback, useState} from "react"
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

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');

    let [count, setCounter] = useState(0)
    let [books, setBooks] = useState(["React", "TS", "CSS"])

    // const addBook = useMemo(() => {
    //     return () => {
    //         setBooks([...books, 'HTML' + new Date().getTime()])
    //     }
    // }, [books]) --- результат тот же
    const addBook = useCallback(() => {
            setBooks([...books, 'HTML' + new Date().getTime()])
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(count + 1)} >+</button>

            {count}
            <Books addBook={addBook}/>
        </>
    )
}
const BooksSecret = (props:{addBook: ()=> void}) => {
    console.log("BooksSecret");

    return (
        <div>
            <button onClick={props.addBook} > add book </button>
            {/*{props.books.map((book, i) => <div key={i}>{book}</div> )}*/}
        </div>
    )
}
const Books = React.memo(BooksSecret)

// useEffect => logick, sideEffect => apiRequest, DOM, setTimeout
// useCallback =>
//     parentComponent => fn callback to dauther, useCallback
//     daughterComponent

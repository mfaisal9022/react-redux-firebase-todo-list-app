import "./App.css";
import React, {useEffect} from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/TodoItem";
import {
    collection,
    query,
    onSnapshot, deleteDoc, doc, updateDoc,
} from "firebase/firestore";
import {db} from "./firebase";
import Heading from "./components/Heading";
import {getAllTodos, removeItemInList, updateItemInList} from "./redux/reducer/todo-reducer";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todoItems);

    useEffect(() => {
        let todosArray = [];
        const q = query(collection(db, "todos"))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.map(doc => {
                todosArray.push({id: doc.id, ...doc.data()});
            })
            dispatch(getAllTodos(todosArray));
        });
    }, []);


    const handleEdit = (id, title) => {
        updateDoc(doc(db, "todos", id), {title: title}).then(r => dispatch(updateItemInList({item: title, index: id})));
    };

    const handleDelete = async (id) => {
        deleteDoc(doc(db, "todos", id)).then(docRef => dispatch(removeItemInList(id)));
    };

    return (
        <div className="App">
            <div>
                <Heading/>
            </div>
            <div>
                <AddTodo/>
            </div>
            <div className="todo_container">
                {todoList.length > 0 && todoList.map((item, index) => {
                        console.log(item, " Todo ", index);
                        return (
                            <Todo
                                key={item.id}
                                todo={item}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default App;

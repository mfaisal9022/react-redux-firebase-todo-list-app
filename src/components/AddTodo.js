import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addItemInList} from "../redux/reducer/todo-reducer";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (title !== "") {
            addDoc(collection(db, "todos"), {
                title
            }).then(docRef => dispatch(addItemInList({id: docRef.id, title})));

            setTitle("");
        }
    };

    return (<form onSubmit={handleSubmit}>
        <div className="input_container">
            <input
                type="text"
                placeholder="Enter todo..."
                value={title}
                maxLength="16"
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="btn_container">
            <button>Add</button>
        </div>
    </form>);
}

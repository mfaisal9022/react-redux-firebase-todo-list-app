import React,{useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";


export default function Todo({todo, handleDelete, handleEdit}) {
    const [newTitle, setNewTitle] = useState(todo.title);
    const [editable,setEditable] = useState(true);

    const handleChange = (e) => {
        e.preventDefault();
        setNewTitle(e.target.value);
    };

    return (
        <div className="todo">
            <div>
                <input
                    type="text"
                    value={newTitle}
                    className="list"
                    onChange={handleChange}
                    readOnly={editable}
                />
                {
                    !editable &&
                    <button
                        onClick={() => {
                            handleEdit(todo.id, newTitle);
                            setEditable(!editable);
                        }}>
                        <SaveIcon id="i" />
                    </button>
                }
            </div>

            <div>
                <button
                    className="button-edit"
                    onClick={() => setEditable(!editable)}>
                    <EditIcon id="i" />
                </button>

                <button className="button-delete" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon id="i" />
                </button>
            </div>
        </div>
    );
}

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const TodoInput = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else if (e.target.name === "content") setContent(e.target.value);
    else {
        console.error("존재하지 않는 상태값입니다.");
    }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
        id: Date.now(),
        title,
        content,
        isDone: false,
    };

    dispatch(addTodo(newTodo));
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="제목을 입력해주세요"
            required
            />
            <input
            type="text"
            name="content"
            onChange={handleChange}
            placeholder="내용을 입력해주세요"
            required
            />
            <button type="submit">추가</button>
        </div>
        </form>
    </>
    );
};

export default TodoInput;
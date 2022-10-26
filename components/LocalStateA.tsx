import React, { ChangeEvent, FormEvent, useState, VFC } from "react";
import { todoVar } from "../cache"
import { useReactiveVar } from "@apollo/client";
import Link from "next/link";

export const LocalStateA: VFC = () => {
    const [input, setInput] = useState("")
    const todos = useReactiveVar(todoVar)

    const handleSbumit = (e: FormEvent<HTMLFormElement>) => { // e formのイベントオブジェクトの型を定義する
        e.preventDefault() // デフォルトのイベントリロード禁止
        todoVar([...todoVar(), { title: input }]) //スプレットで現在のtodoBarを展開後、新しいオブジェクトをにtitleという属性を持たせて末尾に追加
        setInput("")// 初期化
    }

    return (
        <>
            <p>makeVar</p>
            {todos?.map((task, index) => (
                <p className="mb-3 y-1" key={index}>
                    {task.title}
                </p>
            ))}
            <form className="flex flex-col justify-center item-center" onSubmit={handleSbumit}>
                <input
                    className="mb-3 px-3 py-2 border border-gray-300"
                    placeholder="New Task" value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setInput(e.target.value)
                    }} />
                <button
                    className="disabled:opacity-40 mb-3 py-1 px-3 text-white bg-indiogo-600 hover:bg-indigo-700 rounded-2x1 focus:outline-none"
                    disabled={!input} type="submit">Add new State</button> {/*inputが空なら(false)disabled*/}
            </form>
            <Link href="/local-state-b">
                <a>Next</a>
            </Link>
        </>
    )
}

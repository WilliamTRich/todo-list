const Todo = () => {
    return (
        <div className="flex flex-col m-6 p-3 border-2 border-black h-1/3 w-1/3">
            <div className="flex w-full gap-2 border-b-2 border-gray-500">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add Task"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">+</button>
            </div>
            <div>
                <ul>
                    <li>
                        Walk the dogs
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todo;
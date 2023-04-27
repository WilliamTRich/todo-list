const Todo = () => {
    return (
        <div className="flex flex-col h-40 w-80">
            <div>
                <input type="text" />
                <button>+</button>
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
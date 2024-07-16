const Board = ({task, index, taskList, setTaskList}) => {
    const handleDelete = () => {
       let removeIndex = taskList.indexOf(task);
       taskList.splice(removeIndex, 1);
       setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
    return (
        <>
        <div className=" max-w-lg rounded-xl flex flex-col items-center justify-center border text-lg pt-2 pb-4 md:px-6">
            <p>{task}</p>
            <button className="bg-red-500 text-white rounded-lg pt-3 pb-4 px-4 mt-4"
            onClick={handleDelete}>
                Delete
        
            </button>
        </div>
        </>
    )
}

export default Board;
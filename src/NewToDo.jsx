export function NewToDo ({inputValues, setInputValues, handleFormSubmit, handleAddItem}) {

    return (
        <form onSubmit={handleFormSubmit}>
            <label className='form-title'>TO DO LIST</label>
            <input
                className='form-input'
                type='text'
                placeholder='Add a task...'
                value={inputValues}
                onChange={e => setInputValues(e.target.value)}
            />
            <button className='submit-btn' onClick={handleAddItem}>
                ADD TASK
            </button>
      </form>
    )
}
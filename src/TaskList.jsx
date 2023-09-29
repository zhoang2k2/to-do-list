export function TaskList ({items, handleDeleteItem}) {
    return(
        <ul>
            {items.map((item, id) => 
                <li key={id}>
                    {item}
                    <button onClick={() => handleDeleteItem(id)} className='delete-btn'>
                        Delete
                    </button>
                </li>,
            )}
        </ul>
    )
}
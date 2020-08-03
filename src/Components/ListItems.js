import React from 'react';

function ListItems({ items, deleteItem }) {
    const listItems = items.map(element=>{
        return <div key={element.id} className="list">
                    <p>{element.name}
                        <span onClick={(e)=>deleteItem(e.target.parentElement.textContent)}>
                        <i className="fa fa-trash" aria-hidden="true"></i></span>
                    </p>
                </div>
    })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default ListItems;

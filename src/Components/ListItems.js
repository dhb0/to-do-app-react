import React from 'react';

function ListItems({ items, deleteItem, upItem, downItem, editItem, editChange }) {
    const listItems = items.map((item, index)=>{
        return <div key={index} id={index} className="list">
                    <p>
                    {item.edit ? <input onKeyDown={e=> e.key === 'Enter' && editItem(index)} onChange={(e)=>editChange(e.target.value, index)} type="text" value={item.name} /> : item.name }
                        <span>
                            <i onClick = {(e)=> editItem(index)} className="fa fa-edit"></i>
                            <i onClick = {(e)=> downItem(index)} className="fa fa-arrow-down" aria-hidden="true"></i>
                            <i onClick = {(e)=> upItem(index)} className="fa fa-arrow-up" aria-hidden="true"></i>
                            <i onClick = {(e)=> deleteItem(index)} className="fa fa-trash" aria-hidden="true"></i>
                        </span>
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

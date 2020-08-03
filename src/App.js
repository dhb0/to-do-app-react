import React, { useState } from 'react';
import ListItems from './Components/ListItems';



function App() {
	const[toDos, setToDos] = useState([]);
	const[keyword,setKeyword]= useState("");

	const inputChangeHandler = (event) => {
		setKeyword(event.target.value);
		event.preventDefault();
	}

	const submitHandler = (event) => {
		const newItem = {name:keyword, id:Date.now()};
		setToDos([...toDos, newItem]);
		setKeyword('');
		event.preventDefault();
	}

	const deleteItem = (itemName) => {
		setToDos(toDos.filter((item)=>item.name!==itemName));
	}
  return (
	<div className="App">
		<header>
			<form id="to-do-form" onSubmit={submitHandler}>
				<input onChange={inputChangeHandler} type="text" placeholder="Type text..." value={keyword} required/>
				<button type="submit">ADD</button>
			</form>
		</header>
		<ListItems items={toDos} deleteItem={deleteItem}/>
	</div>
  );
}

export default App;

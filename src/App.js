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
		// axios.post{todoItem}().success
		// .error
		setToDos([...toDos, {name:keyword, edit:false}]);


		setKeyword('');
		event.preventDefault();
	}

	const deleteItem = (x) => {
		const newTodos = [...toDos];
		newTodos.splice(x,1);
		setToDos(newTodos);
	}

	const upItem = (x) => {
		if(x===0){
			return;
		}else{
			let arrToMutate = [...toDos];
			const a = toDos[x];
			const b = toDos[x-1];
			arrToMutate[x] = b;
			arrToMutate[x-1] = a;
			setToDos(arrToMutate);
		}
	}
	const downItem = (x) => {
		if(x!==toDos.length-1){
			let arrToMutate = [...toDos];
			const a = toDos[x];
			const b = toDos[x+1];
			arrToMutate[x] = b;
			arrToMutate[x+1] = a;
			setToDos(arrToMutate);
		}else{
			return
		}
	}

	const editItem = (x) => {
		let arrToMutate = [...toDos];
		arrToMutate[x]['edit'] = !toDos[x]['edit'];
		setToDos(arrToMutate);

	}

	const editChange = (tempName, index) => {
		let arrToMutate = [...toDos];
		arrToMutate[index].name = tempName;
		setToDos(arrToMutate);
	}

	

  return (
	<div className="App">
		<header>
			<form id="to-do-form" onSubmit={submitHandler}>
				<input onChange={inputChangeHandler} type="text" placeholder="Type text..." value={keyword} required/>
				<button type="submit">ADD</button>
			</form>
		</header>
		<div id="top-items">
			<h4>{toDos.length} item added.</h4>
			<button onClick={()=>setToDos([])}>Delete All</button>
		</div>
		<ListItems items={toDos} editChange={editChange} editItem={editItem} deleteItem={deleteItem} upItem={upItem} downItem={downItem} />
	</div>
  );
}

export default App;

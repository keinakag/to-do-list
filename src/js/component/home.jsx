import React from "react";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			todo: "",
			inputValue: "",
			todoList: [
				{ title: "do the laundry", id: 0, done: false },
				{ title: "do the dishes", id: 1, done: false },
				{ title: "do my homeworks", id: 2, done: false },
				{ title: "wash the car", id: 3, done: false }
			]
		};
	}

	onAddItem() {
		if (this.state.inputValue.length > 0) {
			let lid = this.state.todoList.length - 1;
			this.setState({
				todoList: this.state.todoList.concat([
					{
						title: this.state.inputValue,
						done: false,
						id: lid + 1
					}
				])
			});
		} else alert("Type Something");
		this.state.value("");
	}

	onDeleteItem(i) {
		this.setState({
			todoList: this.state.todoList.filter(item => item.id !== i)
		});
	}

	render() {
		let newArray = this.state.todoList.map(item => {
			return (
				<li key={item.id}>
					{item.title}
					<i
						onClick={() => this.onDeleteItem(item.id)}
						className="fas fa-times"
					/>
				</li>
			);
		});

		return (
			<div className="d-flex justify-content-center">
				<div className="todoList">
					<h1 className="text-center">todos</h1>
					<input
						placeholder="new todo"
						name="taskInput"
						type="text"
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						value={this.state.inputValue}
					/>

					<ul>{newArray}</ul>
					<button onClick={e => this.onAddItem()}>press me</button>
					<p>{this.state.todoList.length} item left</p>
				</div>
			</div>
		);
	}
}

import React from "react"
import Box from './components/box'
import PlayerSelection from './components/PlayerSelection'
class App extends React.Component{
	constructor(props)
	{
		super(props)
		this.state={
			fillState:Array(9).fill(null),
			currentPlayer:null

		}
		this.handleClick=this.handleClick.bind(this);
		this.selectPlayer=this.selectPlayer.bind(this);
	}
	selectPlayer(state)
	{
		console.log(state);
		this.setState({
		currentPlayer:state
		})
	}
	handleClick(index)
	{
		console.log(index);
		console.log(this.state.winner);
		
		if(this.state.fillState[index]===null)
		{
		
		const newPlayer=this.state.currentPlayer=="X"? "O":"X"
		const newfillstate=this.state.fillState;
		newfillstate[index]=this.state.currentPlayer;
			this.setState({
				fillState:newfillstate,	
			currentPlayer:newPlayer

		})
			this.checkWin();
		}
	}
	checkWin()
	{
	var winningPermutation=[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]]
	this.findWinner(winningPermutation)
	}

	findWinner=(array) =>
	{
	for(let count=0;count<array.length;count++)
	{
	const [a,b,c]=array[count]
	if(this.state.fillState[a] && this.state.fillState[a]==this.state.fillState[b] && this.state.fillState[a]==this.state.fillState[c])	
	{
		
		alert(this.state.fillState[a]);
	}
	}

}

	render()
	{
		//console.log(this.state.currentPlayer)
		return(
		<div className="container"> 
		<button onClick={() => this.selectPlayer("X")}>X</button>
		<button onClick={() => this.selectPlayer("O")}>O</button>
		<div className="row">
		<Box index="1" state={this.state.fillState[0]} clickBehavior={this.handleClick}/><Box index="2" clickBehavior={this.handleClick} state={this.state.fillState[1]}/><Box index="3" state={this.state.fillState[2]} clickBehavior={this.handleClick}/>
		</div>
		<div className="row">
		<Box index="4" state={this.state.fillState[3]} clickBehavior={this.handleClick}/><Box index="5" state={this.state.fillState[4]} clickBehavior={this.handleClick}/><Box index="6" state={this.state.fillState[5]} clickBehavior={this.handleClick}/>
		</div>
		<div className="row">
		<Box index="7" state={this.state.fillState[6]} clickBehavior={this.handleClick}/><Box index="8" state={this.state.fillState[7]} clickBehavior={this.handleClick}/><Box index="9" state={this.state.fillState[8]} clickBehavior={this.handleClick}/>
		</div>
		</div>
		)
	}
}
export default App
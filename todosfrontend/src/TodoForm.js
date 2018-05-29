import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: 'zz'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }
    handleSubmit(){
        this.props.addTodo(this.state.inputValue);
    }
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange} 
                />     
                <button
                    onClick={this.handleSubmit} 
                    >Add todo
                </button>   
            </div>
        );
    }
}
export default TodoForm;
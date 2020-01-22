import React from 'react';
import {Button, Input, Icon} from 'semantic-ui-react';
import '../stylesheets/AddTodo.css'


export default class AddTodo extends React.Component {

    state = {
        text: ''
    };
    static id=1;


    componentDidMount() {

    }

    onInputChange = (e, d) => {
            this.setState({text: d.value})


    };
    onAddTodoClicked = () => {
        let text=this.state.text;
        if (text ===""){
            return
        }

        let todo = {
            id: this.props.todoListId,
            text: text,
            completed: false,
        };
        this.setState({text: ''});
        this.props.addTodo(todo);

    };

    onKeyPress = (e) => {
        if (e.which == 13)
            this.onAddTodoClicked();
    };

    render() {
        return (
            <div className={'addTodoContainer'}>
                <Input value={this.state.text} placeholder='What needs to be done ?' onChange={this.onInputChange}
                       onKeyPress={this.onKeyPress}/>
                <Button primary icon labelPosition='right' onClick={this.onAddTodoClicked}> ADD <Icon color='teal'
                                                                                                      name='add'/></Button>
            </div>
        )
    }

}
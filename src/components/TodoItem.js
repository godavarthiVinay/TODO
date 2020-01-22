import React from 'react';
import {Checkbox, Input, Icon} from 'semantic-ui-react';

class TotoItem extends React.Component {
    state = {
        textInput: '',
        id: 0,
        inputDisabled: true,
        completed: false,
        iconSize: 'large',
        toggleHoverState: false,
    };

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        this.setState({
            textInput: this.props.todoData.text,
            id: this.props.todoData.id,
            completed: this.props.todoData.completed
        });

    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    onResize = () => {
        if (window.innerWidth <= 600) {
            this.setState({iconSize: 'small'})
        }
        else {
            this.setState({iconSize: 'large'})
        }
    };

    onCheckBoxClicked = (event, data) => {
        let completed = this.state.completed;
        this.setState({completed: !completed});
        this.props.onCompleteTodo(parseInt(event.target.id))

    };
    onInputchange = (event, data) => {
        this.setState({textInput: data.value});
    };
    onDoubleClickedChange = (event, data) => {
        this.setState({inputDisabled: false})

    };
    onKeyPress = (e) => {
        if (e.which == 13)
            this.onEdit()
    };
    onEdit = () => {

        let editTodo = {
            id: this.state.id,
            text: this.state.textInput,
            completed: this.state.completed,
        };
        let inputDisabled = this.state.inputDisabled;
        this.setState({inputDisabled: !inputDisabled});
        this.props.onEdit(editTodo)

    };

    handleMouseHover = () => {
        let toggleHoverState = this.state.toggleHoverState;
        this.setState({toggleHoverState: !toggleHoverState})

    };
    handleRemoveItem = (event,data) => {
        debugger;
        this.props.removeItem(data.id);
    };


    render() {
        return (
            <div>
                <div className={'listItem'}>
                    <input type='checkbox' id={this.state.id} onChange={this.onCheckBoxClicked}
                           checked={this.state.completed}/>
                    {
                        this.state.inputDisabled ?
                            <div onDoubleClick={this.onDoubleClickedChange} className={'divItem'}>
                                {this.state.textInput}

                            </div>
                            :
                            <Input
                                id={this.state.id}
                                onChange={this.onInputchange}
                                value={this.state.textInput}
                                onKeyPress={this.onKeyPress}/>
                    }
                    <div className={'relative-set'}>
                        <div className={'close-icon'}>
                            <Icon id={this.state.id} name='close' color='red' size={this.state.iconSize}
                                  onClick={this.handleRemoveItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TotoItem;
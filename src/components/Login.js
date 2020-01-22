import React from 'react';
import {Button, Card, Input} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {loginCheck} from '../actions/actions';
import '../App.css'
class Login extends React.Component {


    componentDidMount() {

    }

    componentWillReceiveProps(props) {
        if (props && props.loginStatus ==true) {
            props.history.push("/home")
        } else {
            props.history.push("/")
        }
    };

    onLoginClicked = (event, data) => {

        var username = this.refs.loginUsername.inputRef.current.value;
        var password = this.refs.loginPassword.inputRef.current.value;

        if (username.length > 0 && password.length > 0) {
            this.props.auth(username, password)
        }

    };


    render() {
        return (
                <div className={'loginContainer'}>
                    <div className='login-box'>
                        <Input type="text" placeholder="username" ref={'loginUsername'}/>
                        <Input  type="password" placeholder="password" ref={'loginPassword'}/>
                        <Button inverted color='green' onClick={this.onLoginClicked}>Login</Button>
                    </div>
                </div>


        )
    }

}

const mapStateToProps = (state, ownprops) => {
    return {
        loginStatus: state.login.loginStatus,
        loginUsername: state.login.username,
    }
};
const mapDispatchToProps = (dispatch, ownprops) => ({
    auth: (username, password) => dispatch(loginCheck(username, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Card, Input,Icon} from 'semantic-ui-react';
import {logout} from "../actions/actions";
import '../App.css'

class Header extends React.Component{
    state={
        logoutIconSize:'large'
    };
    componentDidMount(){
        window.addEventListener("resize", this.onResize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    onResize =()=>{
        if (window.innerWidth <= 600){
            this.setState({logoutIconSize:'small'})
        }
        else {
            this.setState({logoutIconSize:'large'})
        }
    };
    onLogoutClicked =()=>{
      this.props.history.push("/");
      this.props.logout();

    };
    render(){
        return(
                <div className={'mainHeader'}>

                    <div className={'leftHeader'}>
                      <span>Menu</span>
                    </div>
                    <div className={'centerHeader'}>
                        <span>TODO</span>
                    </div>
                    <div className={'rightHeader'} onClick={this.onLogoutClicked} title={'logout'}>
                        <Icon className={'showMouseOverText'} name='log out' color='red' size={this.state.logoutIconSize}/>
                        <span>logout</span>
                    </div>
                </div>

        )
    }
}

const mapDispatchToProps=(dispatch,ownprops)=>({
   logout :() =>dispatch(logout(false))
});

export default withRouter(connect(null,mapDispatchToProps)(Header));
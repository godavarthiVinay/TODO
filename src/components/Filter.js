import React from 'react';
import {Checkbox,Input} from 'semantic-ui-react';
import '../stylesheets/Filter.css'
import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../constants/ActionTypes'

class Filter extends React.Component{
    state={
        filter:'',

    };
    componentDidMount(){
        this.setState({filter:this.props.visibilityFilter});
    }
    componentWillUnmount(){

    }
    handleFilterClicked=(event,data)=>{
      if(event.target.id === SHOW_ALL){
          this.setState({filter:SHOW_ALL});
       this.props.togglefilter(SHOW_ALL);

      }
      else if(event.target.id === SHOW_ACTIVE){
          this.setState({filter:SHOW_ACTIVE});
          this.props.togglefilter(SHOW_ACTIVE);
      }
      else if(event.target.id ===SHOW_COMPLETED){
          this.setState({filter:SHOW_COMPLETED});
          this.props.togglefilter(SHOW_COMPLETED);
      }
    };

    render(){
        return(
            <div className={'filter-container'}>
                <div className={'list-count'}>
                    {this.props.itemsCount}{" items left"}
                </div>

                <div className={'filterItems'}>
                    <div className={this.state.filter===SHOW_ALL?'active-filter':'in-active-filter'}
                         id={SHOW_ALL}
                         onClick={this.handleFilterClicked}>
                        ALL
                    </div >
                    <div className={this.state.filter===SHOW_ACTIVE?'active-filter':'in-active-filter'}
                         id={SHOW_ACTIVE}
                         onClick={this.handleFilterClicked}>
                        Active
                    </div>
                    <div className={this.state.filter===SHOW_COMPLETED?'active-filter':'in-active-filter'}
                         id={SHOW_COMPLETED}
                         onClick={this.handleFilterClicked}>
                        Completed
                    </div>


                </div>

            </div>
        )
    }

}
export default Filter;
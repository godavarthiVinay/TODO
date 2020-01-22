import {connect} from 'react-redux'
import {toggleFilter} from '../actions/actions';
import Filter from '../components/Filter';
const mapStateToProps=(state,ownProps)=>({
    itemsCount:state.todoList.length,
    visibilityFilter:state.visibilityFilter,
});

const mapDispatchToProps =(dispatch,ownProps)=>({
    togglefilter: (filter) =>dispatch(toggleFilter(filter))

});



export default connect(mapStateToProps,mapDispatchToProps)(Filter);
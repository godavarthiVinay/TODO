import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
class Home extends React.Component{

    render(){
        return(
            <div className={'homeContainer'}>
               <Header/>
                <div style={{padding:'10px'}}></div>
                {/*<hr style={{marginLeft:'30px',marginRight:'30px'}}/>*/}
               <MainContainer/>
            </div>
        )
    }
}

export default Home;
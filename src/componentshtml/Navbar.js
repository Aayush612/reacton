import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component{
    state={lists:['Ayush','Tom']};

    renderList(){
        let i=0,lineComponent=[];
        for(i=0;i<this.state.lists.length;i++){
            lineComponent.push(<li id="nav-list" key={i} onClick= {()=>(this.log('clicked'))}>Name: {this.state.lists[i]}</li>);
        }
        return(lineComponent)
    }
    log(str){
        console.log(str)
    }
    render(){

        return(
            <div id='navbar'>
                <ul id='nav-unordered-list'>
                 {this.renderList()}
                </ul>
            </div>
        )
    }
}
//this.state.lists.map(item => (<li id='nav-list'>{item}</li>))

export default Navbar;

//when adding arrow onclick starts clicked begins working
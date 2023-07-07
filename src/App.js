import { Component } from 'react';
import CardList from './component/card-list/cardList';
import SearchBox from './component/search-box/searchbox';
import './App.css';

class App extends Component {

  constructor(){
    super();
   this.state = {
     userContainer : [],
     valueOfTextboxOnChange: ""
  }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>{
      this.setState(()=>{
        return {userContainer: users}
      })
    })
  }

  OnSearchChange = (event)=>{
    const valueOfTextboxOnChange = event.target.value.toLowerCase();
    this.setState(()=>{
      return {valueOfTextboxOnChange}
    })
}

 render(){
  const {userContainer, valueOfTextboxOnChange} = this.state
  const {OnSearchChange} = this;

  const newFilteredMonster =userContainer.filter((filteredUsers)=>{
    return filteredUsers.name.toLowerCase().includes(valueOfTextboxOnChange);
  });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Hunt</h1>
        <SearchBox onsearchsearch = {OnSearchChange} />
        <CardList monsters = {newFilteredMonster} />
      
      </div>
    );
  }
 
}

export default App;

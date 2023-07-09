import CardList from './component/card-list/cardList';
import SearchBox from './component/search-box/searchbox';
import './App.css';
import { useEffect, useState } from 'react';

const App =() => { 

  const [valueOfTextboxOnChange, setvalueOfTextboxOnChange] = useState("");
  const [userContainer, setuserContainer] = useState([]);
  const [filteredMosters, setfilteredMosters] = useState(userContainer)
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>{
      setuserContainer(users)
    })
  }, []);

  useEffect(()=>{
    const newFilteredMonster = userContainer.filter((filteredUsers)=>{
      return filteredUsers.name.toLowerCase().includes(valueOfTextboxOnChange);
    });

    setfilteredMosters(newFilteredMonster)
  }, [userContainer, valueOfTextboxOnChange])

    const OnSearchChange = (event)=>{
        const valueOfTextboxOnChange = event.target.value.toLowerCase();
          setvalueOfTextboxOnChange(valueOfTextboxOnChange)
          
    }
 
  return(
   <div>
    <h1 className='app-title'>Monsters Hunt</h1>
    <SearchBox onsearchsearch = {OnSearchChange} />
    <CardList monsters = {filteredMosters} />
  </div>
)

}

export default App;

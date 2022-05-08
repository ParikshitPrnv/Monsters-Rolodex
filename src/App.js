import {Component} from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
      this.setState(()=>{
        return {monsters:users}
      })
      // You can add a callback after this to console.log
      //,
      // ()=>{
      //   console.log(this.state)
      // }
    })
  }

  onSearchChange = (event)=>{
    // console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }

  render()
  {

    const {monsters, searchField} = this.state;
    const {onSearchChange}=this;
    const filteredMonsters =  monsters.filter(monster=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
     })


  return (
    
    <div className="App">
      
      <header className="App-header">
        <SearchBox className="monster-search-box" type="search" placeholder="search monsters" changeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </header>

    </div>
  );
}
}

export default App;

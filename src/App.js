/* Functional Implementation of the project starts here*/
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';


const App = ()=>{

  // You can change states in functional implementations using hooks
  
  const [searchField, setSearchField] = useState('');   // [value, setValue]
  // console.log(searchField) // Logged as a string
  // console.log({searchField}) // Logged as an Object
  
  const [monsters, setMonsters] =useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
      }


      //  Simply adding a fetch function here will start infinite re-rendering
      // To avoid infinite re-rendering use side effects

      // Empty array is added at the end to make sure the effect runs only once
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>setMonsters(users))
      },[])

      //  Another sideeffect to trigger the rendering when searchfield is changed
      useEffect(()=>{
        const newFilteredMonsters =  monsters.filter(monster=>{
                return monster.name.toLocaleLowerCase().includes(searchField);
               })
        setFilteredMonsters(newFilteredMonsters)
      },[monsters, searchField])

  return(
    <div className="App">
           <h1 className='app-title'>Monsters rolodex</h1>
             <SearchBox className="monster-search-box" type="search" placeholder="search monsters" changeHandler={onSearchChange} />
             <CardList monsters={filteredMonsters}/>
         </div>
  )
  
}



/*  Class implementation starts here */

// import {Component} from 'react';
// import CardList from './components/card-list/card-list.component'
// import SearchBox from './components/search-box/search-box.component'
// import './App.css';

// class App extends Component{
  
//   constructor(){
//     super();
//     this.state={
//       monsters:[],
//       searchField:''
//     }
//   }

//   componentDidMount()
//   {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then(users=>{
//       this.setState(()=>{
//         return {monsters:users}
//       })
//       // You can add a callback after this to console.log
//       //,
//       // ()=>{
//       //   console.log(this.state)
//       // }
//     })
//   }

//   onSearchChange = (event)=>{
//     // console.log(event.target.value)
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchField};
//     })
//   }

//   render()
//   {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange}=this;
//     const filteredMonsters =  monsters.filter(monster=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      })


//   return (
    
//     <div className="App">
//       <h1 className='app-title'>Monsters rolodex</h1>
//         <SearchBox className="monster-search-box" type="search" placeholder="search monsters" changeHandler={onSearchChange} />
//         <CardList monsters={filteredMonsters}/>
//     </div>
//   );
// }
// }

export default App;

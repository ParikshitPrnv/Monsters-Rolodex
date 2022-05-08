import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component{
    render(){
        return (
        <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.changeHandler} className = {`search-box ${this.props.className}`}/>
        )
    }
}

export default SearchBox;
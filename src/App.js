import React, {Component} from 'react'
import './App.css'

import MovieCard from './components/MovieCard'
import MovieInfo from './components/MovieInfo'
import Poster from './components/Poster'


var obj;
/* FETCHHHHHH
fetch("https://www.omdbapi.com/?t=Sweeney&apikey=daad0d7")
       .then(response => {return response.json()})
       .then(data => { obj = data})

       
function App() {
  return (
    <div className="App">
    </div>
    );
}
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      title1: "",
      poster1: "",
      plot1: "",
      title2: "",
      poster2: "",
      plot2: "",
      title3: "",
      poster3: "",
      plot3: "",
      title4: "",
      poster4: "",
      plot4: ""
    };
  }
  componentDidMount() {
    Promise.all(
      [
        fetch("https://www.omdbapi.com/?t=Sweeney&apikey=daad0d7"), 
        fetch("https://www.omdbapi.com/?t=Detective+Pikachu&apikey=daad0d7"), 
        fetch("https://www.omdbapi.com/?t=Finding+Dory&apikey=daad0d7"), 
        fetch("https://www.omdbapi.com/?t=Finding+Nemo&apikey=daad0d7"), 
        fetch("https://www.omdbapi.com/?t=Moana&apikey=daad0d7")
      ])
    .then(
      ([response1, response2, response3, response4, response5]) => {
        return Promise.all([response1.json(), response2.json(), response3.json(), response4.json(), response5.json()])})
    .then(([data1, data2, data3, data4, data5]) => this.setState(
      {
        title1: data1["Title"], poster1: data1["Poster"], plot1: data1["Plot"], 
        title2: data2["Title"], poster2: data2["Poster"], plot2: data2["Plot"],
        title3: data3["Title"], poster3: data3["Poster"], plot3: data3["Plot"],
        title4: data4["Title"], poster4: data4["Poster"], plot4: data4["Plot"],
        title5: data5["Title"], poster5: data5["Poster"], plot5: data5["Plot"],
      })
    )}
    
    
   

  render() 
  {
    const movie = this.state;
  
  return (
    <div className="App">
      <MovieCard imgsrc={this.state.poster1} title={this.state.title1} plot={this.state.plot1}/>
      <MovieCard imgsrc={this.state.poster2} title={this.state.title2} plot={this.state.plot2}/>
      <MovieCard imgsrc={this.state.poster3} title={this.state.title3} plot={this.state.plot3}/>
      <MovieCard imgsrc={this.state.poster4} title={this.state.title4} plot={this.state.plot4}/>
      <MovieCard imgsrc={this.state.poster5} title={this.state.title5} plot={this.state.plot5}/>
    </div>
    );
}
}



export default App;

/*
this.setState({title2: data["Title"], poster2: data["Poster"], plot2: data["Plot"]})
 fetch("https://www.omdbapi.com/?t=Finding&apikey=daad0d7")
       .then(response => {return response.json()})
       .then(data => console.log(data))
      }
<MovieCard imgsrc={this.state.poster2} title={this.state.title2} plot={this.state.plot2}/>
fetch("https://www.omdbapi.com/?t=Sweeney&apikey=daad0d7")
       .then(response => {return response.json()})
       .then(data => this.setState({title: data["Title"], poster: data["Poster"], plot: data["Plot"]}));
      }
*/
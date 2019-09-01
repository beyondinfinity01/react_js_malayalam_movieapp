import React, { Component } from 'react';

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      movieName: ''
    }
  }

  saveMovieName = (e) => {
    this.setState({ movieName: e.target.value })
  }

  saveMovie = (e) => {
    e.preventDefault();
    const movie = {
      name: this.state.movieName,
      id: +new Date()
    }
    this.setState({ movieList: this.state.movieList.concat(movie), movieName: '' });

  }
  render() {
    return (
      <div className="row container">
        <form onSubmit={(e) => this.saveMovie(e)}>
          <h4>{this.state.movieName}</h4>
          <div className="row">
            <div className="col s9">
              <input value={this.state.movieName} onChange={(e) => { this.saveMovieName(e) }} type="text" />
            </div>
            <div className="col s3">
              <button className="btn" type="submit">Save</button>
            </div>

          </div>
        </form>
        <ul className="collection">
          {this.state.movieList.map((item) => {
            return <li className="collection-item" key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default MovieApp;
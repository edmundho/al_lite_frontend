import React, { Component } from 'react';

class HomePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      min: 0,
      max: 1/0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit () {
    this.props.receiveCars(1, this.state.min, this.state.max)
      .then(response => {
        console.table(response.cars.records);
        this.props.history.push('/listings/');
      });
  }

  update (property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render () {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="min price" 
            onChange={this.update('min')}/>
          <input 
            type="text" 
            placeholder="max price" 
            onChange={this.update('max')}/>
          <input type="submit" value="Search!"/>
        </form>
      </div>
    );
  }
}

export default HomePage;
import React from 'react';

export default class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        weight: '',
        sets: '',
        reps: '',
        rest: '',
        notes: ''
    };
  };

  handleOnChange = (e) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <p>My Id is: {this.props.id}</p>
        <label>Name
          <input
            type="text"
            placeholder="Namn på Exercise"
            name="name"
            onChange={this.handleOnChange}
            value={this.state.name}
            />
        </label>

        <label>Weight
          <input
            type="text"
            placeholder="Vikt"
            name="weight"
            onChange={this.handleOnChange}
            value={this.state.weight}
            />
        </label>

        <label>Sets
          <input
            type="text"
            placeholder="Sets"
            name="sets"
            onChange={this.handleOnChange}
            value={this.state.sets}
            />
          </label>

        <label>Reps
          <input
            type="text"
            placeholder="Reps"
            name="reps"
            onChange={this.handleOnChange}
            value={this.state.reps}
            />
        </label>

        <label>Rest
          <input
            type="text"
            placeholder="Vila"
            name="rest"
            onChange={this.handleOnChange}
            value={this.state.rest}
            />
        </label>

        <label>Notes
          <textarea
            placeholder="Anteckningar"
            name="notes"
            onChange={this.handleOnChange}
            value={this.state.notes}
            ></textarea>
        </label>

        <input
          type="button"
          onClick={() => this.props.onClick(this.state)}
          value="Spara övning"
          />
      </div>
    );
  }
}

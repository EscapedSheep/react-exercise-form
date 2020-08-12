import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    readTerms: false,
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value
    })
  }

  handleDescChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleCheckBox = (event) => {
    this.setState({
      readTerms: event.target.checked
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name,
                this.state.gender,
                this.state.description,
                this.state.readTerms)
  }

  nameDiv = () => (
    <div>
      <label htmlFor="name">Name
        <input 
          className="inputBox"
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleNameChange}></input>
      </label>
  </div>
  )

  genderDiv = () => (
    <div>
      <label htmlFor="gender">Gender
        <select name="gender" value={this.state.gender} onChange={this.handleGenderChange} className="inputBox">
          <option value="Male">Male</option>
          <option value="FeMale">FeMale</option>
          </select>
      </label>
    </div>
  )

  descriptionDiv = () => (
    <div>
      <label htmlFor="description">Description
        <textarea 
          className="inputBox"
          rows="3" 
          cols="20" 
          name="description" 
          placeholder="Description about yourself"
          value={this.state.description} 
          onChange={this.handleDescChange}>
        </textarea>
      </label>
    </div>
  )

  termsDiv = () => (
    <div>
      <label htmlFor="terms" className="termsLabel">
        <input 
          type="checkbox" 
          name="terms" 
          checked={this.state.readTerms} 
          onChange={this.handleCheckBox}>
        </input>
        I have read the terms of conduct
      </label>
    </div>
  )

  btnDiv = () => (
    <div className="btn">
      <button 
        className="btn"
        type="submit"
        disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.readTerms}>
          Submit
      </button>
    </div>
  )

  render() {
    return (
      <div className="myProfile">
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <h1>My Profile</h1>
          </div>
          <this.nameDiv></this.nameDiv>
          <this.genderDiv></this.genderDiv>
          <this.descriptionDiv></this.descriptionDiv>
          <this.termsDiv></this.termsDiv>
          <this.btnDiv></this.btnDiv>
        </form>
      </div>
    );
  }
}

export default MyProfile;

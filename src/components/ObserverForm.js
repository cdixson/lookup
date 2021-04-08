import React from "react";

class ObserverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        fname: '',
        lname: '',
        email: '',
        company: '',
        passwd: ''
      };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  fetchJSON() {
	let id = document.getElementById("id").value;
	if (id.length === 3) {
			fetch('https://dixsondevelopment.com/data.json')
				.then(
					function(response) {
					if (response.status !== 200) {
						console.log('Looks like there was a problem. Status Code: ' + response.status);
						return;
					}
				
					response.json().then(function(data) {
						for (var i = 0; i < data.length; i++) {
							if ( data[i].ID === id) {
								document.getElementById('fname').value 	= data[i].FNAME;
								document.getElementById('lname').value 	= data[i].LNAME;
								document.getElementById('email').value 	= data[i].EMAIL;
								document.getElementById('company').value = data[i].COMPANY;
							}
						}
					});
				}
			)
				.catch(function(err) {
					console.log('Fetch Error: ', err);
				});
	}
  }

  render() {
    return (
      <div className="container">
			<form autoComplete="off" id="add_obs_form">
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">ID</span>
				<input type="text" className="form-control" id="id" autoComplete="off" name="id" placeholder="e.g., z18" required="required" maxLength="3"  onChange={this.fetchJSON} />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon4">Password</span>
				<input type="text" className="form-control" id="passwd" autoComplete="no" name="passwd" required="required" minLength="5" />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon2">First name</span>
				<input type="text" className="form-control" id="fname" autoComplete="no" name="fname" required="required" disabled />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon3">Last name</span>
				<input type="text" className="form-control" id="lname" autoComplete="no" name="lname" required="required" disabled />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon3">Email</span>
				<input type="email" className="form-control" id="email" autoComplete="no" name="email" required="required" disabled />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon5">Company</span>
				<input type="text" className="form-control" id="company" autoComplete="no" name="company" required="required" disabled />
			</div>
			<button type="submit" className="btn btn-secondary" value="submit" name="submit">Submit</button>
			</form>
      </div>
    );
  }
}

export default ObserverForm;
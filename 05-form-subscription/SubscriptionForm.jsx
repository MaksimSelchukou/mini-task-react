import React from 'react';

class SubscriptionForm extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms: false,
    };

    handleSend = (event) => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            this.validateEmail()
            return;
        }
        if (!this.state.isAgreeWithTerms) {
            this.validateCheckBox()
            return;
        }
        this.setState({
            email: "",
            isAgreeWithTerms: false,
        })
        alert('senks!')
    }


    handleChangeCheckBox = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }

    handleChangeEmail = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validateEmail = () => {
        alert("You have entered an invalid email address!")
    }

    validateCheckBox = () => {
        alert('No correct CheckBox')
    }

    render() {
        const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                // onBlur={this.validateEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleChangeCheckBox}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSend}>Send</button>
            </div>
        );
    }
}

export { SubscriptionForm };
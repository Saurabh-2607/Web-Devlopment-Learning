import { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/api/signup', {
            email: email,
            username: username,
            password: password
        })
        .then(function(response) {
            console.log(response.data);
            alert("Registration successful!")
        })
        .catch(function(error) {
            console.log(error);
            alert("Registration failed!")
        });
    }

    // Handle input changes
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    
    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '10px', width: '300px', display: 'flex', flexDirection: 'column' }}> 
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleEmailChange} />
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={handleUsernameChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required onChange={handlePasswordChange} />
                </div>
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
}

export default Signup;
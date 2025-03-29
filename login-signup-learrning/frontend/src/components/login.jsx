import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const API_URL = 'http://localhost:5000/api';

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        
        console.log('Attempting login with:', { username });
        
        axios.post(`${API_URL}/login`, {
            username: username,
            password: password
        })
        .then(function(response) {
            console.log('Login response:', response.data);
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            
            alert("Login successful!");
            // Redirect if needed
        })
        .catch(function(error) {
            console.error('Login error details:', error);
            
            if (error.response) {
                // The server responded with an error status
                console.log('Server error data:', error.response.data);
                console.log('Server error status:', error.response.status);
                
                if (error.response.status === 401) {
                    setErrorMessage('Invalid username or password. Please try again.');
                } else {
                    setErrorMessage(error.response.data.message || 'An error occurred during login');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received:', error.request);
                setErrorMessage('Server not responding. Please try again later.');
            } else {
                // Something happened in setting up the request
                setErrorMessage('Error setting up request: ' + error.message);
            }
        })
        .finally(function() {
            setIsLoading(false);
        });
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            {errorMessage && (
                <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '10px', width: '300px', display: 'flex', flexDirection: 'column' }}> 
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        required 
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={isLoading} 
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
    );
}

export default Login;
import axios from "axios";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export const Register = (props) => {

    const [id,setId] = useState();
    const [uname,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [passwd,setPassword] = useState("");
    const [isFormValidated, setIsFormValidated] = useState(false);

    async function save(event)
    {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8082/safar/user/register",
          {
            username: uname,
            email : email,
            password : passwd
          });
          setId();
          setUserName("");
          setEmail("");
          setPassword("");
          alert("Account Created Successfully");
        }
        catch(err) {
            alert("Registration Failed !");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) {
          setIsFormValidated(true);
          save(event);
        } else {
          setIsFormValidated(false);
        }
      };

    return (
        <div className="auth-form-container">
            <h2>Create New Account</h2>
        <form className={`register-form ${isFormValidated ? "was-validated" : ""}`} onSubmit={handleFormSubmit}>
            <div className="form-group">
                <FaUser/>
                <input value={uname} type="username" name="username" id="username" placeholder="Username" required
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
                />
            </div>
            
            <div className="form-group">
                <FaEnvelope/>
                <input
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                required
                />
            </div>
            
            <div className="form-group">
                <FaLock/>
                <input value={passwd} type="password" title="Password length should be between 6 to 12 characters" name="password" id="password" placeholder="Password" pattern=".{6,12}" required
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                />
            </div>
            
            <div className="create">
                <button type="submit" onClick={save}>Create Account</button>
            </div>    
        </form>
        <button className="link" onClick={() => props.onFormSwitch('/login')}>Already have an account? Login</button>
        </div>
    )
}

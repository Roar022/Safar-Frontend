import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import axios from "axios";

function Book() {
  const handleNameInvalid = (event) => {
    event.target.setCustomValidity("Only Alphabets Allowed.");
  };

  const handleEmailInvalid = (event) => {
    event.target.setCustomValidity("Invalid Email Address.");
  };

  const handlePhoneInvalid = (event) => {
    event.target.setCustomValidity("Invalid Phone Number ");
  };


//   ====================Backend Addition   =================
    let navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [userPhone,setUserPhone]=useState();
    const [userDestination,setUserDestination]=useState("");
    const [userCount,setUserCount]=useState(1);
    const [userName,setuserName]=useState("");
    const [userLeavingDate,setUserLeavingDate]=useState("");

    const onSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/user",
        {
            name : name,
            email : email,
            address : address,
            userPhone : userPhone,
            userDestination : userDestination,
            userCount : userCount,
            userName : userName,
            userLeavingDate : userLeavingDate
        });

        alert("User registration successfully");
        navigate("/booking");
        }catch(err){
            alert("User Registration failed");
        }
    }



  return (
    <Fragment>
      <div
        className="heading"
        style={{ background: "url(Assets/Images/beach-3.jpg)" }}
      >
        <h1>Book Now</h1>
      </div>

      <section className="booking">
        <div className="container exist-book"><h2 className="btnnb"><Link  to="/booking" style={{textDecoration : "none",color:"white"}}>View Existing Bookings</Link></h2></div>
        <h1 className="heading-title">book your trip!</h1>
        
        <form onSubmit={(e)=>onSubmit(e)} className="book-form">
          <div className="flex">
            <div className="inputBox">
              <span>Name : </span>
              <input
                type={'text'}
                placeholder="Enter Your Name"
                pattern="^[a-zA-Z\s]{2,}$"
                onInvalid={handleNameInvalid}
                value={name}
                onChange={(e)=>
                    setName(e.target.value)
                }
                required
              />
            </div>

            <div className="inputBox">
              <span>Email : </span>
              <input
                type="email"
                value={email}
                onChange={(e)=>
                    setEmail(e.target.value)
                }
                placeholder="Enter Your Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onInvalid={handleEmailInvalid}
                required
              />
            </div>

            <div className="inputBox">
              <span>Phone : </span>
              <input
                type="number"
                placeholder="Enter Your Number"
                pattern="[0-9]{10}"
                value={userPhone}
                onChange={(e)=>
                    setUserPhone(e.target.value)
                }
                onInvalid={handlePhoneInvalid}
                required
              />
            </div>

            <div className="inputBox">
              <span>Address : </span>
              <input
                type="text"
                value={address}
                onChange={(e)=>
                    setAddress(e.target.value)
                }
                placeholder="Enter Your Address"
                required
              />
            </div>

            <div className="inputBox">
              <span>Where To : </span>
              <input
                type="text"
                value={userDestination}
                onChange={(e)=>
                    setUserDestination(e.target.value)
                }
                placeholder="Place you want to visit "
                required
              />
            </div>

            <div className="inputBox">
              <span>How Many Person: </span>
              <input
                type="number"
                value={userCount}
                onChange={(e)=>
                    setUserCount(e.target.value)
                }
                min={1}
                required
              />
            </div>

            <div className="inputBox">
              <span>UserName : </span>
              <input type="text"
                required 
                value={userName}
                placeholder="Enter your login user name"
                onChange={(e)=>
                    setuserName(e.target.value)
                }    
                />
            </div>

            <div className="inputBox">
              <span>Leaving : </span>
              <input type="date" name="leaving" required 
                value={userLeavingDate}
                min={"27-06-2023"}
                onChange={(e)=>
                    setUserLeavingDate(e.target.value)
                }
              />
            </div>
          </div>

          {/* <input type="submit" value="Submit" className="btn" name="send" /> */}
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link type='submit' className='btn btn-outline-danger mx-2' style={{color:"grey"}} to="/booking">Cancel</Link>
        </form>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script.js"></script>
    </Fragment>
  );
}

export default Book;

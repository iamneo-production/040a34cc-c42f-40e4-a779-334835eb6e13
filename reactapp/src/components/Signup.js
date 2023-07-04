import React from "react";
import "./Signup.css"


const Signup = () => {
    return (
        <div className="main">
            <div className="left">
                <img className="img1" src="/img/signup.png" alt="img not found"/>
            </div>

            <div className="right">
                <form className="signup">

                    <h3 style={{paddingTop:"5px",fontSize:"25px"}}>SIGN UP</h3>

                        <div className="content">

                        <div>
                           <label for="fname">First Name</label>
                           <input type="text" id="fname" />
                        </div>
                        
                        <div>
                            <label for="mname">Middle Name(Optional)</label>
                            <input type="text" id="mname" />
                        </div>
                        
                        <div>
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" />
                        </div>
                        
                        <div>
                            <label for="mno">Mobile No</label>
                            <input type="number" id="mno" />
                        </div>
                        
                        <div>
                            <label for="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        
                        <div>
                            <label for="pass">Password</label>
                            <input type="password" id="pass" />
                        </div>
                        
                        <div>
                            <label for="cpass">Confirm Password</label>
                            <input type="password" id="cpass" />
                        </div>
                        

                    </div>
                    

                    <div className="btn">
                        <button>Sign up</button>
                        <button>Cancel</button>
                    </div>

                    
                    <div className="br">
                       <hr/>
                          <span style={{color:"grey"}}>OR</span>
                       <hr/>
                    </div>

                    <div className="fr">
                    <img style={{height:"40px",width:"40px",margin:"0",padding:"10px",cursor:"pointer"}} src="/img/google 1.png" alt=""/>
                    <span style={{color:"grey"}}>Already have an account? <a style={{color:"#5bc6ce;",textDecoration:"none"}} href="">Login</a></span>                
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
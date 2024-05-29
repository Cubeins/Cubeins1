import React from "react";

const SignIn = () => (
  <div className="signin-container">
    <h2>Sign In</h2>
    <form>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  </div>
);

export default SignIn;

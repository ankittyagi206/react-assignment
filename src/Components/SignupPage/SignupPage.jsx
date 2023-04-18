import React from "react";

const SignupPage = () => {
  return (
    <div id="signup" className="flex-row">
      <form className="signup-form" method="post">
        <div className="subform">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
        </div>

        <div className="subform">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Your Email" />
        </div>

        <div className="subform">
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" placeholder="Your Password" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

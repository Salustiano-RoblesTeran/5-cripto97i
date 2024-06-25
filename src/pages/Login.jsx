import React, { useState } from 'react'

const Login = () => {

    //! Estados para cada uno de los campos
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleChange = (event) => {
    //     // console.log(event.target.value)
    //     setEmail(event.target.value)
    // }

    //! Un solo estado para todos los campos
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormValues({
            ...formValues, [event.target.value]: event.target.value
        });
    };

  return (
    <>
  <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3>
            Sing in to <i className="fa fa-btc" aria-hidden="true"></i>
            97 Coins
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit="">
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}

              />
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValues.password}
                // onChange={(event) => {
                //     setPassword(event.target.value);
                // }}
                onChange={handleChange}

              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
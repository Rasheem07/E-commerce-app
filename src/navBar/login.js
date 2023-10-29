import React from 'react'

export default function LoginPage() {
  return (
      <div className="container-fluid h-100" style={{Width: "100vw"}}>
        <div
          className="row h-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "85vh",
          }}
        >
          <div className="col-md-4">
            <div className="card p-3" style={{ width: "32vw", height: "60vh", boxShadow: "1px 1px 10px rgba(0,0,0,12)"  }}>
              <h2 className="my-3 text-center">Login user</h2>
              <form style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div className="form-floating mb-4 mx-auto" style={{width: "90%"}}>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mx-auto" style={{width: "90%"}}>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                <div className="input-group my-2">
                <input type="checkbox" className="mx-2" name="forgot password" id="check" />
                <label htmlFor="check">show password</label>
                </div>
                </div>
                <button className="btn btn-primary mx-auto my-3" style={{width: "30%", padding:"1.5vh 1vw"}}>login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

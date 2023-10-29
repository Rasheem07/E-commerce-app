import React from 'react'

export default function Signup() {
  return (
      <div className="container-fluid h-100">
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
            <div className="card p-3" style={{ width: "32vw", height: "auto", boxShadow: "1px 1px 10px rgba(0,0,0,12)" }}>
              <h2 className="my-3 text-center">Sign up user</h2>
              <form style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div className="form-floating mx-auto my2" style={{width: "90%"}}>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mx-auto my-2" style={{width: "90%"}}>
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="+00 1234567890"
                  />
                  <label htmlFor="floatingInput">phone number</label>
                </div>
                <div className="form-floating mx-auto my-2" style={{width: "90%"}}>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="set Password"
                  />
                  <label htmlFor="floatingPassword">set Password</label>
                </div>
                <div className="form-floating mx-auto my-2" style={{width: "90%"}}>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="confirm Password"
                  />
                  <label htmlFor="floatingPassword">confirm Password</label>
                <div className="input-group my-2">
                <input type="checkbox" className="mx-2" name="forgot password" id="check2" />
                <label htmlFor="check">show password</label>
                </div>
                </div>
                <button className="btn btn-primary mx-auto my-3" style={{width: "auto", padding:"1.5vh 1vw"}}>create account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

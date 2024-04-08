import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please fill in E-mail");
      return;
    }

    setError("");
    setSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setEmail("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form className="shadow rounded p-3 mt-5 form" onSubmit={handleSubmit}>
      <h3 className="text-center mb-3">Forgot Password</h3>
      {success ? (
        <p className="text-center mt-5">
          Please check you E-mail inbox, for Reset instructions
        </p>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error ? <p className="text-center text-danger">{error}</p> : null}
          <div className="text-center mb-3">
            <button className="btn btn-secondary btn-sm">Continue</button>
          </div>
        </>
      )}
    </form>
  );
};

export default ForgotPass;

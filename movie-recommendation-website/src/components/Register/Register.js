import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let x = useNavigate();
  function submitRegisterForm(e) {
    x("/login");
  }
  return (
    <>
      <div className="w-75 mx-auto py-3">
        <h3 className="my-4 fw-bold text-info">Registeration Form</h3>

        <form onSubmit={submitRegisterForm}>
          <label htmlFor="first_name">first_name:</label>
          <input
            type="text"
            className="form-control mb-2 my-input my-2"
            name="first_name"
            id="first_name"
          ></input>

          <label htmlFor="last_name">last_name:</label>
          <input
            type="text"
            className="form-control mb-2 my-input my-2"
            name="last_name"
            id="last_name"
          ></input>

          <label htmlFor="age">age:</label>
          <input
            type="number"
            className="form-control mb-2 my-input my-2"
            name="age"
            id="age"
          ></input>

          <label htmlFor="email">email:</label>
          <input
            type="email"
            className="form-control mb-2 my-input my-2"
            name="email"
            id="email"
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            className="form-control mb-2 my-input my-2"
            name="password"
            id="password"
          ></input>

          <button type="submit" className="btn btn-info">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

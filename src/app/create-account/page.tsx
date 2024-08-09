'use client';

import React from "react";

// TODO: consider having this elsewhere and as an arrow function
function handleAccountCreationFormSubmission(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const accountCreationFormData = new FormData(e.target);
  const password = accountCreationFormData.get('password');
  const confirmPassword = accountCreationFormData.get('confirmPassword');
  console.log(password, confirmPassword);
}

export default function Page() {
  return (
    <form onSubmit={handleAccountCreationFormSubmission}>
      <label>
        *Name: <input type="text" required/>
      </label>
      {/* TODO: check that email is unique */}
      <label>
        *E-mail: <input type="email" required/>
      </label>
      <label>
        *Password: <input type="password" name="password" minLength={8} required/>
      </label>
      {/* TODO: assert that the passwords are the same */}
      {/* TODO: assert that the passwords have at least 8 characters */}
      {/* TODO: escape characters as needed for storage to prevent security breaches */}
      {/* TODO: hash the password before storage  */}
      <label>
        *Confirm password: <input type="password" name="confirm-password"/>
      </label>
      <label>
        *Check this box to confirm you've read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>: <input type="checkbox" required/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

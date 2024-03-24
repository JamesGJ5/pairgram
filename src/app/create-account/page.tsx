// 'use client';

// // TODO: consider having this elsewhere
// function handleAccountCreationFormSubmission() {

// }

export default function Page() {
  return (
    <>
      <form>
        <label>
          *Name: <input type="text" required/>
        </label>
        {/* TODO: check that email is unique */}
        <label>
          *E-mail: <input type="email" required/>
        </label>
        <label>
          *Password: <input type="password" required/>
        </label>
        {/* TODO: assert that the passwords are the same */}
        {/* TODO: assert that the passwords have at least 8 characters */}
        {/* TODO: escape characters as needed for storage to prevent security breaches */}
        {/* TODO: hash the password before storage  */}
        <label>
          *Confirm password: <input type="password"/>
        </label>
        <label>
          *Check this box to confirm you've read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>: <input type="checkbox" required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

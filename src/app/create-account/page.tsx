export default function Page() {
  return (
    <>
      <form>
        <label>
          *Name: <input type="text" required/>
        </label>
        <label>
          *E-mail: <input type="email" required/>
        </label>
        <label>
          *Password: <input type="password" required/>
        </label>
        {/* TODO: assert that the passwords are the same */}
        {/* TODO: asser that the passwords are acceptable */}
        <label>
          *Confirm password: <input type="password" required/>
        </label>
        <label>
          *Check this box to confirm you've read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>: <input type="checkbox" required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

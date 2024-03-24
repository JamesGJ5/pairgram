export default function Page() {
  return (
    <>
      <form>
        <label>
          *Name: <input type="text"/>
        </label>
        <label>
          *E-mail: <input type="email"/>
        </label>
        <label>
          *Password: <input type="password"/>
        </label>
        <label>
          *Confirm password: <input type="password"/>
        </label>
        <label>
          *Check this box to confirm you've read our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>: <input type="password"/>
        </label>
      </form>
    </>
  );
}

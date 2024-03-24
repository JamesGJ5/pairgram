import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>
        <form>
          <label>
            *E-mail: <input type="email"/>
          </label>
          <label>
            *Password: <input type="email"/>
          </label>
        </form>
        <a href="/create-account">Create Account</a>
        <a href="/forgot-password">Forgot Password</a>
      </main>
    </>
  );
}

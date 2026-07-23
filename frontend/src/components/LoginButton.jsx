import { useEffect, useState } from "react";
import { signInWithRedirect, fetchAuthSession } from "aws-amplify/auth";

function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkUser() {
      try {
        const session = await fetchAuthSession();

        if (session.tokens?.accessToken) {
          setLoggedIn(true);
          console.log("Access Token:", session.tokens.accessToken.toString());
          console.log("ID Token:", session.tokens.idToken.toString());
        }
      } catch (err) {
        console.log("Not logged in");
      }
    }

    checkUser();
  }, []);

  const handleLogin = async () => {
    await signInWithRedirect();
  };

  return loggedIn ? (
    <button disabled>✅ Logged In</button>
  ) : (
    <button onClick={handleLogin}>Login</button>
  );
}

export default LoginButton;
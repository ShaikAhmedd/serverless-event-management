import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_t7RszTIOz",
      userPoolClientId: "26geqd9kpo1aeh3hiscpqdp3db",
      loginWith: {
        oauth: {
          domain: "ap-south-1t7rsztioz.auth.ap-south-1.amazoncognito.com",
          scopes: ["openid", "email", "phone"],
          redirectSignIn: ["http://localhost:5173"],
          redirectSignOut: ["http://localhost:5173"],
          responseType: "code",
        },
      },
    },
  },
});
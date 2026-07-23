const cognitoDomain = "YOUR_COGNITO_DOMAIN";
const clientId = "YOUR_APP_CLIENT_ID";
const redirectUri = "http://localhost:5173";

export function login() {
  const loginUrl =
    `https://${cognitoDomain}.auth.ap-south-1.amazoncognito.com/login` +
    `?client_id=${clientId}` +
    `&response_type=token` +
    `&scope=email+openid+profile` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}`;

  window.location.href = loginUrl;
}
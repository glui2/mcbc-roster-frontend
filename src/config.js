const OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID;
const OKTA_ORG_URL = process.env.OKTA_ORG_URL;

export default {
  clientId: OKTA_CLIENT_ID,
  issuer: OKTA_ORG_URL,
  redirectUri: "http://localhost:8080/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: false,
};

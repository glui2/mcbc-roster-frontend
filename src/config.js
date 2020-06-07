const OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID;
const OKTA_ORG_URL = process.env.OKTA_ORG_URL;

export default {
  clientId: "0oae17jvpfMXLscic4x6",
  issuer: "https://dev-973680.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/implicit/callback",
  scope: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: false,
};

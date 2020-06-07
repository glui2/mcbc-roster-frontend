import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import config from "./config";

const Login = () => {
  useEffect(() => {
    const { clientId, issuer, redirectUri, scopes, pkce } = config;
    const widget = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: issuer ? issuer.split("/oauth2")[0] : "",
      clientId,
      redirectUri,
      logo: "/react.svg",
      i18n: {
        en: {
          "primaryauth.title": "Sign in to MCBC Rostering App",
        },
      },
      authParams: {
        pkce,
        issuer,
        display: "page",
        scope,
        responseMode: "query",
      },
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      }
    );
  }, []);

  return (
    <div>
      <div id="sign-in-widget" />
    </div>
  );
};

export { Login };

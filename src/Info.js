import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SimpleForm from "./SimpleForm.js";
import DisplayMessage from "./DisplayMessage";
import { SharedProvider } from "./Shared";

function MyMailchimpSubscribe() {
  return (
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        return (
          <SimpleForm
            status={status}
            message={message}
            className="form"
            style={{}}
            onSubmitted={formData => subscribe(formData)}
          />
        );
      }}
    />
  );
}

function Info() {
  return (
    <SharedProvider>
      <DisplayMessage />
      <MyMailchimpSubscribe />
    </SharedProvider>
  );
}

export default Info;

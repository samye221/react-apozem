import React from "react";
import { SharedContext } from "./Shared";
import './App.css';

export default function DisplayMessage() {
  const [sharedState] = React.useContext(SharedContext);
  if (!sharedState.status) {
    return null;
  }
  const { status, message } = sharedState;
  return (
    <div className="message">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}
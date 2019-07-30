import React from "react";

export default function Page404({ location }) {
  return (
    <div>
      <h2>
        No match found for <code>{location.pathname}</code>
      </h2>
    </div>
  );
}

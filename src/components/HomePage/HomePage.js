import React from "react";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className="HomePage">
      <section className="primary">
        <div className="primary-background" />
        <header className="primary-header">
          <h1 className="primary-title">SOUNDSTORM</h1>
          <p>The Leading Platform for Underground Music</p>
        </header>
        <p>primary</p>
      </section>
      <section className="secondary">
        <p>secondary</p>
      </section>
    </main>
  );
}

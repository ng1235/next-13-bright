"use client";
import React from "react";

function Revealable({ children }) {
  const [isRevealed, setIsRevealed] = React.useState(false);

  return isRevealed ? (
    children
  ) : (
    <div>
      <div className="reveal" lang="py" onClick={() => setIsRevealed(true)}>
        Reveal Content
      </div>
    </div>
  );
}

export default Revealable;

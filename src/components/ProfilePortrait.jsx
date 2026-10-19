import React, { useState } from 'react';
import './ProfilePortrait.css';

export default function ProfilePortrait() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="portrait-circle-container">
      {/* Restrained circular frame with subtle lime accent */}
      <div className="portrait-circle-frame">
        {!hasError ? (
          <img
            src="/images/profile.jpg"
            alt="Swaraj Kubde — Portrait"
            className="portrait-circle-img"
            onError={() => setHasError(true)}
          />
        ) : (
          /* Graceful Circular Fallback only if image loading fails */
          <div className="portrait-circle-fallback" aria-label="Portrait placeholder for Swaraj Kubde">
            <svg
              className="fallback-silhouette"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="40" r="18" stroke="#B6F36A" strokeWidth="1.5" strokeDasharray="3 3" />
              <path
                d="M22 86 C22 66, 36 60, 50 60 C64 60, 78 66, 78 86"
                stroke="#AAB3BC"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </svg>
            <span className="fallback-label">SWARAJ KUBDE</span>
          </div>
        )}
      </div>
    </div>
  );
}

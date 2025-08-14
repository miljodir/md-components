import React, { useState } from 'react';
import MdIconCheck from '../../packages/react/src/icons-material/MdIconCheck';
import './token.css';

type TokenType = {
  token: string;
  variable: string;
  hidePreview?: boolean;
};

export const Token: React.FC<TokenType> = ({ token, variable, hidePreview = false }) => {
  const [copied, setCopied] = useState(false);
  const copyToken = () => {
    setCopied(true);
    navigator.clipboard.writeText(token);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="token-wrapper">
      <button
        onClick={() => {
          return copyToken();
        }}
        className="token-button"
        title="Copy css token to clipboard"
      >
        {copied ? (
          <div className="token-copied">
            <MdIconCheck className="token-copied-icon" />
            Token copied
          </div>
        ) : (
          token
        )}
      </button>
      <div className="token-details">
        <pre>{variable}</pre>
        {!hidePreview && (
          <div
            className="token-color-preview"
            style={{
              backgroundColor: `${variable}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Token;

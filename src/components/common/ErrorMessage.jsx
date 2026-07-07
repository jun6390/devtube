import React from "react";
import { getApiErrorMessage, getApiErrorStatus, getApiErrorTitle } from "../../utils/apiError";

const ErrorMessage = ({ error, message, title, onRetry }) => {
  const isRateLimitError = getApiErrorStatus(error) === 429;
  const showRetryButton = onRetry && !isRateLimitError;

  return (
    <div className="error__message" role="alert">
      <strong>{title || getApiErrorTitle(error)}</strong>
      <p>{message || getApiErrorMessage(error)}</p>
      {showRetryButton && (
        <button type="button" onClick={onRetry}>
          다시 시도
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

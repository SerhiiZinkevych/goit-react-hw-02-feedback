import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button type="button" name={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;

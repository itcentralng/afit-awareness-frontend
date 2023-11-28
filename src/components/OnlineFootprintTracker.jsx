import React, { useState } from 'react';

const OnlineFootprintTracker = () => {
  const [answers, setAnswers] = useState({
    question1: false,
    question2: false,

  });

  const handleCheckboxChange = (question) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: !prevAnswers[question],
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting answers:', answers);
    
  };

  return (
    <div>
      <h2>Carbon Footprint Tracker</h2>
      <form>
        <label>
          <input
            type="checkbox"
            checked={answers.question1}
            onChange={() => handleCheckboxChange('question1')}
          />
          Question 1
        </label>
      
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default OnlineFootprintTracker;

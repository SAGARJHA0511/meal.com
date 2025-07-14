import { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      alert('Please enter feedback!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-black p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-bold">Feedback</h2>
      {submitted ? (
        <p className="text-green-600">Thank you for your feedback!</p>
      ) : (
        <>
          <textarea
            className="w-full border p-2 rounded"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts..."
          />
          <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-2 rounded">
            Submit
          </button>
        </>
      )}
    </div>
  );
}

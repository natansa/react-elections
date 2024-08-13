import React from 'react';

export default function CandidateCard({ candidate, votes, percentage }) {
  return (
    <div className="candidate-card">
      <img src={`/img/${candidate.username}.png`} alt={candidate.name} />
      <h3>{candidate.name}</h3>
      <p>Votes: {votes}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
    </div>
  );
}

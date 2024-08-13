import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';

export default function ElectionResults({ cityId }) {
  const [results, setResults] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (cityId) {
      axios.get(`http://localhost:3001/election?cityId=${cityId}`).then((response) => {
        setResults(response.data);
      });

      axios.get(`http://localhost:3001/cities/${cityId}`).then((response) => {
        setCity(response.data);
      });

      axios.get('http://localhost:3001/candidates').then((response) => {
        setCandidates(response.data);
      });
    }
  }, [cityId]);

  if (!city || results.length === 0) return <p>Select a city to see the results</p>;

  const totalVotes = results.reduce((sum, result) => sum + result.votes, 0);

  return (
    <div>
      <h2>{city.name} Election Results</h2>
      {results.map((result) => {
        const candidate = candidates.find((c) => c.id === result.candidateId);
        const percentage = (result.votes / totalVotes) * 100;
        return (
          <CandidateCard
            key={result.id}
            candidate={candidate}
            votes={result.votes}
            percentage={percentage}
          />
        );
      })}
    </div>
  );
}

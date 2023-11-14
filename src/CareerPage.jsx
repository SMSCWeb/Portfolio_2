import React, { useState } from 'react';

function CareerPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleResumeChange = (e) => setResume(e.target.files[0]);

  const handleSubmit = () => {
    // Process and validate the form data here
    // Create a CSV string with the collected data
    const csvData = `Name,Email,Resume\n${name},${email},`;

    // Create a data URI for download
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'career_application.csv';
    a.click();
  };

  return (
    <div>
      <h1>Career Application Form</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Resume:</label>
        <input type="file" onChange={handleResumeChange} />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CareerPage;

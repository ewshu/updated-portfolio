import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-screen PDF viewer */}
      <iframe
        src="/logos/resume.pdf"
        className="w-full h-screen"
        title="Eshwar Pamula Resume"
        style={{ border: 'none' }}
      />
    </div>
  );
}

export default Resume;
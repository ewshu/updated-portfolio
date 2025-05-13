import React from 'react';

function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-screen PDF viewer */}
      <iframe
        src="/logos/resume.pdf"
        className="w-full h-[800px] md:h-[1000px]"
        title="Resume"
      />

      {/* Copyright Footer */}
      <div className="text-center text-sm text-gray-500 mt-8 md:mt-12">
        © 2025 Eshwar Pamula. All rights reserved.
      </div>
    </div>
  );
}

export default Resume;
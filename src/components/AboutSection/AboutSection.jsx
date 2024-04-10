import React from "react";

const AboutSection = () => {
    return (
        <div className="mx-auto max-w-5xl py-4 px-6 mt-4 mb-2 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">About This Resource</h2>
            <p>This page provides an overview of Georgia Tech open source research projects curated by the Georgia Tech Open Source Project Office (OSPO). Georgia Tech PIs and researchers can submit their work via the form below, and all submissions are reviewed via a PR process before being posted.</p>
            <p>If you have any questions about this resource, please reach out to us via email at <a href="mailto:ospo-team@gatech.edu" className="text-gtgold hover:text-gtgoldlight">ospo-team@gatech.edu</a>.</p>
        </div>
    )
}

export default AboutSection;
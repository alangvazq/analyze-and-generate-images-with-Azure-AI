import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis.js';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);


  const handleImageAnalysis = async () => {
    try {
      const response = await analyzeImage(imageUrl);
      setResult(response);
    } catch (error) {
      console.error("Error analyzing image: ", error);
    }
  }

  const displayResults = (result) => {
    if (!result) return null;
    return (
      <div>
        <h2>Image analysis results</h2>
        <img
          width="500"
          src={result?.url ? result.url : imageUrl} alt="uploaded"
        />
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );

  }

  return (
    <div>
      <h1>
        <input type="text" placeholder="Enter URL or textual prompt"
          value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}
        />
        <button onClick={handleImageAnalysis} >Analyze image</button>
        <button>Generate image</button>
        {displayResults(result)}
      </h1>
    </div>
  )
}

export default App;

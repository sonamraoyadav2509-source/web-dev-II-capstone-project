import React, { useState } from 'react';
import { allStories } from './data/storyData';
import StoryNode from './components/StoryNode';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentNodeKey, setCurrentNodeKey] = useState('start');

  const handleChoice = (nextNode) => {
    setCurrentNodeKey(nextNode);
  };

  const restartStory = () => {
    setCurrentNodeKey('start');
  };

  const backToMenu = () => {
    setSelectedStory(null);
    setCurrentNodeKey('start');
  };

  if (!selectedStory) {
    return (
      <div className="app-wrapper menu-view">
        <header className="app-header">
          <h1 className="glitch">CHOOSE YOUR FATE</h1>
          <p>Select a reality to begin your journey.</p>
        </header>
        <div className="story-picker">
          {Object.keys(allStories).map((key) => (
            <div key={key} className="story-option" onClick={() => setSelectedStory(key)}>
              {/* Added the Thumbnail Image here */}
              <img 
                src={allStories[key].thumbnail} 
                alt={allStories[key].title} 
                className="story-thumbnail" 
              />
              <div className="option-content">
                <h2>{allStories[key].title}</h2>
                <p>{allStories[key].description}</p>
                <button className="select-story-btn">
                  <span className="btn-glow"></span>
                  <span className="btn-text">SELECT STORY</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>{allStories[selectedStory].title}</h1>
      </header>
      
      <main className="main-content">
        <StoryNode 
          node={allStories[selectedStory].nodes[currentNodeKey]} 
          onChoice={handleChoice} 
        />
      </main>

      <footer className="app-footer">
        <Controls 
          onRestart={restartStory} 
          onBackToMenu={backToMenu} 
          currentPath={currentNodeKey} 
        />
      </footer>
    </div>
  );
}

export default App;
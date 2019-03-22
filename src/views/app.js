import React, { useState } from 'react';
import ResourceList from './components/resource-list';

const App = () => {
  const [resources, setResources] = useState('posts');
  return (
    <div className="grid-container fluid">
      <div className="grid-x grid-padding-x grid-padding-y">
        <div className="cell">
          <div className="button-group">
            <button 
              className="button primary radius bordered shadow"
              onClick={ () => setResources('posts') }>Posts</button>
            <button 
              className="button secondary radius bordered shadow"
              onClick={ () => setResources('todos') }>Todos</button>
          </div>
          <ResourceList resources={ resources } />
        </div>
      </div>
    </div>
  );
};

export default App;

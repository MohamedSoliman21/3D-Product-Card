import './App.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Shoe';
import Card from './Card';

function App() {
  return (
    <div className='App'>
      <div>
      <h1>3D Product Card</h1>
        <p>Hold and drag the mouse over the product</p>
      </div>
      <Card />
    </div>
  );
}

export default App;

import Popup from 'reactjs-popup';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Shoe';

export default () => (
  <Popup 
  trigger={<div class="Choice__search"><button class="BtnIcon"><img class="sIcon" src='magnifier.png' /></button></div>}
  modal>
    <div className='PopupContainer'>
        <div className='LeftPop'>
        <div className='DetailsContainer'>
                <h1>Converse</h1>
                <div className='Tags'>
                    <button className='TagBtn'>Top Rated</button>
                    <button className='TagBtn'>Best Selling</button>
                </div>
                <div className='Description'>
                    <h3>Description</h3>
                    <p>Here you can zoom in and out to examine the product</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                
            </div>
        </div>
        <div className='MiddlePop'>
        <Canvas
                camera={{ position: [100, 80, 50], fov: 11 }}
                style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                borderRadius: '50px'                
                }}
            >
                <ambientLight intensity={2} />
                <directionalLight position={[0,-2,0]} intensity={2} />
                <directionalLight position={[0,2,0]} intensity={2} />
                <directionalLight position={[-2,0,0]} intensity={2} />
                <directionalLight position={[2,0,0]} intensity={2} />

                <Suspense fallback={null}>
                <Model position={[0, 0, 0]} />
                </Suspense>
                <OrbitControls minDistance={60} maxDistance={160}/>
            </Canvas>
        </div>
        <div className='RightPop'>
            <div className='Size'>
                <h3>Size</h3>
                <div class="Choice">
                        <div class="Choice__1">
                        <button className='ChoiceBtn SizeBtn'>7</button></div>
                        <div class="Choice__2">
                        <button className='ChoiceBtn SizeBtn'>8</button></div>
                        <div class="Choice__3">
                        <button className='ChoiceBtn SizeBtn'>9</button></div>
                        <div class="Choice__4">
                        <button className='ChoiceBtn SizeBtn'>10</button></div>
                    </div>
            </div>
            <div className='Color'>
                <h3>Color</h3>
                <div class="Choice">
                        <div class="Choice__1">
                        <button className='ChoiceBtn Active'><div class="C C1"></div></button></div>
                        <div class="Choice__2">
                        <button className='ChoiceBtn'><div class="C C2"></div></button></div>
                        <div class="Choice__3">
                        <button className='ChoiceBtn'><div class="C C3"></div></button></div>
                        <div class="Choice__4">
                        <button className='ChoiceBtn'><div class="C C4"></div></button></div>
                    </div>
            </div>
            <div className='Rating'>
                    <h3>Rating</h3>
                    <div id='star'></div>
                    <div class="Choice">
                    <div class="Choice__1">
                        <button className='ChoiceBtn RatingBtn'>&#9733;</button></div>
                        <div class="Choice__2">
                        <button className='ChoiceBtn RatingBtn'>&#9733;</button></div>
                        <div class="Choice__3">
                        <button className='ChoiceBtn RatingBtn'>&#9733;</button></div>
                        <div class="Choice__4">
                        <button className='ChoiceBtn RatingBtn'>&#9733;</button></div>
                        <div class="Choice__5">
                        <button className='ChoiceBtn RatingBtn'>&#9733;</button></div>
                </div>
                </div>
            <div class='Price'>
                        <h2>9.99$</h2>
                </div>
                <div class="btn btn__primary"><p>Add to Cart</p></div>
        </div>
    </div>
  </Popup>
);
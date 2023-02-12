import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Shoe';
import Pop from './Pop';

export default function Card(){
    const [SelectedSize, setSelectedSize] = useState("Size_1");
    const [SelectedColor, setSelectedColor] = useState("Color_1");
    const [isActive, setIsActive] = useState(true)

    const handleChange = () => {
        let B = document.getElementById("Bottom");
        let T = document.getElementById("Top");
        let C = document.getElementById("Card");
        let i=1;
        if(isActive){
            
            B.style.animation = "BottomAnimation 1s ease 0s  forwards"
            T.style.animation = "TopAnimation 1s ease 0s  forwards"
            C.style.animation = "CardAnimation 1s ease 0s  forwards"
        }
        else{
            B.style.animation = "ReverseBottomAnimation 1s ease 0s  forwards"
            T.style.animation = "ReverseTopAnimation 1s ease 0s  forwards"
            C.style.animation = "ReverseCardAnimation 1s ease 0s  forwards"
        }
        setIsActive(prevState => {
            return !prevState
        })
    }
    const [isAct, setIsAct] = useState(false);

      return(
        <div class="Container">
        <div id='Card' class="Card">
            <div id='Top' class="Top">
                <div class="TopChoice">
                    <Pop />
                        <div class="Choice__search">
                        <button class="BtnIcon" onClick={handleChange}><img class="sIcon" src={isActive?'shopping-cart.png': 'close.png'} /></button></div>
                </div>
                
                <Canvas
                    camera={{ position: [100, 80, 50], fov: 11 }}
                    style={{
                    width: '20vw',
                    height: '38vh',
                    position: 'relative',
                    left: '3%',
                    top: '0%',
                    }}
                >
                    <ambientLight intensity={1.25} />
                    <directionalLight position={[0,-2,0]} intensity={2} />
                    <directionalLight position={[0,2,0]} intensity={2} />
                    <directionalLight position={[-2,0,0]} intensity={2} />
                    <directionalLight position={[2,0,0]} intensity={2} />

                    <Suspense fallback={null}>
                    <Model position={[0, 0, 0]} />
                    </Suspense>
                    <OrbitControls  enableZoom={false}/>
                </Canvas>
                
            </div>
            <div id='Bottom' class="Bottom">
                <h2>Converse</h2>
                <div class="UserChoice">
                <div class="Size">
                    <h3>Size: </h3>
                    <h3>Color: </h3>
                </div>
                <div class="Color"> 
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
                </div>
                <div class='Price'>
                        <h2>9.99$</h2>
                </div>
                <div class="btn btn__primary"><p>Add to Cart</p></div>
            </div>
        </div>
    </div>
    )
}
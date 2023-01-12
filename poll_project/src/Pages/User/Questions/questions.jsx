import React, { useState } from "react";
import './App.css';


function Example() {
    return (
      <div>
        <div className='banner-top'>
          <p>Session NAME</p>
        </div>
        <div className='banner-question'>
          <p>Voici la question à laquelle je dois répondre ?</p>
        </div>


        <div className='questions'>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-1" />
          <label className="for-checkbox-tools" for="tool-1">
            <i className='uil uil-line-alt'></i>
            line
          </label>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
          <label className="for-checkbox-tools" for="tool-2">
            <i className='uil uil-vector-square'></i>
            square
          </label>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-3" />
          <label className="for-checkbox-tools" for="tool-3">
            <i className='uil uil-ruler'></i>
            ruler
          </label>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-4" />
          <label className="for-checkbox-tools" for="tool-4">
            <i className='uil uil-crop-alt'></i>
            crop
          </label>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-5" />
          <label className="for-checkbox-tools" for="tool-5">
            <i className='uil uil-brush-alt'></i>
            brush
          </label>
          <input className="checkbox-tools" type="radio" name="tools" id="tool-6" />
          <label className="for-checkbox-tools" for="tool-6">
            <i className='uil uil-image-resize-landscape'></i>
            resize
          </label>
        </div>
      </div>
    );
}
export default Example

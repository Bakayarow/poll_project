import React, { useState } from "react";
import './style.css';


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
          <div className="colors color-green-full"></div>
            Tout à fait d'accord !
          </label>

          <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
          <label className="for-checkbox-tools" for="tool-2">
            <div className="colors color-green-demi"></div>
            D'accord.
          </label>

          <input className="checkbox-tools" type="radio" name="tools" id="tool-3" />
          <label className="for-checkbox-tools" for="tool-3">
          <div className="colors color-orange"></div>
            Mitigé..
          </label>

          <input className="checkbox-tools" type="radio" name="tools" id="tool-4" />
          <label className="for-checkbox-tools" for="tool-4">
          <div className="colors color-red-demi"></div>
            Pas tout à fait d'accord...
          </label>

          <input className="checkbox-tools" type="radio" name="tools" id="tool-5" />
          <label className="for-checkbox-tools" for="tool-5">
          <div className="colors color-red-full"></div>
            Pas d'accord !
          </label>

          <input className="checkbox-tools" type="radio" name="tools" id="tool-6" />
          <label className="for-checkbox-tools" for="tool-6">
          <div className="colors color-white"></div>
            Ne sais pas...
          </label>
          
          <input className="checkbox-tools" type="radio" name="tools" id="tool-7" />
          <label className="for-checkbox-tools" for="tool-7">
          <div className="colors color-black"></div>
            Ne souhaite pas répondre
          </label>
        </div>
      </div>
    );
}
export default Example

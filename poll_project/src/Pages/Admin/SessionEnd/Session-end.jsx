
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom"
import VerticalBarGraph from "@chartiful/react-vertical-bar-graph";
import './style.css';
import Nav from '../../../Components/Nav/Nav';

export default function SessionEnd() {

  const {id} = useParams()


  const [sessionDetails, setSessionDetails ] = useState([])

  const getSessionInfos = async () =>{
    try {    
        const res = await fetch(`http://localhost:1337/api/sessions/${id}`);
        const data = await res.json()
    
        setSessionDetails(data.data.attributes)
      
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() =>{
    getSessionInfos ()
  },[])








  const config = {
    hasXAxisBackgroundLines: false,
    hasYAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: "left",
      fontFamily: "system-ui, sans-serif",
      fontSize: 12,
      paddingLeft: 4
    },
  };

  return (
    <div>
      <Nav />
      <div >
        <h1> Détail de la session : {sessionDetails.name}</h1>
        <h2>Réalisé le {sessionDetails.datestart}</h2>
        <div className="chart">
          <div className="chart-left">
            <VerticalBarGraph className='john'
              data={[4, 3, 1, 3, 4, 1, 6]}
              labels={[""]}
              width={550}
              height={500}
              barWidthPercentage={0.8}
              baseConfig={config}
              style={{
                padding: 10
              }}
            />
            <br />
          </div>
          <div className="chart-right">
            <h2>Le nom de la question ???</h2>


            {/* Boucler les reponses */}
            <div className="answers">
              <div className="answer">
                <p>Jean Bon</p>
                <div className="colors color-green-full"></div>
              </div>
              
              <div className="answer">
                <p>Jeff Haim</p>
                <div className="colors color-green-demi"></div>

              </div>
              <div className="answer">
                <p>Raphael Groncin</p>
                <div className="colors color-orange"></div>
              </div>
              <div className="answer">
                <p>Erwan Martinez</p>
                <div className="colors color-red-demi"></div>
              </div>
              <div className="answer">
                <p>Alexis Novinc</p>
                <div className="colors color-red-full"></div>
              </div>
              <div className="answer">
                <p>Reda Nabil </p>
                <div className="colors color-white"></div>
              </div>
              <div className="answer">
                <p>Jean Bon</p>
                <div className="colors color-black"></div>
              </div>

            </div>
          </div>
        </div>
        <div className="colors-chart">
          <div className="color-chart">
            <div className="colors color-green-full"></div>
            <p>Tout à fait d'accord !</p>
          </div>
          <div className="color-chart">
            <div className="colors color-green-demi"></div>
            <p>D’accord.</p>
          </div>
          <div className="color-chart">
            <div className="colors color-orange"></div>
            <p>Mitigé</p>
          </div>
          <div className="color-chart">
            <div className="colors color-red-demi"></div>
            <p>Pas tout à fait d’accord...</p>
          </div>
          <div className="color-chart">
            <div className="colors color-red-full"></div>
            <p>Pas d’accord !</p>
          </div>
          <div className="color-chart">
            <div className="colors color-white"></div>
            <p>Ne sais pas...</p>
          </div>
          <div className="color-chart">
            <div className="colors color-black"></div>
            <p>Ne souhaite pas répondre.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


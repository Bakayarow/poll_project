import './style.css';
import Nav from '../../../Components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'; 
import axios from 'axios';


function SessionsTerminees() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axios.get(`http://localhost:8082/api/sessions/end`).then((res) => { setData(res.data) })
  }, []);

  console.log(data);



  return (
    <section >
        <div className="">
          <Nav />
        </div>
        <div className='container'>
          <h2 className="bloc--title">SESSIONS TERMINEES</h2>
            <ul> 
              {data.map((session) => (
                  <li key={session.id} className='session--liste'> {session.name} {session.datestart} <i><FontAwesomeIcon icon={faChevronRight} /></i></li>
                ))
              }
            </ul>
        </div>
    </section>
  );
}

export default SessionsTerminees;
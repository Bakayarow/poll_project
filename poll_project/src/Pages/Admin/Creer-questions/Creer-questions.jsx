import './style.css';
import Nav from '../../../Components/Nav/Nav';
import Todo from '../../../Components/Todo/Todolist';



function CreerQuestions() {

  return (
    <section>
        <Nav />
        <div className='headersmall'>
            <div className='headertitle'>
             <h1>Session Lorem du 01/02/2023</h1>
             
            </div>
        </div>
        <div className='bloc--bg-gradient'>
          <div className='blocmid'>
            <div className='topmid'>
            <h2>Questions de la session</h2>
            <button type='submit'>Créer la session</button>
            </div>
            <Todo />
          </div>
          </div>
    </section>
  );
}





export default CreerQuestions;
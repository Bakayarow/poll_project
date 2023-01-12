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
          <div className='blocleft'>
            <h2>Questions de la session</h2>
            <Todo />
          </div>
          <div className='blocright'>
          <div className='blocrighttop'>
            <h2>Nombre d'invités</h2>
            <form action="">
            <input type="text" />
            </form>
          </div>
          <button type='submit'>Créer la session</button>
          </div>
        </div>
    </section>
  );
}





export default CreerQuestions;
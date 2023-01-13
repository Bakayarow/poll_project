import logo from '../../../logo.png';
import './style.css';

function LoginUser() {

  
  return (
    <div className="App">
      <img className='logo' src={logo} alt="logo" />
      <form className='form-login'>
        <h2>BIENVENUE !</h2>
        <div className='form-grid'>
            <label className='pin-code'>
                Code pin session
                <input type="text" name="lastname" />
            </label>
            <label>
                Nom
                <input type="text" name="lastname" />
            </label>
            <label>
                Prénom
                <input type="text" name="firstname" />
            </label>
            <label>
                Rôle
                <input type="text" name="job" />
            </label>
            <input className='btn-submit' type="submit" value="Continuer" />
        </div>
        </form>
    </div>
  );
}

export default LoginUser;

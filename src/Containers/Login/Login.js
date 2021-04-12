import logo from './logo.svg';
import './Login.css';
import { Button} from 'react-bootstrap';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
      <p className="LogInButton">
                        <Button
                            variant="primary"
                            size="sm"
                        >
                            Sign In with Spotify
                        </Button>{' '}</p>
      </header>
    </div>
  );
}

export default Login;
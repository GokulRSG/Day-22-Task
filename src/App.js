import logo from './logo.svg';
import './App.css';
import {Check, X} from 'react-bootstrap-icons'
import FormText from 'react-bootstrap/FormText'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <div className='card-head'>
          <p>FREE</p>
          <h2>$0/month</h2>
        </div>
        <div className='card-body'>
          <div className='card-p'><Check className='svg' /><p>single user</p></div>
          <div className='card-p'><Check className='svg'/><p>50GB Storage</p></div>
          <div className='card-p'><Check className='svg'/><p>Unlimited Public Projects</p></div>
          <div className='card-p'><Check className='svg'/><p>Community Access</p></div>
          <div className="card-p card-bg"><X className='svg'/><p>Unlimited Private Projects</p></div>
          <div className="card-p card-bg"><X className='svg'/><p>Dedicated Phone Support</p></div>
          <div className="card-p card-bg"><X className='svg'/><p>Free Subdomain</p></div>
          <div className="card-p card-bg"><X className='svg'/><p>Monthly Status Report</p></div>
        </div>
        <div className='btn-contain'>
          <button>Button</button>
        </div>
      </div>
      <div className='card'>
        <div className='card-head'>
          <p>PLUS</p>
          <h2>$9/month</h2>
        </div>
        <div className='card-body'>
          <div className='card-p'><Check className='svg' /><p>single user</p></div>
          <div className='card-p'><Check className='svg'/><p>50GB Storage</p></div>
          <div className='card-p'><Check className='svg'/><p>Unlimited Public Projects</p></div>
          <div className='card-p'><Check className='svg'/><p>Community Access</p></div>
          <div className='card-p'><Check className='svg'/><p>Unlimited Private Projects</p></div>
          <div className='card-p'><Check className='svg'/><p>Dedicated Phone Support</p></div>
          <div className='card-p'><Check className='svg'/><p>Free Subdomain</p></div>
          <div className="card-p card-bg"><X className='svg'/><p>Monthly Status Report</p></div>
        </div>
        <div className='btn-contain'>
          <button>Button</button>
        </div>
      </div>
      <div className='card'>
        <div className='card-head'>
          <p>PRO</p>
          <h2>$49/month</h2>
        </div>
        <div className='card-body'>
          <div className='card-p'><Check className='svg' /><p>single user</p></div>
          <div className='card-p'><Check className='svg'/><p>50GB Storage</p></div>
          <div className='card-p'><Check className='svg'/><p>Unlimited Public Projects</p></div>
          <div className='card-p'><Check className='svg'/><p>Community Access</p></div>
          <div className='card-p'><Check className='svg'/><p>Unlimited Private Projects</p></div>
          <div className='card-p'><Check className='svg'/><p>Dedicated Phone Support</p></div>
          <div className='card-p'><Check className='svg'/><p>Free Subdomain</p></div>
          <div className='card-p'><Check className='svg'/><p>Monthly Status Report</p></div>
        </div>
        <div className='btn-contain'>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;

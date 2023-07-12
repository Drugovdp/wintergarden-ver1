import ReactDOM from 'react-dom/client';
import './Styles/common.scss'
import './Styles/reset.scss'
import {App} from './App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
reportWebVitals();

import BrandIdentityQuestionnaire from './BrandIdentityQuestionnaire'
import BrandIdentityQuestionnaireAR from './BrandIdentityQuestionnaireAR';
import { HashRouter as Router,
Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">English Version</Link>
        <Link to="/ar">Arabic  Version</Link>
          <Route exact path="/" component={BrandIdentityQuestionnaire} />
          <Route path="/ar" component={BrandIdentityQuestionnaireAR} />
      </div>
    </Router>
  );
}

export default App;

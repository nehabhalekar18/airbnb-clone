import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
        {/* Footer */}
        <Footer />
        {/* Search Page */}
        {/* Information */}
        {/* Card with Info */}
      </Router>
    </div>
  );
}

export default App;

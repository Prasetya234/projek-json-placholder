import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todos from './component/Todos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Posts} />
        <Link path="/Comments" exact component={Comments} />
        <Link path="/Albums" exact component={Albums} />
        <Link path="/Photos" exact component={Photos} />
        <Link path="/Todos" exact component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

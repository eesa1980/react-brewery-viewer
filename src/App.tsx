import React, {FC} from 'react';
import Routes from "./component/common/Routes";

const App: FC = ({children}) => {
  return (
    <div>
      <header>
        Header
      </header>
      <main><Routes/></main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;

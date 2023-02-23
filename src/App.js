
import { useEffect, useState } from 'react';
import './App.css';

// import Example from './components/3-11.Portal/Example';
// import Memo from './components/3-8.Memoization/Memo';
// import Button from './components/3-7.HOC/Button';
// import Input from './components/3-7.HOC/Input';
// import State from './components/3-3.Hooks/State';
// import Reducer from './components/3-3.Hooks/Reducer';
// import ControlledComponent from './components/2-10.Form/ControlledComponent';
// import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
// import List from './components/2-9.List/List'
// import Condition from './components/2-8.ConditionalRendering/Condition';
// import Event from './components/2-7.Event/Event'
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import Extraction from './components/2-4.Proops/Extraction/Extraction';
// import Composition from './components/2-4.Proops/Composition';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import FunctionalComponent from './components/2-5.State/FunctionalComponent';
// import Dialog from './components/3-6.Composition2/Dialog';
// import ThankyouDialog from './components/3-6.Composition2/ThankyouDialog';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((json) => setMessage(json.SUCCESS_TEXT));
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        {message}
      </header>

      {/* <Example /> */}
      {/* <Memo /> */}
      {/* <Input />
      <br />
      <br />
      <Button /> */}
      {/* < ThankyouDialog /> */}
      {/* <Dialog /> */}
      {/* <Reducer />
      <State /> */}
      {/* <UncontrolledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* {<List />} */}
      {/* {<Condition />} */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;

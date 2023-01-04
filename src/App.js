import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed.jsx';
import LoginForm from './Components/LoginForm.jsx';
import './App.css';

const projectID = 'b1966c9b-d07e-48ae-9979-6029c4e149c2';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
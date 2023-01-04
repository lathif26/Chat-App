import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID ="b1966c9b-d07e-48ae-9979-6029c4e149c2"
        userName="lathifa"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;
import Navbar from './components/Navbar'
import PersonName from './components/PersonName';
import LeftItems from './components/LeftItems';
import LeftButton from './components/LeftButton';
import LeftPage from './components/LeftPage';
import MessageCol from './components/MessageCol';
import MsgDialogReceiver from './components/MsgDialogReceiver';
import MsgDialogSender from './components/MsgDialogSender';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center '>
        <div className='ml-10'>
          <LeftPage/>
        </div>
        <div className='flex-auto'>
          <MessageCol/>
        </div>
      </div>
      {/* <MsgDialogReceiver/> */}
      {/* <MsgDialogSender/> */}
    </div>
  );
}

export default App;

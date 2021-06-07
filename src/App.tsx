// Using the mary africa template
import './css/dist/ma.css';
import ChatBox from './chat'

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center mx-auto container">
        <div className="space-y-2 max-w-sm lg:mt-28 lg:px-10">
          <h1 className="text-4xl font-bold">Chat Interface</h1>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mauris aliquam orci sagittis posuere nec vitae massa. Sed sodales turpis interdum velit rutrum</p>
        </div>
        <div className="w-96">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;

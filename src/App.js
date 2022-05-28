import './App.css';
import Title from './components/Title'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div className="App mt-4 bg-white px-10 py-10 rounded-lg shadow-2xl">
        <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center mb-5'>
          <Title />
          <AppHeader />
        </div>
        <Footer />
        <AppContent />
      </div>
      <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />
    </>
  );
}

export default App;

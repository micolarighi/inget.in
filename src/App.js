import './App.css';
import Title from './components/Title'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'


function App() {
  return (
    <>
      <motion.div animate={{ scale: [0.8, 1] }} className="App mt-4 bg-white duration-300 lg:px-10 lg:py-10 px-5 py-5 rounded-lg shadow-2xl ">
        <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center mb-5'>
          <Title />
          <AppHeader />
        </div>
        <Footer />
        <AppContent />
      </motion.div>
      <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />
    </>
  );
}

export default App;

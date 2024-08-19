import './styles/main.css'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contacts from './pages/Contacts'

function App() {
	return (
		<div className='App'>
			<Navbar />

			{/* <Home /> */}

			{/* <Projects /> */}

			<Contacts />

			<Footer />
		</div>
	)
}

export default App

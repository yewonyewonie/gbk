import { Route, Routes } from 'react-router-dom';
import './style/default.scss';
import HomePage from './pages/HomePage.js';
import GuidePage from './pages/GuidePage.js';
import ProgramPage from './pages/ProgramPage';
import GalleryPage from './pages/GalleryPage';
import NoticePage from './pages/NoticePage';
import UsersPage from './pages/UsersPage';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
// import FooterSecond from './components/layouts/FooterSecond';


function App() {
	return <div className="App">
		<Header />
	<Routes>
		<Route path='/' element={<HomePage/>}></Route>
		<Route path='/guide' element={<GuidePage></GuidePage>}></Route>
		<Route path='/guide/:tab' element={<GuidePage></GuidePage>}></Route>
		<Route path='/program' element={<ProgramPage></ProgramPage>}></Route>
		<Route path='/program/:tab' element={<ProgramPage></ProgramPage>}></Route>
		<Route path='/gallery' element={<GalleryPage></GalleryPage>}></Route>
		<Route path='/notice' element={<NoticePage></NoticePage>}></Route>
		<Route path='/users' element={<UsersPage/>}></Route>
	</Routes>
	<Footer />
	{/* <FooterSecond /> */}
	</div>;
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './style/default.scss';
import HomePage from './pages/HomePage.js';
import GuidePage from './pages/GuidePage.js';
import ProgramPage from './pages/ProgramPage';
import GalleryPage from './pages/GalleryPage';
import NoticePage from './pages/NoticePage';
import UsersPage from './pages/UsersPage';
import Header from './components/layouts/Header';
import SignUpPage from './pages/SignUpPage';
import MembersPage from './pages/MembersPage';
import List from './components/layouts/notice/List';
import DetailPage from './components/layouts/notice/modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/guide" element={<GuidePage></GuidePage>}></Route>
        <Route path="/guide/:tab" element={<GuidePage></GuidePage>}></Route>
        <Route path="/program" element={<ProgramPage></ProgramPage>}></Route>
        <Route
          path="/program/:tab"
          element={<ProgramPage></ProgramPage>}
        ></Route>
        <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
        <Route
          path="/gallery/:tab"
          element={<GalleryPage></GalleryPage>}
        ></Route>
        <Route path="/notice" element={<NoticePage></NoticePage>}>
          <Route path="/notice/inform" element={<List />}>
            <Route
              path="/notice/inform/modal/:id"
              element={<DetailPage />}
            ></Route>
          </Route>
        </Route>
        <Route path="/notice/:tab" element={<NoticePage></NoticePage>}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/member" element={<MembersPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

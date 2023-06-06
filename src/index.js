import React from 'react';
import ReactDOM from 'react-dom/client';
//cấu hình router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseStateDemo from './Hooks/UseStateDemo';
import UseEffectDemo from './Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UserCallBackDemo from './Hooks/UserCallBackDemo.jsx/UserCallBackDemo';
import UseMemoDemo from './Hooks/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './Hooks/UseRefDemo/UseRefDemo';
import DemoHookRedux from './Hooks/HookRedux/DemoHookRedux';

//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import UserNavigateDemo from './Hooks/UserNavigateDemo';
import ForgotPass from './pages/ForgotPass';
import Profile from './pages/Profile';
import UseSearchParamDemo from './Hooks/UseSearchParamDemo/UseSearchParamDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Contact />}></Route>
          <Route path='use-state-demo' element={<UseStateDemo />}></Route>
          <Route path='use-effect-demo' element={<UseEffectDemo />}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='use-callback-demo' element={<UserCallBackDemo />}></Route>
          <Route path='use-memo-demo' element={<UseMemoDemo />}></Route>
          <Route path='use-ref-demo' element={<UseRefDemo />}></Route>
          <Route path='Hook-redux-demo' element={<DemoHookRedux />}></Route>
          <Route path='Hook-redux-demo' element={<UserNavigateDemo />}></Route>
          <Route path='forgot-password' element={<ForgotPass />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='use-search-params' element={<UseSearchParamDemo />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);



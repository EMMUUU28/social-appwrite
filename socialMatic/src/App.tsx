import { Route , Routes } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import  Home from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from './components/ui/toaster';


const App = () =>{
    return (
        <main className='flex h-screen' >
          <Routes>
            {/* Public routes */}
                <Route element={<AuthLayout/>} >
                <Route path="/signin" element={<SigninForm/>}></Route>
                <Route path="/signup" element={<SignupForm/>}></Route>
                </Route>
                

            {/* Private routes */}
            <Route element={<RootLayout/>}>
            <Route index path='home' element={<Home/>}></Route>
            </Route>
          </Routes>
          <Toaster/>
        </main>
    )
}

export default App;
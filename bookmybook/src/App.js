import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Heart from './component/Heart';



function App() {
    const {settingMobileNumber,deleteItem,settingUserName,settingEmail,bookData,loggingIn,settingPassword,signingUp,settingRole,userData}=Heart();
  return (
   
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage bookData={bookData} deleteItem={deleteItem}></HomePage>}/>
      <Route path='/Login' element={<Login settingEmail={settingEmail} settingPassword={settingPassword} loggingIn={loggingIn}></Login>}></Route>
      <Route path='SignUp' element={<SignUp settingEmail={settingEmail} settingPassword={settingPassword} settingRole={settingRole} settingUserName={settingUserName} settingMobileNumber={settingMobileNumber} signingUp={signingUp}></SignUp>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

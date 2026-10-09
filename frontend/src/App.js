import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Component.js/Navigationbar';
import { Home } from './Component.js/Home';
import { Department } from './Component.js/Department';
import { MyComplaints } from './Component.js/Mycomplaints';
import { Signup } from './Component.js/Signup';
import { About } from './Component.js/About';
import { VerifyUser } from './Component.js/Verifyuser';
import { Login } from './Component.js/Login';
import { ReportOnline } from './Component.js/ReportOnline';
import { VehicleFir } from './Component.js/VehicleFir';
import { KidnapingReportFir } from './Component.js/KidnapingReportFir';
import { GeneralThiftFir } from './Component.js/GeneralThiftFir';
import { ViewStatus } from './Component.js/ViewStatus';
import { IasProfile } from './Component.js/IasProfile';
import { Notice } from './Component.js/Notice';
import { CitizenInformation } from './Component.js/CitizenInformation';
import { ArrestedPersonList } from './Component.js/ArrestedPerson';
import { Verification } from './Component.js/Verification';
import { CharacterVerification } from './Component.js/CharacterVerification';
import { PersonInfoCharacter } from './Component.js/PersonInfoForCh';
import { AddressforCharacter } from './Component.js/AddressforCharacter';
import { Oath } from './Component.js/Oath';
import { CharacterPayment } from './Component.js/CharacterVerifyPayment';
import { TenantPg } from './Component.js/TenantPg';
import { DomesticHelperNo } from './Component.js/DomesticHelper';
import { Act } from './Component.js/Act';
import News from './Component.js/Allnews';
import Contact from './Component.js/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/department' element={<Department />} />
        <Route path='/mycomplaints' element={<MyComplaints />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/verify' element={<VerifyUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/report' element={<ReportOnline />} />
        <Route path='/vehiclefir' element={<VehicleFir />}/>
        <Route path='/kidnapingreport' element={<KidnapingReportFir />}/>
        <Route path='/generalthiftfir' element={<GeneralThiftFir/>}/>
        <Route path='/view' element={<ViewStatus />}/>
        <Route path='/iasprofile' element={<IasProfile />}/>
        <Route path='/notice' element={<Notice />}/>
        <Route path='/citizen-information' element={<CitizenInformation />}/>
        <Route path='/arrestedpersons' element={<ArrestedPersonList />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/characterverification' element={<CharacterVerification/>} />
        <Route path='/characterverification/personInfo' element={<PersonInfoCharacter />}/>
        <Route path='/characterverification/addressinfo'element={<AddressforCharacter />}/>
        <Route path='/characterverification/oath' element={<Oath/>}/>
        <Route path='/charterverification/payment' element={<CharacterPayment/>}/>
        <Route path='/verification/pg' element={<TenantPg/>}/>
        <Route path='/verification/domestic' element={<DomesticHelperNo/>}/>
        <Route path='/act' element={<Act/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;

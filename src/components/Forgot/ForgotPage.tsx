import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar'
import * as F  from './ForgotStyle'
import FindId from './FindID';
import FindPW from './FindPW';

const Forgotpage = () => {

const [activeForm, setActiveForm] = useState('id');

const handleButtonClick = (form: string) => {
  setActiveForm(form)
}

  return (
    <>
    <Navbar/>
    <div>
    <F.Div>
      <F.Container>
      <F.Button active={activeForm === 'id'} onClick={() => handleButtonClick('id')}>Find ID</F.Button>
      <F.Button active={activeForm === 'pw'} onClick={() => handleButtonClick('pw')}>Find PassWord</F.Button>
    <F.Line></F.Line>
    <div>
    {activeForm === 'id' ? <FindId/> : null}
    {activeForm === 'pw' ? <FindPW/> : null}
    </div>
    </F.Container>
    </F.Div>
    </div>
    </>
  )
}

export default Forgotpage;
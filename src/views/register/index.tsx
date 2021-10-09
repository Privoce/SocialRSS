import React, { useReducer } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

import { authRegister } from '@/api';

import './index.scss';

export default function RegisterView() {
  const history = useHistory();
  const [form, setForm] = useReducer((o: any, n: any) => ({ ...o, ...n }), {});

  const setVal = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ [key]: e.target.value });
  };

  const handleSubmit = async () => {
    const res: any = await authRegister(form);
    if (res && res?.token) {
      toast.success(res.name);
      Cookies.set('token', res.token);
      history.push('/');
    }
  };

  return (
    <div className="form">
      <div>
        <label>Name</label>
        <input onChange={(e) => setVal('name', e)} />
      </div>
      <div>
        <label>Email</label>
        <input onChange={(e) => setVal('email', e)} />
      </div>
      <div>
        <label>Bio</label>
        <input onChange={(e) => setVal('bio', e)} />
      </div>
      <div>
        <label>Password</label>
        <input onChange={(e) => setVal('password', e)} type="password" />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

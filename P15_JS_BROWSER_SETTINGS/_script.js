const showValues = () => {
    lbl_mokymai_key.innerHTML = sessionStorage.mokymai_key ?? '-';
    lbl_kitas_raktas.innerHTML = sessionStorage.kitas_raktas ?? '-';
    lbl_mokymai_localStorage.innerHTML = localStorage.mokymai_localStorage ?? '-';
    lbl_json_localStorage.innerHTML = localStorage.json_localStorage ?? '-';
  };
  
  document.addEventListener('DOMContentLoaded', showValues);
  
  btn_setSessionStorage.addEventListener('click', () => {
    sessionStorage.setItem('mokymai_key', 'kazkokia nusetinta reiksme');
    txt_setSessionStorage.innerHTML = 'irasyta sekmingai';
    txt_setSessionStorage.style.color = `green`;
  });
  //--------------------------------------
  btn_setSessionStorage1.addEventListener('click', () => {
    sessionStorage.setItem('kitas_raktas', 'kazkokia kito rakto reiksme');
    txt_setSessionStorage1.innerHTML = 'irasyta sekmingai';
    txt_setSessionStorage1.style.color = `green`;
  });
  //--------------------------------------
  btn_setLocalStorage.addEventListener('click', () => {
    const asmuo = { vardas: `Agne`, pavarde: `Agniene` };
    localStorage.setItem('mokymai_localStorage', asmuo);
    txt_setLocalStorage.innerHTML = 'irasyta sekmingai';
    txt_setLocalStorage.style.color = `green`;
  });
  //--------------------------------------
  btn_json_localStorage.addEventListener('click', () => {
    const asmuo = { vardas: `Agne`, pavarde: `Agniene` };
    localStorage.setItem('json_localStorage', JSON.stringify(asmuo));
    txt_json_localStorage.innerHTML = 'irasyta sekmingai';
    txt_json_localStorage.style.color = `green`;
  });
  //--------------------------------------
  btn_get_mokymai_key.addEventListener('click', () => {
    const val = sessionStorage.getItem('mokymai_key');
    txt_get_mokymai_key.innerHTML = val ?? `??nieko nera??`;
  });
  //--------------------------------------
  btn_get_kitas_raktas.addEventListener('click', () => {
    const val = sessionStorage.getItem('kitas_raktas');
    txt_get_kitas_raktas.innerHTML = val ?? `??nieko nera??`;
  });
  //--------------------------------------
  btn_get_mokymai_localStorage.addEventListener('click', () => {
    const val = localStorage.mokymai_localStorage; //Object-like access
    txt_get_mokymai_localStorage.innerHTML = val ?? `??nieko nera??`;
  });
  //--------------------------------------
  btn_get_json_localStorage.onclick = () => {
    const val = localStorage.json_localStorage; //Object-like access
    txt_get_json_localStorage.innerHTML = val ?? `??nieko nera??`;
  };
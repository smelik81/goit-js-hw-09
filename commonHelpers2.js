import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",n=document.querySelector(".feedback-form"),r=document.querySelector('input[type="email"]'),m=document.querySelector("textarea");n.addEventListener("input",e=>{if(e.target===r||e.target===m){const t=r.value.trim(),a=m.value.trim(),o={email:t,message:a};localStorage.setItem(s,JSON.stringify(o))}});const c=localStorage.getItem(s);if(c){const{email:e,message:t}=JSON.parse(c),a=e.trim(),o=t.trim();(a||o)&&(r.value=e,m.value=t)}n.addEventListener("submit",l);function l(e){e.preventDefault();const t=e.target.elements,a=t.email.value.trim(),o=t.message.value.trim();a&&o?console.log({email:a,message:o}):alert("заповніть будь ласка поле"),e.currentTarget.reset(),localStorage.removeItem(s)}
//# sourceMappingURL=commonHelpers2.js.map

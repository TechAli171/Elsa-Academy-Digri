const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function showNotice(message){ alert(message); }

function startTest(){
  document.getElementById('testCard').scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>document.querySelector('input[name="q"]').focus(),500);
}
function submitTest(){
  const selected=document.querySelector('input[name="q"]:checked');
  const result=document.getElementById('result');
  if(!selected){result.className='wrong';result.textContent='Please select an answer.';return;}
  if(selected.value==='b'){result.className='correct';result.textContent='✓ Correct! The <a> tag creates a hyperlink.';}
  else{result.className='wrong';result.textContent='✕ Not quite. The correct answer is <a>.';}
}

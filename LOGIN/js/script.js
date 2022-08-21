const btn = document.querySelector('.btn-login');

const senhas = ['12345', '1234','123'];
const logs = ['a','b','c'];

const login = document.querySelector("#user");
const senha = document.querySelector("#password");

const snh =document.querySelector('#snh');
const nm =document.querySelector('#nm');

const msg = document.querySelector('#mensagem');

function vazio() {
    
    if(login.value=="" || senha.value==""){

        msg.innerHTML = 'Verifique os campos vazios';
        msg.classList.add('mensagem');
        return true;

    }
    else{
        msg.innerHTML = '';
    }

    for(var i=0; i < logs.length; i++) {

        if(login.value==logs[i] && senha.value==senhas[i]){
                var t= 3;
                snh.style.display = "none";
                nm.style.display = "none";
                btn.style.display="none";
                document.querySelector('.help').style.display="none";

                msg.classList.add('mensagem2')
                msg.innerHTML = '<p>VOCÊ É FERA<br><br> Agora vc tem <span id="span">'+t+'</span> segundos para apreciar essa tela kk</p>';
                setInterval(() => {
                    t--
                    document.getElementById('span').innerHTML = t;
                    if(t===0){
                        window.location.href = "https://github.com/abrxao";
                    }
                },1000)
        }                
        else{
            msg.innerHTML = 'Erro no login ou senha';
                msg.classList.add('mensagem');
                   
        }
    }
    
 };

const modal = document.querySelector('.modal');

modal.addEventListener('click', (e) => {
    if(e.target===modal){window.location.href = "";}
});

const olho = document.querySelector('.pass-eye');

olho.addEventListener('click', (e) => {
    if(senha.getAttribute('type')=='password'){
        senha.setAttribute('type','text')
    }else{
        senha.setAttribute('type','password')
    }
    
});




const btn = document.querySelector('.btn-login');

const senhas = ['07031964', '1234','123'];
const logs = ['lorena','b','c'];

const login = document.querySelector("#user");
const senha = document.querySelector("#password");

const snh= document.querySelector('#snh');
const nm= document.querySelector('#nm');

const msg = document.querySelector('#mensagem');

var aux=0;

function vazio() {
    
    if(login.value=="" || senha.value==""){

        msg.innerHTML = 'VERIFIQUE OS CAMPOS';
        msg.classList.add('mensagem');
        return true;

    }
    else{
        msg.innerHTML = '';
    }

    for(var i=0; i < logs.length; i++) {

        if(login.value==logs[i] && senha.value==senhas[i]){

                snh.classList.add('valido');
                nm.classList.add('valido');
                msg.classList.add('mensagem2')
                msg.innerHTML = 'SUCESSO';
        }                
        else{
            msg.innerHTML = 'ERRO NO LOGIN OU SENHA';
                msg.classList.add('mensagem');
                   
        }
    }
    
 };

const label = document.querySelector('.lbl');
const label2 = document.querySelector('.lbl2');

function foco(){
    if(login.value!=""){
        label.classList.add('lblon');
    }else{
        label.classList.remove('lblon');
    }
}

function foco2(){
    if(senha.value!=""){
        label2.classList.add('lblon');
    }else{
        label2.classList.remove('lblon');
    }
}


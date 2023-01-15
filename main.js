const systemCaptcha = document.querySelector(".captcha");
const userCaptcha = document.querySelector(".captcha-input");
const btnValidateCaptcha = document.querySelector(".btn-check");
const btnRefreshCaptcha = document.querySelector(".btn-refresh");
const btnSubmit = document.querySelector(".btn-submit");
const errMsg = document.querySelector(".error");
const successMsg = document.querySelector(".success");

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,8,9,0];

const genarateCaptcha = () => {
    systemCaptcha.innerText="";
    for(let i=0; i<6 ; i++){
        let randChar=letters[Math.floor(Math.random()*letters.length)];
        systemCaptcha.innerText+=randChar;
    }
};

const refreshCaptcha=()=>{
    successMsg.innerText="";
    errMsg.innerText=""
    genarateCaptcha();
}

const ValidateCaptcha = (e) => {
	e.preventDefault();
    let userEnterCaptcha = String(userCaptcha.value);
    let systemGenaratedCaptcha=String(systemCaptcha.innerText);

	if(userEnterCaptcha === systemGenaratedCaptcha){
        successMsg.innerText="Nice! you don't appear to be robot";
    }
    else{
        errMsg.innerText="Invalid Captcha. try again!";
    }
	userCaptcha.value = "";
};

const submitHandler = (e) => {
	e.preventDefault();
    successMsg.innerText="";
    errMsg.innerText=""
};

btnRefreshCaptcha.addEventListener("click", refreshCaptcha);
btnValidateCaptcha.addEventListener("click", ValidateCaptcha);
btnSubmit.addEventListener("click", submitHandler);


const signUpBtn = document.getElementById('btn-signUp');
const registrarionBtn = document.getElementById('btn-registration');
const formBlock = document.getElementById('registration-block');
const overlay = document.getElementById('overlay');
const formLogin = document.getElementById('registration-block-login');
const HandleBtn = document.getElementById('header-button-block');
const closeModal = document.getElementById('registration-wrapper');
const form = document.querySelector(".registration-submit");
const inputForm = document.querySelectorAll('.registration-submit input');


HandleBtn.addEventListener("click", (event) => {
    if (event.target.matches('button')) {
        overlay.classList.toggle('active');
        if (event.target === signUpBtn) {
            formBlock.classList.toggle('active');
        } else {
            formLogin.classList.toggle('active');
        }
    }
});
closeModal.addEventListener('click', (e) => {
    if (e.target.matches('span') || e.target.classList.contains('overlay') === true) {
        overlay.classList.remove('active');
        formBlock.classList.remove('active');
        formLogin.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        formBlock.classList.remove('active');
        formLogin.classList.remove('active');
        overlay.classList.remove('active');
    }
});

const regExpLogin = /^[a-z0-9_-]{6,16}/;
const regExpEmail = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
const regExpPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/;
const pass = document.querySelector('.pass');
const passConf = document.querySelector('.pass-conf');
let isValidate = false;


const validateElem = (elem) => {
    if (elem.name === "login") {
        if (!regExpLogin.test(elem.value) && elem.value !== '') {
            elem.classList.add('invalid-input');
            isValidate = false;
        } else {
            elem.classList.remove('invalid-input');
            isValidate = true;
        }
    }
    if (elem.name === 'password') {
        if (!regExpPassword.test(elem.value) && elem.value !== '') {
            elem.classList.add('invalid-input');
            isValidate = false;
        } else {
            elem.classList.remove('invalid-input');
            isValidate = true;
        }
    }
    if (elem.name === 'confirm-password') {
        if (passConf.value !== pass.value && elem.value !== "") {
            elem.classList.add('invalid-input');
            isValidate = false;
        } else {
            elem.classList.remove('invalid-input');
            isValidate = true;
        }
    }
    if (elem.name === 'email') {
        if (!regExpEmail.test(elem.value) && elem.value !== '') {
            elem.classList.add('invalid-input');
            isValidate = false;
        } else {
            elem.classList.remove('invalid-input');
            isValidate = true;
        }
    }
    if (elem.name === 'name') {
        if (!regExpLogin.test(elem.value) && elem.value !== '') {
            elem.classList.add('invalid-input');
            isValidate = false;
        } else {
            elem.classList.remove('invalid-input');
            isValidate = true;
        }
    }
};

inputForm.forEach((el) => {
    el.addEventListener('blur', () => {
        validateElem(el);
    })
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    inputForm.forEach((el) => {
        if (el.value === '') {
            el.classList.add('invalid-input');
            isValidate = false;
        } else {
            el.classList.remove('invalid-input');
            isValidate = true;
        }
    });

    if (isValidate) {

    }
});


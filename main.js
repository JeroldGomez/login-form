const container = document.querySelector('.container'),
    passShowHide = document.querySelectorAll('.showHidePass'),
    passFields = document.querySelectorAll('.password'),
    signUp = document.querySelector('.signup_link'),
    logIn = document.querySelector('.login_link');

    // show and hide password

    passShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            passFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text"

                    passShowHide.forEach(icon => {
                        icon.classList.replace('uil-eye-slash', 'uil-eye')
                    })
                } else {
                    pwField.type = "password"

                    passShowHide.forEach(icon => {
                        icon.classList.replace('uil-eye', 'uil-eye-slash')
                    })
                }
            })
        })
    })
    
    // to appear signup and login form

    signUp.addEventListener("click", ( ) => {
        container.classList.add("active")
    })
    logIn.addEventListener("click", ( ) => {
        container.classList.remove("active")
    })
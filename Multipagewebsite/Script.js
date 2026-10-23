const contactForm = document.getElementById('contactForm');
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const formSuccess = document.getElementById('formSuccess');

            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                      e.preventDefault();
                          resetErrors();

                          if (fullName.value.trim() === '') {
                        showError(fullName, nameError, 'Full Name is required.');
                        isValid = false;
                    }
                    if (email.value.trim() === '') {
                        showError(email, emailError, 'Email address is required.');
                        isValid = false;
                    } else if (!isValidEmail(email.value.trim())) {
                        showError(email, emailError, 'Please enter a valid email address.');
                        isValid = false;
                    }if (email.value.trim() === '') {
                        showError(email, emailError, 'Email address is required.');
                        isValid = false;
                    } else if (!isValidEmail(email.value.trim())) {
                        showError(email, emailError, 'Please enter a valid email address.');
                        isValid = false;
                    }
                     if (message.value.trim() === '') {
                        showError(message, messageError, 'Message cannot be empty.');
                        isValid = false;
                    }
                     if (isValid) {
                        formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
                        contactForm.reset();
                         setTimeout(() => {
                            formSuccess.textContent = '';
                        }, 4000);
                    }
                }
            )};
             function showError(inputElement, errorElement, messageText) {
                inputElement.parentElement.classList.add('error');
                errorElement.textContent = messageText;
            }
             function resetErrors() {
                const formGroups = document.querySelectorAll('.form-group');
                formGroups.forEach((group) => group.classList.remove('error'));

                nameError.textContent = '';
                emailError.textContent = '';
                messageError.textContent = '';
                formSuccess.textContent = '';

             }
              function isValidEmail(emailVal) {
                const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return re.test(emailVal);
            }
        
            
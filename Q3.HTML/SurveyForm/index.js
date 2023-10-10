document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");

    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const closePopupBtn = document.getElementById("closePopup");

    const resultFirstName = document.getElementById("resultFirstName");
    const resultLastName = document.getElementById("resultLastName");
    const resultDob = document.getElementById("resultDob");
    const resultCountry = document.getElementById("resultCountry");
    const resultGender = document.getElementById("resultGender");
    const resultProfession = document.getElementById("resultProfession");
    const resultEmail = document.getElementById("resultEmail");
    const resultMobile = document.getElementById("resultMobile");

    submitBtn.addEventListener("click", () => {
        if (surveyForm.checkValidity()) {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const gender = document.querySelectorAll('input[name="gender"]:checked');
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            resultFirstName.textContent = firstName;
            resultLastName.textContent = lastName;
            resultDob.textContent = dob;
            resultCountry.textContent = country;
            resultGender.textContent = gender.length > 0 ? gender[0].value : "";
            resultProfession.textContent = profession;
            resultEmail.textContent = email;
            resultMobile.textContent = mobile;

            popup.style.display = "block";
        } else {
            alert("Please fill out all the required fields.");
        }
    });

    resetBtn.addEventListener("click", () => {
        surveyForm.reset();
    });

    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
        surveyForm.reset();
    });
});


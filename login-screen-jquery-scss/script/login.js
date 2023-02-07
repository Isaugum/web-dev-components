$(document).ready(function () {

    //dummy data;
    let userData = {
        domen: {
            username: "domen",
            password: "abeceda"
        }
    }

    //set default input values
    let username_input = $("#username-input").val();
    let password_input = $("#password-input").val();

    //get updated input values
    $("#username-input").on("keyup change", function() {
        username_input = this.value;
        $("#dom_element").text(username_input);
    });

    $("#password-input").on("keyup change", function() {
        password_input = this.value;
        $("#dom_element").text(username_input);
    });

    $("#register-btn").click(function(e) {
        e.preventDefault();

        if(password_input !== "" && username_input !== "") {
            
            let fetchUsers = Object.keys(userData).filter(key => key === username_input);
            console.log(fetchUsers);

            if(fetchUsers.length === 0) {

                userData = {
                    ...userData,
                    [username_input]: {
                        username: username_input,
                        password: password_input
                    }
                }

                Swal.fire({
                    title: "User added!",
                    text: "Welcome, user " + username_input,
                    confirmButtonText: "Ok",
                });

                return null;

            }
            
            Swal.fire({
                title: "Error",
                text: "Username already exists!",
                confirmButtonText: "Ok",
            })
        }
    })


    $("#login-btn").click(function(e) {
        e.preventDefault();

        console.log(username_input, ": ", password_input);
        validateInput(username_input, password_input);
    });


    //validation function
    function validateInput(username, password) {

        if(password !== "") {
            if(username in userData) {
                if(userData[username].password === password) {
                    console.log("Valid login");

                    Swal.fire({
                        title: "Valid input!",
                        text: "Welcome, user " + username,
                        confirmButtonText: "Ok",
                    })

                    $("#loginBox").remove();
                    $(".loading-box").removeClass("hidden");
                    $(".loading-box").addClass("flex");

                    return null;
                }            
            }
        }

        Swal.fire({
            title: "Error",
            text: "Invalid login!",
            confirmButtonText: "Ok",
            customClass: {
                popup: "alert-container",
                confirmButton: "alert-confirm"
            }
        });
    }


    //animation for loading
    let dot_1 = document.getElementById("dot_1");
    let dot_2 = document.getElementById("dot_2");
    let dot_3 = document.getElementById("dot_3");

    dot_1.style.transition = "150ms";
    dot_2.style.transition = "150ms";
    dot_3.style.transition = "150ms";

    dot_2.style.transitionDelay = "40ms";
    dot_3.style.transitionDelay = "80ms";

    setInterval(() => {

        let dotTimeout1 = setTimeout(() => {
            dot_1.attributes[4].value = 10;
            dot_2.attributes[4].value = 10;
            dot_3.attributes[4].value = 10;
        }, 200)
        let dotTimeout2 = setTimeout(() => {
            dot_1.attributes[4].value = 55;
            dot_2.attributes[4].value = 55;
            dot_3.attributes[4].value = 55;
        }, 400)
        let dotTimeout3 = setTimeout(() => {
            dot_1.attributes[4].value = 30;
            dot_2.attributes[4].value = 30;
            dot_3.attributes[4].value = 30;
        }, 600)

    }, 1700);

});
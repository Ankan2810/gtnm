// app.js
document.addEventListener("DOMContentLoaded", function () {
    const signUpPage = document.getElementById("sign-up");

    // Tạo một trang chính của ứng dụng
    function createSignUpPage() {
        signUpPage.innerHTML = `
        <div class="back"></div>
        <div class="signUp">
            <div class="content">
    
                <h2>Sign up</h2>
                <h3>It's quick and easy.</h3>
    
                <!-- <div class="icon">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-github"></i>
                </div> -->
            </div>
            <form onsubmit="signUp()" >        
                <div class="home">
                    <div class="input1">
                        <input  id="username" type="email" class="input-mail" autocomplete="off" required placeholder="Username">
                    </div>
    
                    <div class="input2">
                        <input  id="password" type="password" class="input-mail" autocomplete="off" required placeholder="Password">
                    </div>
    
                    <div class="input3">
                        <input  id="confirm-password" type="password" class="input-mail" autocomplete="off" required placeholder="Re-enter Password">
                    </div>
    
                    <div class="input">
                        <input type="submit" class="button" value="Sign Up">
                    </div>
                    </div>
            </form>
    
        </div>
        `;
    }
    createSignUpPage();

  function signUp(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var rePass = document.getElementById("confirm-password").value;

        if (password !== rePass) {
            alert("Passwords do not match");
            return;
        } else {
            alert("Sign up successful");
            window.location.href = "/project/signInPage/index.html";
        }

        var user = {
            username: username,
            password: password,
        };

        localStorage.setItem(username, JSON.stringify(user));
    }

    function signIn(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var user = localStorage.getItem(username);
        if (user === null) {
            alert("Username does not exist");
            return;
        }

        var data = JSON.parse(user);

        if (username === data.username && password === data.password) {
            alert("Login successful");
        } else {
            alert("Username or password is incorrect");
        }
    }
})

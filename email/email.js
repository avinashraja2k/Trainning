const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

const checkUserName = () => {
    const usr = document.getElementById("usertext").value
    var regu = /^\S\w{7,15}$/;
    if (!regu.test(usr)) {
      document.getElementById("name_error").innerHTML += "<p>Invalid username</p>"
      setTimeout(() => {
        document.getElementById("name_error").innerHTML = ""
      }, 3000)
      return false
    }
    return true
  }
  
  const checkEmail = () => {
    const email = document.getElementById("emailtext").value
    if (!email.includes("@", 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(email)) {
      document.getElementById("email_error").innerHTML += "<p>Invalid email id</p>"
      setTimeout(() => {
        document.getElementById("email_error").innerHTML = ""
      }, 3000)
      return false
    }
    return true
  }
  
  
  const checkPassword = () => {
    const password = document.getElementById("passwordtext").value
    if (!/[0-9a-zA-Z]+/.test(password)) {
      document.getElementById("password_error").innerHTML +=
        "<p>Invalid password</p>"
      setTimeout(() => {
        document.getElementById("password_error").innerHTML = ""
      }, 3000)
      return false
    }
    return true
  }
  
  document.querySelector(".green-bg button").addEventListener("click", (e) => {
    e.preventDefault()
    const validUsrName = checkUserName()
    const validEmail = checkEmail()
    const validPassword = checkPassword()
    if (validUsrName && validEmail && validPassword)
      console.log({
        userName: document.getElementById("usertext").value,
        email: document.getElementById("emailtext").value,
        password: document.getElementById("passwordtext").value,
      })
  })
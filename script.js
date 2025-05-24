let regnoEle = document.getElementById("regno");
let passwordEle = document.getElementById("password");
let buttonEle = document.getElementById("button");
let errorEle = document.getElementById("error");

buttonEle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh

    const myRegno = "23091A0576";
    const myPassWord = "23091A0576";
    let regval = regnoEle.value.trim();
    let passVal = passwordEle.value.trim();

    // Clear previous error message
    errorEle.textContent = "";
    errorEle.classList.remove("error");

    if (regval === "" || regval !== myRegno) {
        errorEle.textContent = "Enter valid Reg.No";
        errorEle.classList.add("error");
    } else if (passVal === "" || passVal !== myPassWord) {
        errorEle.textContent = "Enter valid Password";
        errorEle.classList.add("error");
    } else {
        // Success: Redirect to next page
        window.open("https://rgmexams.co.in/Home.php");
        
    }
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // stop form from submitting

      // Get input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const messageEle=document.getElementById("message").value;

      // Create an object to store
      const contactData = {
        name: name,
        email: email,
        phone: phone,
        message:messageEle
      };

      // Store in localStorage
      localStorage.setItem("contact", JSON.stringify(contactData));

      alert("Contact saved successfully!");

      //  clear form
      document.getElementById("contactForm").reset();
    });

   
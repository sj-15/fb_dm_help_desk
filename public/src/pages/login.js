document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remindMe = document.getElementById("remind-me").checked;

    try {
      const response = await fetch("http://localhost:8080/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // alert(data.message);
      if (response.ok && data.redirectTo) {
        window.location.href = data.redirectTo;
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  });

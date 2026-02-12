const backendURL = "http://localhost:3000/api";

document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const res = await fetch(`${backendURL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password, role }),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) window.location.href = "index.html";
});

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${backendURL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  const data = await res.json();
  alert(data.message);

  if (data.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else if (data.role === "user") {
    window.location.href = "user-dashboard.html";
  }
});

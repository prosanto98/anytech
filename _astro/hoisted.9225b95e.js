import "./hoisted.52995b32.js";
const n = document.getElementById("contact-us-form"),
  t = document.getElementById("result");
n.addEventListener("submit", function (s) {
  s.preventDefault();
  const i = new FormData(n),
    a = Object.fromEntries(i),
    c = JSON.stringify(a);
  (t.innerHTML = "Please wait..."),
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: c,
    })
      .then(async (e) => {
        let o = await e.json();
        e.status == 200, (t.innerHTML = o.message);
      })
      .catch((e) => {
        console.log(e), (t.innerHTML = "Something went wrong!");
      })
      .then(function () {
        n.reset(),
          setTimeout(() => {
            t.style.display = "none";
          }, 3e3);
      });
});

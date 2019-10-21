<template>
  <b-container>
    <b-row class="justify-content-center">
      <h1>GitHub Auth Demo:</h1>
      <p>
        <a href="#" id="login">Authenticate</a>
      </p>
      <p id="output"></p>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name : 'login'
}
const anchorTag = document.getElementById("login");
const outputText = document.getElementById("output");
anchorTag.addEventListener("click", e => {
  e.preventDefault();
  const authenticator = new netlify.default({
    site_id: "4e94fe81-5865-44e0-8046-1cb68199f7ce"
  });
  authenticator.authenticate(
    { provider: "github", scope: "user" },
    (err, data) => {
      err
        ? (outputText.innerText = "Error Authenticating with GitHub: " + err)
        : (outputText.innerText =
            "Authenticated with GitHub. Access Token: " + data.token);
    }
  );
});

</script>

function displayJoke(response) {
  new Typewriter("#joke-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " 😂",
  });
}
function generateJoke(e) {
  e.preventDefault();
  let topic = document.getElementById("topic");
  let apiKey = "e3ob1a5bf8tfc2b1608935b2942bc5dc";
  let context = "You are a comedian telling short jokes.";
  let prompt = `Tell a joke about ${topic.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let jokeText = document.getElementById("joke-text");
  jokeText.classList.remove("hidden");
  jokeText.innerText = "Hold on, AI is generating a joke";
  axios.get(apiURL).then(displayJoke);
  topic.value = "";
}

let jokeGenerator = document.getElementById("joke-generator");
jokeGenerator.addEventListener("submit", generateJoke);

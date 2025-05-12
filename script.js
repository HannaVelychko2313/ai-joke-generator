function generateJoke(e) {
  e.preventDefault();

  new Typewriter("#joke-text", {
    strings: "Funny Joke",
    autoStart: true,
    delay: 1,
    cursor: "😂",
  });
}

let jokeGenerator = document.getElementById("joke-generator");
jokeGenerator.addEventListener("submit", generateJoke);

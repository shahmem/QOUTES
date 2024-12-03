const qoutes = [
  "All the world’s a stage, and all the men and women merely players.",
  "Ask not what your country can do for you; ask what you can do for your country.",
  "Ask, and it shall be given you; seek, and you shall find.",
  "For those to whom much is given, much is required.",
  "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "I have always depended on the kindness of strangers.",
  "If you want something said, ask a man; if you want something done, ask a woman.",
  "Keep your friends close, but your enemies closer.",
  "Life is like a box of chocolates. You never know what you're gonna get.",
  "No one can make you feel inferior without your consent."
]
function getRandomQoutes() {
  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }
  const result = getRandomInt();
  document.getElementById('qoute').innerHTML = qoutes[result];
}
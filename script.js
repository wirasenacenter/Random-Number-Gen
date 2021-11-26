const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  // Mengacak angka dari 1 sampai 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

generateNumber();

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function ageResults() {
  try {
    const first = await luckyDraw("Tina");
    console.log(first);

    const second = await luckyDraw("Jorge");
    console.log(second);

    const third = await luckyDraw("Julien");
    console.log(third);
  } catch (error) {
    console.log(error);
  }
}

ageResults();

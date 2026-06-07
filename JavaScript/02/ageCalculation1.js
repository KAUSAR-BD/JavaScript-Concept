// A grandfather is 6 times as old as his grandson. Their ages add up to 84. How old are they?

// grandfather = 6 x grandson
// grandfather + grandson = 84


let totalAge = 84;

for (let grandson = 1; grandson < totalAge; grandson++) {

  let grandfather = 6 * grandson;

  if (grandfather + grandson === totalAge) {

    console.log("Grandson:", grandson);
    console.log("Grandfather:", grandfather);
  }
}

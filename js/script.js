for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; 
    }
    console.log(i);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log("Outer loop:", i, "Inner loop:", j);
    }
  }

  let day = 2;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
 
  default:
    console.log("Invalid day");
}

try {
    let result = 10 / 0; 
    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  }


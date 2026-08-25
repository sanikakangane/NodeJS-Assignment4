const fs = require("fs");

fs.writeFile(
    "student.txt",
    "Name: Sanika Kangane\nCourse: Full Stack Development\nTechnology: Node.js",
(err) => {
    if (err) {
    console.log("Error while creating file");
    return;
}

    console.log("File created successfully");
}
);
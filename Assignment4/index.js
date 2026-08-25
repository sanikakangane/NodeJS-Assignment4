const fs = require("fs");

fs.appendFile(
    "student.txt",
    "\nExperience: 1 Year\nCity: Kolkata",
    (err) => {
    if (err) {
    console.log("Error while updating file");
    return;
}
    console.log("Data updated successfully");
}
);

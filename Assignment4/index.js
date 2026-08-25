const fs = require("fs");

fs.rename("student.txt", "studentDetails.txt", (err) => {
    if (err) {
    console.log("Error while renaming file");
    return;
}
    console.log("File renamed successfully");
});

const fs = require("fs");

fs.unlink("studentDetails.txt", (err) => {
    if (err) {
    console.log("Error while deleting file");
    return;
}
console.log("File deleted successfully");
});

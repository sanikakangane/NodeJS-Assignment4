# NodeJS-Assignment4

A beginner-friendly Node.js file system assignment created using the built-in `fs` module.

## Tasks

1. **Create Student Information File**
2. **Read Student Information**
3. **Update Student Information**
4. **Manage File Name**
5. **Remove File**

## Project Structure

```text
├── index.js
├── package.json
├── student.txt
└── README.md
```

`student.txt` is created when the program runs. It is renamed to `studentDetails.txt` during Task 4 and deleted during Task 5.

## Concepts Used

* Node.js
* File System (`fs`) module
* `fs.writeFile()`
* `fs.readFile()`
* `fs.appendFile()`
* `fs.rename()`
* `fs.unlink()`
* Error Handling
* Callback Functions

## Tasks Performed

### Task 1 - Create Student Information File

Created `student.txt` using `fs.writeFile()` and stored student information.

```text
Name: Sanika Kangane
Course: Full Stack Development
Technology: Node.js
```

### Task 2 - Read Student Information

Used `fs.readFile()` to read the contents of `student.txt` and display them in the terminal.

### Task 3 - Update Student Information

Used `fs.appendFile()` to add additional information without removing the existing data.

```text
Experience: 1 Year
City: Kolkata
```

### Task 4 - Manage File Name

Used `fs.rename()` to rename:

```text
student.txt
```

to:

```text
studentDetails.txt
```

### Task 5 - Remove File

Used `fs.unlink()` to delete `studentDetails.txt` after completing all the operations.

## How to Run

Open the project folder in the terminal and run:

```bash
node index.js
```

The program will perform all the file operations one by one.

## Expected Output

```text
File created successfully

Student Information:
Name: Sanika Kangane
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully
File deleted successfully
```

## Author

**Sanika Kangane 👩🏻‍💻**

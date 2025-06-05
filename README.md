# Task Manager Frontend Application - README

## Overview

This is a simple task manager frontend application built for the Kuraz Internship Entrance Challenge. The application allows users to:

- View a list of tasks
- Add new tasks
- Mark tasks as completed
- Delete tasks

## Technologies Used

- [React](https://reactjs.org/) (JavaScript library for building user interfaces)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- [React Icons](https://react-icons.github.io/react-icons/) (Icon library)

## Features

- Clean, responsive UI
- Task list display with visual distinction between completed and pending tasks
- Add new tasks with form validation
- Toggle task completion status
- Delete tasks with confirmation
- Local state management (no backend required)

## Installation

1. Clone the repository:
   ```bash
   https://github.com/Mekin-jema/Kuraz-Task-Manager-App
   ```
2. Navigate to the project directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. The application will automatically open in your default browser at `http://localhost:3000`
2. To add a new task:
   - Type the task title in the input field
   - Press Enter or click the "Add" button
3. To mark a task as completed:
   - Click the checkbox next to the task
4. To delete a task:
   - Click the trash can icon next to the task
   - Confirm the deletion in the popup

## Customization

You can modify the initial task list by editing the `tasks` array in `App.js`:

```javascript
const initialTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Read a book", completed: true },
];
```

## Future Improvements

- Add task filtering (completed/pending)
- Implement task editing functionality
- Add due dates and priorities
- Persist tasks to localStorage

## Screenshots

## License

This project is open-source and available under the MIT License.

# Dropdown Component

## Overview
- The Dropdown component is a React functional component that provides a simple, interactive dropdown menu. It allows users to select an option from a predefined list, which is then displayed as the selected option.

## Features
- **Dropdown Toggle**: Opens or closes the dropdown menu.
- **Option Selection**: Updates the displayed selected option when an item is clicked.
- **Hover Interaction**: Opens the dropdown menu when the user hovers over the button.

## Installation
To use the Dropdown component, ensure you have the following dependencies:
- React
- CSS Modules (for styling)

## Component Details
- **State Management**:
    - **dropdownOpen**: Boolean state to track whether the dropdown menu is open or closed.
    - **selectedOption**: String state to store the currently selected option from the dropdown list.

- **Functions**:
    - **dropdownToggle**: Toggles the dropdownOpen state between true and false.
    - **handleList**: Sets the selected option and closes the dropdown menu.

- **Rendering**:
    - Displays a button that toggles the dropdown menu.
    - Shows a list of options when the dropdown is open.
    - Updates and displays the selected option.

## Setup Instructions

- **Clone the Repository**:
   ```sh
   git clone <repository-url>
- **Navigate to the Project Directory**:
   ```sh
   cd <project-directory>
- **Install Dependencies**:
   ```sh
   npm install
- **Start the Development Server**:
   ```sh
   npm start
- **Open Your Browser**:
   * Go to http://localhost:3000 to view the application.

## Contributing
If you have any suggestions or improvements, please create a pull request or open an issue on the repository.
## License
This project is licensed under the MIT License.
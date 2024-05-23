# Ultimate Time Quest

**Embark on The Ultimate Time Quest** is an exciting and interactive web application designed to challenge your time management skills and precision. Dive into a series of captivating time-based challenges and race against the clock to achieve the highest score. Whether you're looking to test your quick reflexes or improve your punctuality, this app provides an engaging and fun way to master the art of timing.

## Key Features

1. **Four Difficulty Levels:**
   - **BEGINNER:** A quick 1-second challenge to get you started.
   - **EASY:** A slightly longer 30-second challenge to test your initial skills.
   - **MEDIUM:** A 60-second challenge that requires more focus and precision.
   - **HARD:** A demanding 120-second challenge for the ultimate timekeepers.

2. **Personalized Experience:**
   - Enter your name and get a personalized welcome message. You will be greeted as "Timekeeper" by default, but once you set your name, it adds a personalized touch to your experience.

3. **Dynamic Timer:**
   - Start and stop the timer to see how well you can manage the time within each challenge. The timer provides real-time feedback, showing whether it’s active or inactive.

4. **Score Calculation:**
   - After each challenge, your performance is evaluated, and a score is calculated based on the remaining time. This score gives you an idea of how accurately you can stop the timer.

5. **Intuitive User Interface:**
   - The interface is designed with simplicity and ease of use in mind. Large buttons, clear indicators, and an appealing color scheme make the app visually engaging and user-friendly.

6. **Bootstrap Modal Integration:**
   - Upon completing a challenge, a Bootstrap modal pops up, showing your performance details. It displays whether you won or lost, your score, and the time you stopped the timer.

## Technical Highlights

- **React Hooks:** Utilizes React hooks like `useState`, `useRef`, and `useEffect` to manage state and side effects efficiently.
- **Bootstrap:** Integrates Bootstrap for responsive design and modals, ensuring a sleek and modern user interface.
- **Custom Components:** Components like `ChallengeCard` and `ShowModal` are designed for reusability and modularity.
- **useImperativeHandle:** This hook is used to expose a method from the `ShowModal` component to its parent, allowing it to be controlled programmatically.

## How It Works

### ChallengeCard Component
- Each challenge card represents a different difficulty level.
- Users can start or stop the timer, and their performance is tracked in real-time.
- Upon stopping the timer or when time runs out, a modal shows up displaying the results.

### ShowModal Component
- This component is responsible for displaying the results of the challenge in a modal.
- It calculates the score based on the remaining time and shows whether the player won or lost.

### Header Component
- Contains an input field for users to enter their name.
- Greets the user with a personalized welcome message.

### ChallengeBox Component
- Organizes and displays all the challenge cards in a grid layout using Bootstrap classes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Jagadeeshftw/Ultimate_Time_Quest.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Ultimate_Time_Quest
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the application on `http://localhost:5173`.

5. **Open the application in your browser:**

    Navigate to `http://localhost:5173` to see the application running.

### Building for Production

6. **Build the application:**

    ```bash
    npm run build
    ```

    This will create an optimized production build of the application in the `build` directory.

### Deployment

7. **Deploy the application:**

    Deploy the contents of the `build` directory to your preferred web hosting service.

## Contributing

We welcome contributions to enhance the project. Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes.**
4. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

5. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Submit a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

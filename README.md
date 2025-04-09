# Rebel Rover Travel Website

## Project Overview
Rebel Rover is a modern travel website built using react.js. The project aims to provide users with an intuitive platform to explore travel destinations, book trips, and access travel-related resources. The website is designed to be responsive, fast, and user-friendly, leveraging the power of react.js.

## Features

### 1. **PackagePage**
- A dedicated page to display travel packages.
- Includes dynamic rendering of package details.
- Styled for a user-friendly experience.

### 2. **Reusable Components**
- **Subscribe.tsx**: A subscription component that can be used across multiple pages.
  - Includes a form for users to subscribe to newsletters or updates.
  - Fully responsive and customizable.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Switch to this branch:
   ```bash
   git checkout <branch-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

- To view the `PackagePage`, navigate to `/packages` in the application.
- Use the `Subscribe` component by importing it into any page:
  ```tsx
  import Subscribe from '../components/Subscribe';

  const ExamplePage = () => (
    <div>
      <Subscribe />
    </div>
  );

  export default ExamplePage;
  ```

## Contributing

Feel free to submit issues or pull requests for improvements.

# DreamLog

A modern dream journaling application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌙 Log and track your dreams
- 🎨 Beautiful, responsive UI
- 🔒 Local storage for privacy
- 🎯 Emotion-based dream categorization
- 🔍 Search and filter dreams
- 📱 Mobile-first design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Storage**: Local Storage
- **Testing**: Jest + React Testing Library

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/felipegabela/dream-log.git
   cd dream-log
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Run tests and linting:
   ```bash
   npm run test
   npm run lint
   ```
5. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request against the main branch

### Development Workflow

1. **Fork the Repository**
   - Go to the repository on GitHub
   - Click the "Fork" button in the top right
   - Clone your fork locally

2. **Create a Feature Branch**
   - Always create a new branch for each feature/fix
   - Use descriptive branch names (e.g., `feature/add-dream-search`, `fix/button-styling`)

3. **Make Changes**
   - Write clean, documented code
   - Add tests for new features
   - Update documentation as needed

4. **Submit a Pull Request**
   - Push your branch to your fork
   - Create a PR against the main branch
   - Provide a clear description of your changes
   - Link any related issues

5. **Code Review**
   - Address any review comments
   - Ensure CI checks pass
   - Get approval from maintainers

## Testing

The project uses Jest and React Testing Library for testing. Tests are located in the `src/test` directory, mirroring the structure of the source code.

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Future Improvements

### CI Pipeline Enhancements

1. **End-to-End Testing**
   - Add Cypress or Playwright for E2E testing
   - Test critical user flows
   - Visual regression testing

2. **Performance Testing**
   - Integrate Lighthouse CI
   - Monitor Core Web Vitals
   - Bundle size analysis

3. **Security Scanning**
   - Add Snyk for dependency scanning
   - Configure Dependabot for automated updates
   - Security vulnerability scanning

4. **Accessibility Testing**
   - Add axe-core for accessibility checks
   - Automated WCAG compliance testing
   - Screen reader compatibility testing

5. **Code Quality**
   - Add SonarQube for code quality analysis
   - Code coverage reporting
   - Complexity analysis

6. **Deployment**
   - Staging environment setup
   - Automated deployment to staging
   - Production deployment approval workflow

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
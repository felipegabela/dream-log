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

## Development Workflows

### Solo Development (Early Stage)

When working alone on the project in its early stages:

1. **Direct Development on Main**
   ```bash
   # Make changes and commit frequently
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. **CI Protection**
   - CI pipeline runs on every push to main
   - If CI fails:
     - Code remains in the remote main branch
     - Branch is marked as "failing checks"
     - Vercel will not deploy the changes
     - You can push new commits to fix the issues
   - If CI passes:
     - Branch is marked as "passing checks"
     - Vercel automatically deploys the changes

3. **Best Practices**
   - Make small, focused commits
   - Write clear commit messages
   - Run tests locally before pushing
   - Keep the main branch deployable
   - Monitor CI status in GitHub Actions
   - Fix failing checks promptly

### Team Development (Later Stage)

When the project has multiple contributors:

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

### Development Guidelines

1. **Code Quality**
   - Write clean, documented code
   - Add tests for new features
   - Update documentation as needed
   - Follow TypeScript best practices

2. **Testing**
   - Run tests before committing
   - Add tests for new features
   - Maintain test coverage

3. **Documentation**
   - Update README for new features
   - Document API changes
   - Keep comments up to date

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
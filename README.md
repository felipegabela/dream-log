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

## Architecture Recommendations

### Current Approach: Local Storage
**Pros:**
- Simple to implement and maintain
- No server costs
- Complete privacy by default
- Fast performance (no network requests)
- No user management complexity
- Perfect for personal use

**Cons:**
- Limited cross-device access
- No backup by default (though export/import helps)
- No sharing capabilities
- Data loss risk if browser data is cleared
- Limited analytics and insights

### Alternative: Database + Users
**Pros:**
- True cross-device access
- Built-in backup
- Easy sharing capabilities
- Community features
- Analytics and insights
- Better data organization
- More professional feel

**Cons:**
- More complex to implement
- Server costs
- Privacy concerns
- User management complexity
- Performance overhead
- Maintenance requirements

### Recommended Approach: Hybrid Model
A phased approach that starts with local storage but is designed to be easily extended to a database model later:

1. **Phase 1: Enhanced Local Storage**
   - Keep the current local storage approach
   - Add robust export/import functionality
   - Implement the magic link system for temporary sharing
   - Add dream types and enhanced metadata
   - This gives you a solid foundation and validates the core features

2. **Phase 2: Optional Cloud Sync**
   - Add an optional cloud sync feature
   - Users can choose to create an account
   - Dreams can be synced across devices
   - Keep local storage as the primary storage
   - Cloud acts as a backup and sync service

3. **Phase 3: Full Database (if needed)**
   - If the app gains traction, migrate to a full database
   - Keep the local-first approach
   - Add social features
   - Implement the global dream gallery

**Advantages of the Hybrid Approach:**
- Validate core features without infrastructure costs
- Users who want privacy can stay local-only
- Magic link system provides sharing without complexity
- Gather user feedback before committing to a database
- Smoother transition to a database later
- Maintain app simplicity while allowing for growth

The magic link system is particularly valuable because:
1. It solves the cross-device problem temporarily
2. It's more secure than permanent links
3. It doesn't require user accounts
4. It's a good middle ground between local and cloud storage

## Future Features

### Data Management
- **Import/Export Functionality**
  - Export dreams to JSON/CSV file for backup
  - Import dreams from previously exported files
  - Support for cross-browser dream migration
  - Automatic backup prompts before browser data clearing

- **Cross-Device Access**
  - Cross-device synchronization
  - Magic link sharing (temporary database storage with expiration)
  - Time-limited access to exported dreams
  - Secure temporary storage solution
  - Automatic data cleanup after link expiration

### Dream Privacy & Sharing
- **Privacy Controls**
  - Private/Public dream toggle
  - Anonymous dream sharing
  - User-specific dream visibility settings
  - Secure dream storage in database

- **Global Dream Gallery**
  - Toggle between personal and global dream views
  - Anonymous dream browsing
  - Community dream exploration
  - Dream interaction features (likes, comments)

### Dream Categorization
- **Enhanced Dream Types**
  - Normal: Regular dreams
  - Nightmare: Scary or distressing dreams
  - Lucid: Dreams where you're aware you're dreaming
  - Recurrent: Dreams that repeat over time
  - Vivid: Exceptionally clear and detailed dreams
  - Multiple type selection per dream
  - Type-based filtering in gallery

- **Advanced Metadata**
  - Location tracking
  - Sleep quality indicators
  - Time of recording
  - Duration of dream
  - Associated tags and keywords

### Dream Analysis
- **Statistics and Patterns**
  - Dream statistics and patterns
  - Recurring dream detection
  - Emotion tracking and analysis
  - Sleep quality correlation
  - Dream frequency analysis

### AI-Assisted Dream Writing
- **Text Enhancement**
  - AI-powered dream text enhancement
  - Grammar and structure improvement
  - Tone and feeling preservation
  - Core dream narrative protection
  - Optional AI suggestions for missing details
  - Customizable enhancement levels
  - Original vs. enhanced version comparison

- **Features**
  - Maintain dream authenticity while improving readability
  - Preserve emotional core and key details
  - Enhance narrative flow and coherence
  - Optional AI-generated details to fill gaps
  - Multiple enhancement style options
  - Version history tracking
  - User-controlled enhancement parameters

### Gallery Enhancements
- **Advanced Filtering**
  - Filter by dream type
  - Filter by date range
  - Filter by emotions
  - Filter by location
  - Filter by privacy status

- **Search Improvements**
  - Full-text search
  - Tag-based search
  - Emotion-based search
  - Type-based search
  - Advanced search operators

## Technical Implementation

### Data Storage
- Local storage for private dreams
- Temporary database for magic link sharing
- Future: User authentication and cloud storage

### Magic Link System
1. User exports dreams to temporary storage
2. System generates a unique, time-limited link
3. Link can be shared across devices
4. Data automatically expires after set time
5. Dreams can be imported on new device/browser

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
# Contributing to OpenChurchCMS

Thank you for your interest in contributing to OpenChurchCMS. This document outlines the process for contributing to this project.

## ways to Contribute

- Reporting bugs
- Suggesting new features or enhancements
- Improving documentation
- Submitting pull requests (bug fixes, new features, tests)
- Translations and localization

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Code Standards

- Use Vue 3 `<script setup>` SFCs
- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments when necessary for complex logic

## Submitting Changes

1. Push your changes to your fork
2. Create a pull request against the main branch
3. Fill out the PR template completely
4. Respond to any feedback in a timely manner

## Pull Request Process

- All PRs require review before merging
- Ensure all tests pass (if applicable)
- Update documentation if your changes affect APIs
- Keep PRs focused and reasonably sized

## Commit Messages

Use clear, descriptive commit messages:
- `fix: resolve login redirect issue`
- `feat: add event calendar component`
- `docs: update installation instructions`

## Reporting Bugs

Check existing issues before reporting. Include:
- Clear bug description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, etc.)
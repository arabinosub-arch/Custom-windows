# Contributing to Custom Windows

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome new contributors
- Focus on constructive feedback
- Report issues professionally

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Follow the development guide in `docs/DEVELOPMENT.md`

## Making Changes

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages
- Use clear, descriptive messages
- Start with a verb: "Add", "Fix", "Update", etc.
- Keep first line under 50 characters
- Add details in the body if needed

Examples:
```
Add Windows 11 theme support

Add File Explorer component

Fix taskbar height issue on Linux
```

### Code Standards

**TypeScript/JavaScript:**
- Run `npm run lint` before committing
- Run `npm run format` to format code
- Use meaningful variable names
- Add JSDoc comments for complex functions

**React:**
- Use functional components
- Type all props with interfaces
- Keep components focused and small
- Use custom hooks for reusable logic

**CSS:**
- Use CSS variables for theming
- Follow mobile-first approach
- Use meaningful class names
- Keep specificity low

## Testing

- Add tests for new features
- Ensure all tests pass: `npm run test`
- Test on multiple platforms if possible

## Submitting Changes

1. Push to your fork
2. Create a Pull Request with:
   - Clear title describing the change
   - Description of what and why
   - Related issues (if any)
   - Screenshots for UI changes
   - Testing steps

3. Respond to review feedback promptly
4. Keep PR focused on single feature/fix

## Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #(issue number)

## Testing
Steps to test the changes

## Screenshots
(If applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests pass
- [ ] No new warnings generated
```

## Reporting Bugs

Create an issue with:
1. **Title**: Clear, specific description
2. **Description**: What happened vs expected
3. **Steps to Reproduce**: Step-by-step instructions
4. **Environment**: OS, version, Node.js version
5. **Attachments**: Screenshots, logs, error messages

## Feature Requests

Create an issue with:
1. **Title**: Feature description
2. **Motivation**: Why is this needed?
3. **Proposed Solution**: How should it work?
4. **Alternatives**: Other solutions considered

## Review Process

- Maintainers review all PRs
- Feedback aims to improve code quality
- Changes may be requested before merging
- Merged PRs are included in releases

## Recognition

Contributors will be recognized in:
- README.md
- Release notes
- Contributor list

## Questions?

- Open a discussion on GitHub
- Check existing documentation
- Ask in issues respectfully

Thank you for making Custom Windows better! 🎉

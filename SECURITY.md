# Security Policy

## Supported Versions

The following versions of OpenChurchCMS are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please do NOT open a public issue. Instead, report it privately to allow time for a fix before disclosure.

### How to Report

1. **Do NOT** create a public GitHub issue
2. Email the project maintainer directly with details:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any proposed fixes (optional)

3. Please allow reasonable time for a response before resending

## What to Expect

- **Acknowledgment**: You should receive acknowledgment within 48 hours
- **Timeline**: We aim to provide a fix or mitigation within 7 days
- **Disclosure**: Full details will be published after a fix is available

## Security Best Practices

When contributing code or reporting issues, consider:

- Never expose sensitive credentials or keys in code or commits
- Use environment variables for sensitive configuration
- Validate and sanitize all user inputs
- Follow secure coding practices for the frameworks used (Vue 3, Vite)

## Scope

This security policy applies to:
- The main codebase
- Official releases and distributions
- Documentation related to the project

Out of scope:
- Third-party services or integrations not maintained by this project
- User-generated content stored externally
# Contributing

Thanks for your interest in contributing to @jobuntux/psgc! We welcome bug reports, feature requests, and pull requests. This guide will help you get started.

- Please review the [Code of Conduct](./github/CODE_OF_CONDUCT.md) to understand our community standards.
- Security issues? Check our [Security Policy](./github/SECURITY.md).

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/<your-username>/psgc.git
    cd psgc
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4. Build the project:
    ```bash
    npm run build
    ```

5. Run tests to confirm everything works:
    ```bash
    npm test
    ```

## Development Workflow

- Branch off from "dev" for new features or fixes.
- Use clear commit messages. We follow Conventional Commits, for example:
    ```plaintext
    feat: add new barangay lookup
    fix: correct region ordering for NCR
    chore: update dependencies
    ```

- Before submitting a pull request:
  Run `npm run lint` and `npm test`
  Ensure the docs build with `npm run docs:build`

## Reporting Issues

To report an issue, please use the GitHub Issues tab and provide as much detail as possible, including clear steps to reproduce, the PSGC dataset version you’re using, and the expected versus actual behavior. If the issue relates to dataset quirks (for example, submunicipalities such as Binondo), include references or links to the official PSA source for context.

### 🐛 Issues & 💡 Features
- Found a bug? [Open a Bug Report](https://github.com/jobuntux/psgc/issues/new?template=bug_report.yml)
- Have an idea? [Request a Feature](https://github.com/jobuntux/psgc/issues/new?template=feature_request.yml)
- Docs unclear? [Suggest a Docs Update](https://github.com/jobuntux/psgc/issues/new?template=docs_request.yml)

## Submitting Changes

1. Push your branch to your fork.
2. Open a Pull Request against the "dev" branch.
3. Describe your changes clearly (what, why, how).
4. The maintainers will review, request changes if needed, and merge.

### 🔀 Pull Requests

When opening a PR, please select the type that best describes your changes:
- ✨ Feature
- 🐛 Bugfix
- 📖 Docs Update
- 🛠 Chore / Maintenance

👉 Open a Pull Request at https://github.com/jobuntux/psgc/compare

You can also pre-fill the PR description by adding a template parameter to the URL:
- `&template=feature.md`
- `&template=bugfix.md`
- `&template=docs.md`
- `&template=chore.md`

Example using dev as the base branch, temp as your branch, and the bugfix.md template:

https://github.com/jobuntux/psgc/compare/dev...temp?expand=1&template=bugfix.md
![PR Template](/public/pr-template.png)

## Code Style

- TypeScript is used throughout.
- Use ESLint + Prettier (already configured).
- Avoid mutating internal state. Prefer returning new arrays or objects.

## Docs

Documentation is powered by VitePress. To run locally:
  ```bash
  npm run docs:dev
  ```

When contributing:
- Add guides/examples in `/docs/guide/` or `/docs/examples/`
- Dev-related notes (like this page) go in `/docs/dev/`

## Release Process

- dev branch is for feature development
- main branch is for stable release
- Publishing to npm is automated via GitHub Actions when a version tag is pushed

<div style="padding:4rem 0; text-align:center;">
  <h1 style="color:#3178c6; font-weight:bold; margin:0;">
    ✦ Thank you for contributing! ✦
  </h1>
</div>

# Contributing

Thanks for your interest in contributing to @jobuntux/psgc! We welcome bug reports, feature requests, and pull requests. This guide will help you get started.

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

<ul>
  <li>Found a bug? <a href="https://github.com/jobuntux/psgc/issues/new?template=bug_report.yml" target="_blank">Open a Bug Report</a></li>
  <li>Have an idea? <a href="https://github.com/jobuntux/psgc/issues/new?template=feature_request.yml" target="_blank">Request a Feature</a></li>
  <li>Docs unclear? <a href="https://github.com/jobuntux/psgc/issues/new?template=docs_request.yml" target="_blank">Suggest a Docs Update</a></li>
</ul>

## Submitting Changes

1. Push your branch to your fork.
2. Open a Pull Request against the "dev" branch.
3. Describe your changes clearly (what, why, how).
4. The maintainers will review, request changes if needed, and merge.

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

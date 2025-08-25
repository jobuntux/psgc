# Tests

[![Tests](https://github.com/jobuntux/psgc/actions/workflows/ci.yml/badge.svg)](https://github.com/jobuntux/psgc/actions/workflows/ci.yml)

This project uses Vitest to ensure the PSGC dataset and utilities are consistent.

## Running tests locally

```bash
npm test
```

### Sample test

```typescript
import { listRegions } from '@jobuntux/psgc';

test('listRegions returns 18 regions', () => {
  expect(listRegions()).toHaveLength(18)
})
```

## Continuous Integration

Tests are also run automatically in GitHub Actions for every push and pull request.

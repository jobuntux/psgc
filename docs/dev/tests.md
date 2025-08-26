# Tests

[![Tests](https://github.com/jobuntux/psgc/actions/workflows/ci.yml/badge.svg)](https://github.com/jobuntux/psgc/actions/workflows/ci.yml)

Jest is used in this project to verify the consistency of the PSGC dataset and utilities.

## Running tests locally

```bash
npm test
```

### Sample test

```typescript
import { listRegions } from "../src/core/regions";
import { totalRegionsCount } from "../tools/constants";

describe("listRegions", () => {
  let regions: ReturnType<typeof listRegions>;

  beforeAll(() => {
    regions = listRegions();
  });

  it("should list all 18 regions", () => {
    expect(regions).toBeDefined();
    expect(Array.isArray(regions)).toBe(true);
    expect(regions.length).toBe(totalRegionsCount);
  });
```

## Continuous Integration

Tests are also run automatically in GitHub Actions for every push and pull request.

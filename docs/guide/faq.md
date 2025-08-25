# FAQ

## What is PSGC?

PSGC stands for **Philippine Standard Geographic Code**.  
It is an official classification of regions, provinces, cities/municipalities, and barangays in the Philippines.

## Is this package official?

No.  
This package is community-maintained and **not an official PSA (Philippine Statistics Authority) product**.  
It uses data from official PSA PSGC releases but is distributed independently.

## How often is the data updated?

The data is updated when the **PSA releases new quarterly PSGC updates**.  
Check the [PSA website](https://psa.gov.ph/classification/psgc/) for the latest source files.

## How big is the dataset?

- Around **42,000+ barangays**  
- **1,600+ municipalities/cities**  
- **80+ provinces**  
- **17+ regions**  

## Does it work offline?

Yes.  
The dataset is bundled in JSON format within the package, so you don’t need an internet connection to use it.

## Can I use it in both frontend and backend?

Yes.  
The package is written in TypeScript and can be used in:
- Frontend apps (React, Vue, etc.)
- Backend apps (Node.js, Express, NestJS, etc.)

## Does it support searching?

Not directly.  
This package focuses on **structured listings**.  
If you need searching, you can easily filter results using JavaScript’s `.filter()` or by integrating with your own search library.

## Will codes change over time?

Yes.  
Barangay names, municipality classifications, and even region definitions may change across releases.  
Always check release notes or changelogs for differences when updating.

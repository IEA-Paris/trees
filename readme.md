# Types Project

This project provides type definitions and utilities for various modules in the system. It includes interfaces, schemas, and configuration for different entities like projects, news, people, and more.

## Table of Contents

- [Types Project](#types-project)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Structure](#structure)
  - [Modules](#modules)
    - [Projects](#projects)
    - [News](#news)
    - [People](#people)
    - [Fellowships](#fellowships)
    - [Publications](#publications)
    - [Events](#events)
    - [Other Modules \& submodules](#other-modules--submodules)
  - [Contributing](#contributing)
  - [Repository Update Convention](#repository-update-convention)
  - [License](#license)

## Installation

To install the dependencies, run:

```bash
yarn add @paris-ias/data
```

## Usage

A precompiled version of the common objects is produced during CI. It is available in the `dist` folder. It can be imported to produce lists and forms using the related packages produced by Paris IAS.

You can also import and use the types and utilities provided by this project in your code as follows:

```ts
import { projects, news, people } from '@paris-ias/data';

// Example usage

```
## Structure


## Modules

### Projects

Provides type definitions and utilities for handling projects.

### News

Provides type definitions and utilities for handling news articles.

### People

Provides type definitions and utilities for handling people entities.

### Fellowships

### Publications

### Events

### Other Modules & submodules

- Tags
- Image
- Affiliations
  - Positions
- Consent
- Files
- Related
  - Related Projects
  - Related Publications
  - Related News
  - Related Events
  - Related People

## Contributing

We welcome contributions to this project. Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## Repository Update Convention

We follow the semantic versioning convention to upgrade the repository version [semver](https://semver.org/).

- For a major change in the project, upgrade the package version using:

  ```bash
  npm version major
  ```

- For a minor change, use the command:

  ```bash
  npm version minor
  ```

- For a fix (patch), use:

  ```bash
  npm version patch
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
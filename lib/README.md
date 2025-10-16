# Type Generation Scripts

This directory contains scripts for generating type definitions, schemas, and GraphQL client files for the Paris IAS data management system.

## Overview

The generation process consists of three main tasks:

1. **Module Generation** (`generate.ts`) - Creates type modules and configurations
2. **Schema Generation** (`buildSchemas.ts`) - Builds GraphQL schemas and resolver lists
3. **GraphQL Client Generation** (`buildClientGraphQL.ts`) - Copies and organizes client GraphQL files

## Unified Generation

### Main Command

```bash
npm run generate
```

This runs the unified generation script (`generateAll.ts`) that orchestrates all three tasks and provides a single consolidated overview instead of three separate outputs.

### Individual Commands

If you need to run specific tasks:

```bash
npm run generate:modules    # Module generation only
npm run generate:schemas    # Schema generation only
npm run generate:client     # GraphQL client generation only
```

## Generated Output

The unified generation provides a clean summary:

```
============================================================
📊 GENERATION SUMMARY
============================================================
🕐 Total Duration: 3001ms
📈 Success Rate: 3/3 tasks completed

✅ Completed Tasks:
   • Generate Modules: 14/14 modules (1215ms)
   • Generate Schemas: 2 schemas + resolvers (1026ms)
   • Generate GraphQL Client: 31 files, 12 types (760ms)

🎉 All generation tasks completed successfully!
============================================================
```

## Generated Structure

After running the generation, the following structure is created:

```
dist/
├── form/                           # Module form configurations
├── list/                           # Module list configurations
├── graphql/
│   ├── schemas/                    # Generated GraphQL schemas
│   │   ├── schema.website.graphql
│   │   ├── schema.apex.graphql
│   │   ├── website-resolvers-list.json
│   │   └── apex-resolvers-list.json
│   └── client/                     # GraphQL client operations (minimal output)
│       ├── action/
│       │   ├── query.get.action.gql
│       │   └── query.list.action.gql
│       ├── publications/
│       │   ├── query.get.publications.gql
│       │   └── query.list.publications.gql
│       └── ... (other types)
```

**Note**: Only `.gql` files are generated since client applications import them directly.

---

# GraphQL Client Builder

This directory contains the `buildClientGraphQL.ts` script that automatically copies and organizes all GraphQL client operations from the source directories to the distribution folder.

## Overview

The script processes all GraphQL client files located in `src/[type]/graphql/client/` directories and copies them to `dist/graphql/client/[type]/` with proper TypeScript support.

## Features

- **Automatic Discovery**: Finds all `.gql` and `.graphql` files in client directories
- **Organized Structure**: Maintains type-based organization in the dist folder
- **Minimal Output**: Only copies essential `.gql` files (no unnecessary TypeScript files)
- **Direct Import Ready**: Optimized for direct `.gql` file imports in client applications
- **Operation Detection**: Identifies query, mutation, and subscription operations

## Usage

### Build Script

```bash
npm run build:client-graphql
```

### Manual Execution

```bash
npx tsx lib/buildClientGraphQL.ts
```

### Programmatic Usage

```typescript
import { buildClientGraphQL } from "./lib/buildClientGraphQL.ts"

// Use default configuration
buildClientGraphQL()

// Use custom configuration
buildClientGraphQL({
  srcDir: "./custom/src",
  distDir: "./custom/dist",
  extensions: [".gql"],
  generateDeclarations: false,
})
```

## Generated Structure

After running the script, the following structure is created:

```
dist/graphql/client/
├── index.ts                    # Main export file
├── action/
│   ├── index.ts               # Action type exports
│   ├── query.get.action.gql
│   ├── query.get.action.d.ts
│   └── ...
├── publications/
│   ├── index.ts               # Publications type exports
│   ├── query.get.publications.gql
│   ├── query.get.publications.d.ts
│   └── ...
└── ... (other types)
```

## Client Usage

Once built, client applications can import GraphQL operations like this:

```typescript
// Import specific operations
import { GET_PUBLICATIONS, LIST_PUBLICATIONS } from '@paris-ias/trees/dist/graphql/client/publications'

// Import all operations for a type
import * as publicationsQueries from '@paris-ias/trees/dist/graphql/client/publications'

// Import all operations
import * as graphqlClient from '@paris-ias/trees/dist/graphql/client'

// Use with Apollo Client, Relay, or other GraphQL clients
const client = new ApolloClient({...})
const result = await client.query({
  query: GET_PUBLICATIONS,
  variables: { appId: 'iea', itemId: '123' }
})
```

## Configuration Options

| Option                 | Type     | Default                  | Description                                                                         |
| ---------------------- | -------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `srcDir`               | string   | `../src`                 | Source directory containing type folders                                            |
| `distDir`              | string   | `../dist/graphql/client` | Destination directory for built files                                               |
| `extensions`           | string[] | `['.gql', '.graphql']`   | File extensions to process                                                          |
| `generateDeclarations` | boolean  | `false`                  | Whether to generate TypeScript declaration files (disabled for direct .gql imports) |
| `generateIndexFiles`   | boolean  | `false`                  | Whether to generate TypeScript index files (disabled for direct .gql imports)       |

## Integration with Build Process

The script is integrated into the main build process:

1. `npm run clean` - Removes the dist directory
2. `npm run generate` - Generates type definitions and schemas
3. `npm run build:client-graphql` - Builds GraphQL client files
4. `npm run build` - Runs all build steps

## File Naming Conventions

The script recognizes the following naming patterns:

- `query.*` - GraphQL queries
- `mutation.*` or `*.mutations.*` - GraphQL mutations
- `subscription.*` - GraphQL subscriptions

## Error Handling

The script includes comprehensive error handling:

- Missing directories are reported but don't stop the build
- File copy errors are logged and re-thrown
- TypeScript declaration generation errors are handled gracefully

## Development

To modify the build process:

1. Edit `lib/buildClientGraphQL.ts`
2. Test with `npm run build:client-graphql`
3. Check the generated files in `dist/graphql/client/`

The script is designed to be extensible and can be modified to support additional file types, custom transformations, or different organization patterns.

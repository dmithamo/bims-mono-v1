#!/bin/bash

# Set variables
COMPONENT_NAME=$1

# Error handling: Ensure component name is provided
if [[ -z "$COMPONENT_NAME" ]]; then
  echo "Error: Please provide a name for the component as the first argument."
  exit 1
fi

COMPONENT_DIR="libs/bims-ui/src"

# Check if component directory already exists
if [[ -d "${COMPONENT_DIR}/lib/${COMPONENT_NAME}" ]]; then
  echo "Error: Component directory already exists."
  exit 1
fi

# Generate component using Nx shell
nx g @nrwl/angular:component $COMPONENT_NAME --directory "${COMPONENT_DIR}/lib/${COMPONENT_NAME}"

# Check if component directory exists
if [[ ! -d "${COMPONENT_DIR}/lib/${COMPONENT_NAME}" ]]; then
  echo "Error: Component directory not found. Generation might have failed."
  exit 1
fi

# Update index.ts to export the component
INDEX_FILE="${COMPONENT_DIR}/index.ts"

# Ensure index.ts exists (create if needed)
if [[ ! -f "$INDEX_FILE" ]]; then
  touch "$INDEX_FILE"
  echo "// This file automatically exports all components from this directory." >> "$INDEX_FILE"
fi

# Add export statement for the newly created component
echo "export * from './lib/${COMPONENT_NAME}/${COMPONENT_NAME}.component';" >> "$INDEX_FILE"

echo "Component '${COMPONENT_NAME}' generated and exported successfully!"

#!/bin/bash
# Build Angular frontend for Spring Boot bundling
# This script is used during Heroku deployment

set -e

echo "==> Building Angular frontend..."

# Navigate to frontend directory
cd ../westwood-frontend

# Install dependencies
npm ci

# Build for production (outputs to ../westwood-backend/src/main/resources/static)
npm run build

echo "==> Frontend build complete!"

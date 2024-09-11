# Bump version (patch)
npm version patch --no-git-tag-version

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

# Run build
npm run build

# Commit changes
git add .
git commit -m "Build: $NEW_VERSION"

# Tag the commit
git tag v$NEW_VERSION

echo "Build completed and tagged as v$NEW_VERSION"
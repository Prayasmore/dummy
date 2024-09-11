# Ensure we're on the main branch
if [[ $(git rev-parse --abbrev-ref HEAD) != "main" ]]; then
    echo "Error: Please run this script from the main branch"
    exit 1
fi

# Bump version (patch)
npm version patch --no-git-tag-version

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

# Run build
npm run build

# Stage all changes
git add .

# Create a merge commit
git commit --allow-empty -m "Merge feature branch and bump version to $NEW_VERSION"

# Tag the commit
git tag v$NEW_VERSION

echo "Build completed and tagged as v$NEW_VERSION"
echo "To push changes: git push origin main && git push origin v$NEW_VERSION"
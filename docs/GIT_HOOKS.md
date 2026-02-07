# Git Hooks Documentation

## Pre-Push Hook

**Location:** `.git/hooks/pre-push`

A pre-push hook has been configured to run automated checks before pushing code to the remote repository.

### What It Does

The pre-push hook runs three checks:

1. **TypeScript Type Checking** - Ensures all TypeScript code compiles without errors
2. **ESLint** - Verifies code quality and catches potential bugs
3. **Build Verification** - Confirms the build output exists and is valid

### How It Works

```bash
cd demo-site
npm run build      # TypeScript compilation + Vite build
npm run lint       # ESLint checks
# Verify demo/index.html exists
```

If any check fails, the push is **blocked** until the issues are resolved.

### Running Checks Manually

You can run the pre-push checks manually without attempting a push:

```bash
# Run all checks
cd demo-site && npm run pre-push

# Or run individually:
npm run type-check    # TypeScript only
npm run lint          # ESLint only
npm run build         # Full build
```

### Bypassing the Hook (Not Recommended)

In rare cases where you need to push without running checks:

```bash
git push --no-verify
```

**Warning:** Only use `--no-verify` when absolutely necessary (e.g., emergency hotfix, CI will catch issues).

### Example Output

**Success:**
```
Running pre-push checks...

[1/3] Running TypeScript type check...
✓ TypeScript check passed

[2/3] Running ESLint...
✓ Linting passed

[3/3] Verifying build output...
✓ Build verification passed

✓ All pre-push checks passed! Pushing...
```

**Failure:**
```
Running pre-push checks...

[1/3] Running TypeScript type check...
✗ TypeScript compilation failed!
Run 'cd demo-site && npm run build' to see errors

error: failed to push some refs to 'origin'
```

## Future Enhancements

When tests are added:
1. Install vitest: `npm install -D vitest @vitest/ui @testing-library/react`
2. Add test script: `"test": "vitest run"`
3. Update pre-push hook to include: `npm test`

## Maintenance

The pre-push hook is stored in `.git/hooks/pre-push` and is **not tracked by git** (git ignores the `.git` directory). To share the hook with other developers:

1. Copy the hook to a tracked location (e.g., `scripts/pre-push`)
2. Add installation instructions to README
3. Or use a tool like `husky` to manage git hooks in the repository

---

**Last Updated:** February 7, 2026

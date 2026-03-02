Run a conventional commit workflow:

1. Run `npm run typecheck` and `npm run build` — if either fails, fix the issues before continuing
2. Run `git diff --cached` and `git diff` to analyze all changes
3. Run `git status` to see untracked files
4. Generate a commit message following conventional commits with emoji prefixes:
   - ✨ feat: new feature
   - 🐛 fix: bug fix
   - ♻️ refactor: code restructuring
   - 💄 style: styling/UI changes
   - 📝 docs: documentation
   - 🔧 chore: tooling/config
   - 🎨 design: design system changes
5. Stage relevant files (prefer specific files over `git add -A`)
6. Show me the proposed commit message and wait for approval before committing
7. Create the commit

Keep the subject line under 72 characters. Add a body with bullet points if there are multiple logical changes.

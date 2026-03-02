Help me create a new Claude Code hook (not a React hook).

Walk me through this interactively:

1. **What event should trigger the hook?** Ask me to choose from:
   - `PreToolUse` — runs before a tool executes (can block it)
   - `PostToolUse` — runs after a tool executes
   - `Notification` — runs when Claude sends a notification
   - `Stop` — runs when Claude stops generating
   - `SubagentStop` — runs when a subagent finishes
   - `UserPromptSubmit` — runs when user submits a prompt

2. **What tool matcher?** (for PreToolUse/PostToolUse only)
   - Ask which tool(s) to match (e.g., `Edit`, `Write`, `Bash`, etc.)

3. **What should the hook do?** Ask me to describe the behavior, then:
   - Write the script (bash or python) to `~/.claude/hooks/` or `.claude/hooks/`
   - Make it executable
   - Add the hook entry to the appropriate settings file:
     - Project hooks → `.claude/settings.local.json`
     - Global hooks → `~/.claude/settings.json`

4. **Show the hook configuration** as JSON and confirm before writing

Hook configuration format:
```json
{
  "hooks": {
    "<event>": [
      {
        "matcher": "<tool_name>",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/script.sh"
          }
        ]
      }
    ]
  }
}
```

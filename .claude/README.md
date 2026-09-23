# Claude Code setup

## Skills

| Skill | Path | Purpose |
|---|---|---|
| `tailwindcss` | [skills/tailwindcss/SKILL.md](skills/tailwindcss/SKILL.md) | Tailwind CSS v4 conventions: CSS-first config, `@theme` tokens, class authoring |
| `react` | [skills/react/SKILL.md](skills/react/SKILL.md) | React 19 + React Compiler rules, effects, component and state patterns ([references](skills/react/references/)) |

## Note on skill placement

The Tailwind skill is kept in the repo so the full Claude setup is visible alongside the code. A better approach for real-world use:

- A general Tailwind v4 skill isn't specific to this project. If you write Tailwind in other repos, copying it into each one means the copies drift apart. Put the general version in `~/.claude/skills/`, or in a plugin if others will use it.
- Keep only project-specific rules in the repo, e.g. a short `dashboard-ui` skill with v4 gotchas, this dashboard's design tokens, component patterns (`cn()`, `cva`), and the dark mode strategy.
- Keep `SKILL.md` lean and move detailed catalogs into `references/*.md`, so they load only when relevant.

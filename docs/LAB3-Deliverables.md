# Lab 3 — Secure Pull Request Workflow (PR Gate)

## Objective
- Require Pull Requests and enforce branch protection.

## Steps to Configure Branch Protection (GitHub UI)
- Navigate to `Settings → Branches → Branch protection rules`.
- Click `Add rule` and set `Branch name pattern` to `main`.
- Enable:
  - `Require a pull request before merging`.
  - `Require approvals` and set `Required approving reviewers` to `1`.
  - `Require status checks to pass before merging`.
  - Select required checks:
    - `CodeQL`.
    - `Gitleaks Secret Scan`.
    - `Dependency Review` (now always appears and passes on private repos).
  - (Optional) `Require branches to be up to date before merging`.
  - Save the rule.

Note: You need admin access to the repository to set branch protection. If you do not have it, ask an instructor/admin to apply the rule.

## Create Feature Branch and Open PR
- Run:
  - `git checkout -b feature/fix-logging`
  - Append a change (e.g., `// improve logging`) to `backend/app.js`
  - `git add . && git commit -m "Improve logging"`
  - `git push --set-upstream origin feature/fix-logging`
- Open a Pull Request from `feature/fix-logging` into `main`.

## Expected Behavior
- PR shows `Merging is blocked` until:
  - All required checks are green.
  - At least 1 reviewer approves.
- After approval and checks pass, the PR merges successfully and `main` is updated.

## Deliverables
- Screenshot: PR blocked before review (`Merging is blocked`).
- Screenshot: After review, PR merges successfully; `main` updated.

## Troubleshooting
- Required checks not listed:
  - Ensure workflows ran at least once on the repository so checks appear in the selection list.
  - For private repos without GHAS: Dependency Review is provided via a placeholder step that passes; it can be selected.
- Checks not passing:
  - Review Actions logs for `CodeQL`, `Gitleaks Secret Scan`, and `Dependency Review`.
  - Re-run failed jobs; ensure latest changes are pushed.
# Lab 1 — Run CodeQL & Secret Scans: Deliverables

Use this file to collect all required evidence. Replace the placeholders below with your screenshots.

## Direct Links
- CodeQL alerts: https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/code-scanning
- Secret scanning alerts: https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/secret-scanning
- Dependabot alerts: https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/dependabot
- Create PR (lab1-trigger → main): https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/pull/new/lab1-trigger

## Evidence

### 1) CodeQL Alerts (/security/code-scanning)
- Screenshot: Paste here
- Notes: Include status (success/no alerts) and any findings listed.

### 2) Secret Scan Alerts (/security/secret-scanning)
- Screenshot: Paste here
- Notes: It’s acceptable if this shows no alerts; Gitleaks uploads SARIF to Code Scanning, not Secret Scanning.

### 3) Dependency Review Alert List (/security/dependabot)
- Screenshot: Paste here
- Notes: This may show “no alerts”. On the PR, also capture the “Checks” panel showing the Dependency Review job status.

## Run Status (Actions)
- CodeQL: Screenshot of latest run from Actions page.
- Gitleaks Secret Scan: Screenshot of latest run from Actions page.
- Dependency Review (PR only): Screenshot of the PR “Checks” panel (skipped/success).

## Lab 1 Completion Checklist
- [ ] PR from `lab1-trigger` to `main` is open or refreshed
- [ ] CodeQL alerts page screenshot added
- [ ] Secret scanning alerts page screenshot added
- [ ] Dependabot alerts page screenshot added
- [ ] PR Checks panel screenshot added (CodeQL, Gitleaks, Dependency Review)
- [ ] Each screenshot has a short caption explaining the state (enabled/skipped/no alerts)
- [ ] Optional: evidence of re-run (Actions page or new commit triggering workflows)

## Troubleshooting
- Private repo without GHAS:
  - Dependency Review may be “unsupported”. Our workflow skips it and is non‑blocking.
  - You can still screenshot the Dependabot page and the PR “Checks” panel.
- Need scans to re-run: make a tiny change and push, or use the Actions “Re-run all jobs” button.

## Optional (If you want actual alerts)
- Secret Scanning: enable it, then commit a dummy token format (e.g., fake `ghp_...`) in a throwaway file; do not use real secrets.
- Dependabot: enable Dependency graph + alerts, then in a PR add a known vulnerable version to `package.json` to trigger an alert.
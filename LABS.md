# Labs Overview
- Lab 1: Run CodeQL & Secret Scan
- Lab 2: Fix SQL Injection & Secret Leak
- Lab 3: Secure PR workflow with Branch Protection
- Lab 4: Dependency & Secret Management with Dependabot

## Lab 1 — Deliverables & Evidence

- Branch used: `lab1-trigger`
- Actions triggered on push: `CodeQL`, `Gitleaks Secret Scan`
- Action triggered on PR: `Dependency Review`

### Direct Links
- CodeQL alerts: `https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/code-scanning`
- Secret scanning alerts: `https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/secret-scanning`
- Dependabot alerts: `https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/security/dependabot`
- Open PR: `https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/pull/new/lab1-trigger`

### Screenshot Checklist
- Code Scanning alerts page showing results or “no alerts”.
- Secret Scanning alerts page (even if empty).
- Dependabot alerts page (even if empty) and PR “Checks” showing `Dependency Review` run.

### Notes
- If `Dependency Review` reports “not supported”, enable `Settings → Code security and analysis → Dependency graph` and `Dependabot alerts`. Private repos may also require GitHub Advanced Security enabled by the org.
- Gitleaks uploads SARIF to Code Scanning; native Secret Scanning may remain empty unless GitHub detects a token pattern.

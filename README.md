# GitHub Security Lab Starter (KOSEN-KMITL)
start lab

Quick links:
- Lab 1 deliverables: `docs/LAB1-Deliverables.md`
 - Lab 3 deliverables: `docs/LAB3-Deliverables.md`

Build status:
- CodeQL: ![CodeQL](https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/actions/workflows/codeql.yml/badge.svg?branch=lab1-trigger)
- Gitleaks Secret Scan: ![Gitleaks](https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/actions/workflows/secret-scan.yml/badge.svg?branch=lab1-trigger)
- SBOM: ![SBOM](https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/actions/workflows/sbom.yml/badge.svg?branch=lab1-trigger)
- Dependency Review (PR): ![Dependency Review](https://github.com/KOSENKMITL/github-advanced-security-2-individual-Kairan-Theo/actions/workflows/dependency-review.yml/badge.svg?branch=lab1-trigger)

This repository is used in the **Secure Software Development / DevSecOps laboratory**.  
It provides a deliberately vulnerable codebase and pre-configured GitHub security automation
(CodeQL, Secret Scanning, Dependency Review, and Pull Request Protection) to allow students
to learn practical secure development techniques.

---

## 1. Learning Objectives

After completing this lab series, students will be able to:

- Identify insecure coding patterns (e.g., SQL Injection, hardcoded secrets).
- Use **CodeQL** to analyze data flows and detect real-world security vulnerabilities.
- Detect leaked credentials using **Secret Scanning** and enforce leak prevention.
- Manage supply chain risks using **Dependency Review** and **Dependabot**.
- Apply secure development workflows using **Pull Requests and Branch Protection**.
- Understand how security fits into a modern **DevSecOps** pipeline.

---

## 2. Lab Timeline & Tasks

| Lab | Focus Area | Key Tools | Expected Outcome |
|---|---|---|---|
| **Lab 1** | Code & Secret Scanning | CodeQL, Gitleaks | Students locate and interpret security alerts |
| **Lab 2** | Vulnerability Fixing | Static Analysis + Secure Coding | Students fix SQL Injection & hardcoded credentials |
| **Lab 3** | Secure PR Workflow | PR Gate, Branch Protection | Students enforce secure merge policy |
| **Lab 4** | Supply Chain Security | Dependabot, Dependency Review | Students analyze dependency risks and update packages |

Detailed step-by-step instructions are provided in **`LABS.md`**.

---

## 3. Repository Structure

```bash
.
├─ backend/                      # Vulnerable backend code (used for Labs 1–2)
│  ├─ app.js
│  ├─ db.js                      # Contains hardcoded password (to be fixed)
│  └─ routes/users.js            # Contains SQL Injection vulnerability
│
├─ frontend/                     # Minimal UI (not security-critical)
│  └─ src/
│     ├─ pages/index.tsx
│     └─ lib/api.ts
│
├─ .github/                      # Security automation configuration
│  ├─ workflows/
│  │  ├─ codeql.yml              # CodeQL code scanning
│  │  ├─ secret-scan.yml         # Secret scanning using Gitleaks
│  │  ├─ dependency-review.yml   # Dependency security review
│  │  └─ sbom.yml                # SBOM generation (CycloneDX)
│  ├─ pull_request_template.md   # PR security checklist
│  ├─ CODEOWNERS                 # Assign reviewers automatically
│  └─ dependabot.yml             # Automated dependency updates
│
├─ LABS.md                       # Lab instructions
├─ README.md                     # (This document)
└─ package.json


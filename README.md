# ATLAS CORE ENTERPRISE

## Enterprise Security Engineering Lab

> **Build. Break. Detect. Investigate. Harden. Retest. Document.**

Atlas Core Enterprise is a continuously evolving, enterprise-style cybersecurity engineering environment used to practice network engineering, infrastructure security, application security, identity security, SOC operations, vulnerability management, cloud security, hybrid identity, and DevSecOps.

This is **one evolving enterprise environment**, not a collection of disconnected tutorial labs.

---

## Mission

Build a realistic enterprise environment, deliberately test it, collect telemetry, investigate security events, remediate weaknesses, retest controls, and publish reproducible evidence.

### Operating Model

```text
PLAN
  ↓
BUILD
  ↓
VALIDATE
  ↓
ATTACK
  ↓
DETECT
  ↓
INVESTIGATE
  ↓
REMEDIATE
  ↓
RETEST
  ↓
DOCUMENT
  ↓
PUBLISH
```

---

## Core Environment

| Domain | Capabilities |
|---|---|
| Network | pfSense, routing, NAT, DHCP, DNS, VLANs, VPN |
| Packet Analysis | Wireshark, tcpdump |
| Network Defense | Snort IDS/IPS |
| DMZ | Nginx, ModSecurity, AtlasBank |
| Application Security | Web/API testing, WAF, authentication, authorization |
| Identity | Active Directory, LDAP, Kerberos, GPO, IAM |
| SOC | Splunk, Wazuh, Sysmon |
| Vulnerability Management | OpenVAS, Nessus, CVE/risk/remediation |
| Cloud | Azure, Entra ID, cloud networking, monitoring |
| Hybrid | AD ↔ Entra ID, SSO, MFA, Conditional Access, PIM |
| DevSecOps | GitHub Actions, SAST, dependency/container scanning |

---

## Architecture Principle

Atlas Core preserves the existing enterprise architecture and uses it as the practice environment. New exercises are introduced as **engagements** against the same environment.

The DMZ remains a first-class security zone containing the AtlasBank web stack and WAF.

---

## Engagement Registry

| ID | Engagement | Status |
|---|---|---|
| ENG-001 | Network Visibility | Planned |
| ENG-002 | VLAN Segmentation | Planned |
| ENG-003 | Snort IDS | Planned |
| ENG-004 | Snort IPS | Planned |
| ENG-005 | AtlasBank Web Attack Detection | Planned |

More engagements will be added as Atlas Core evolves.

---

## Evidence Standard

Every major engagement should contain:

1. Initial state
2. Attack/test procedure
3. Network/application telemetry
4. Detection evidence
5. Investigation
6. Root cause
7. Remediation
8. Retest
9. Final state
10. Lessons learned
11. MITRE ATT&CK mapping where applicable

---

## Repository Structure

```text
architecture/              Enterprise diagrams and design decisions
daily-journal/             Daily engineering evidence
engagements/               Security exercises
infrastructure/            Core infrastructure configuration
security/                  Defensive tooling and controls
offensive-security/        Authorized lab testing
incident-response/         Investigation and response exercises
evidence/                   Screenshots, PCAPs and artifacts
reports/                    Technical and executive reports
tools/                      Supporting tools
scripts/                    Automation
```

---

## Rules

- All offensive testing is performed only against systems owned/authorized for the lab.
- Do not commit secrets, credentials, private keys, tokens, or real customer data.
- Evidence should be sanitized before publication.
- Every change should be reproducible where practical.
- Prefer measured evidence over claims.

---

## Portfolio

Public portfolio: `atlas-core-website`

The website is the executive view. This repository is the engineering source of truth.

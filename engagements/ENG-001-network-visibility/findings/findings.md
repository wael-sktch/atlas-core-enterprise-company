
---

# 3. `findings/findings.md`

Keep this one concise.

```markdown
# ENG-001 Findings

## Finding Summary

| ID | Finding | Severity | Status |
|---|---|---|---|
| FINDING-001 | Management-to-DMZ HTTP visibility established | Informational | Confirmed |
| FINDING-002 | AtlasBank HTTP service reachable | Informational | Confirmed |
| FINDING-003 | `/admin/` endpoint returned HTTP 200 | Observation | Requires assessment |
| FINDING-004 | Initial Nikto command malformed | Process | Confirmed |

---

# FINDING-001

## Management-to-DMZ HTTP Visibility

**Severity:** Informational

### Observation

HTTP traffic was observed from:

```text
10.10.40.10

# ENG-001 — Network Visibility Findings

## Engagement

**ID:** ENG-001  
**Name:** Network Visibility  
**Environment:** Atlas Core Enterprise  
**Date:** 2026-08-15  
**Status:** Completed

---

## Objective

Validate network visibility and establish a baseline for traffic
between the Atlas Core management and DMZ networks.

---

## Network Scope

| Zone | Network | Gateway |
|---|---|---|
| USERS | 10.10.10.0/24 | 10.10.10.1 |
| SERVERS | 10.10.20.0/24 | 10.10.20.1 |
| DMZ | 10.10.30.0/24 | 10.10.30.1 |
| MGMT | 10.10.40.0/24 | 10.10.40.1 |

---

## Systems Observed

| System | IP | Role |
|---|---|---|
| pfSense | 10.10.40.1 | Network gateway |
| AtlasBank Web Server | 10.10.30.5 | DMZ web server |
| Kali | 10.10.40.10 | Security testing workstation |

---

## Findings

### FINDING-001 — Inter-zone HTTP Visibility

**Severity:** Informational / Baseline

Traffic from the MGMT network to the DMZ web server was successfully
observed.

**Source:**

10.10.40.10

**Destination:**

10.10.30.5

**Protocol:**

HTTP

**Destination Port:**

80

This confirms that the traffic path between the management and DMZ
networks is observable through packet capture.

---

### FINDING-002 — ARP Resolution Observed

ARP traffic was captured on the MGMT interface.

The capture demonstrates Layer 2 address resolution between systems
within the observed network.

---

### FINDING-003 — AtlasBank HTTP Service Accessible

The AtlasBank web service at:

http://10.10.30.5/

responded successfully to HTTP requests.

The server identified itself as:

nginx/1.28.3 (Ubuntu)

---

### FINDING-004 — Administrative Path Accessible

The `/admin/` path responded successfully to an HTTP request.

This was recorded as an observation for subsequent application
security testing.

No vulnerability is claimed from this observation alone.

---

### FINDING-005 — External DNS Resolution Unavailable from Kali

The Kali system successfully reached the internal AtlasBank server,
but external DNS resolution for `google.com` failed during testing.

This should be investigated as part of the Atlas Core DNS/network
configuration baseline.

---

## Evidence

- `01-pfsense-interface-assignments`
- `02-pfsense-interface-status`
- `03-wireshark-arp`
- `04-wireshark-http`
- `05-curl-atlasbank`
- `06-curl-admin`
- `07-nikto-validation`

---

## Traffic Capture

`traffic/day-001-mgmt-to-dmz.pcap`

---

## Security Impact

The engagement established visibility into management-to-DMZ traffic
and confirmed the current HTTP attack surface of the AtlasBank web
server.

The HTTP service will later be migrated to HTTPS and subjected to
additional web application security testing.

---

## Recommended Next Actions

1. Complete network segmentation validation.
2. Investigate external DNS resolution from the MGMT network.
3. Continue AtlasBank web security testing.
4. Deploy HTTPS/TLS for AtlasBank.
5. Validate security headers.
6. Continue toward WAF and application-layer monitoring.
7. Correlate network events with SOC telemetry.

---

## Engagement Status

**ENG-001: COMPLETE**

Next engagement:

**ENG-002 — VLAN Segmentation**

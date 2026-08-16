# ENG-001 — Network Visibility

## Overview

ENG-001 is the first security engineering engagement performed inside the Atlas Core enterprise laboratory.

The objective was to validate basic network visibility and communication between the management network and the AtlasBank application hosted in the DMZ.

This engagement establishes the baseline for future security testing, detection engineering, and incident-response exercises.

---

## Objective

Validate:

- pfSense interface configuration
- Network segmentation
- Management-to-DMZ connectivity
- ARP behavior
- HTTP traffic visibility
- AtlasBank web-server reachability
- Basic application endpoint discovery
- Security-tool command validation

---

## Atlas Core Network

| Zone | Network | pfSense Gateway |
|---|---|---|
| USERS | 10.10.10.0/24 | 10.10.10.1 |
| SERVERS | 10.10.20.0/24 | 10.10.20.1 |
| DMZ | 10.10.30.0/24 | 10.10.30.1 |
| MGMT | 10.10.40.0/24 | 10.10.40.1 |

The AtlasBank web application used during this engagement was located in the DMZ.

Observed application server:

```text
10.10.30.5

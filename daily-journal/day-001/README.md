# Day 001 — Atlas Core Network Visibility

## Objective
Establish a repeatable baseline for observing Atlas Core traffic before introducing new security controls.

## Scope
- pfSense
- Existing Atlas Core network
- Authorized Windows/Kali systems
- Wireshark

## Completed exercises

### 1. pfSense Interface Validation

Validated the Atlas Core network interfaces and confirmed:

| Interface | Network | Gateway |
|---|---|---|
| WAN | 192.168.3.0/24 | 192.168.3.1 |
| SERVERS | 10.10.20.0/24 | 10.10.20.1 |
| USERS | 10.10.10.0/24 | 10.10.10.1 |
| DMZ | 10.10.30.0/24 | 10.10.30.1 |
| MGMT | 10.10.40.0/24 | 10.10.40.1 |

Evidence:

- `ENG-001-network-visibility/evidence/01-pfsense-interface-assignments`
- `ENG-001-network-visibility/evidence/02-pfsense-interface-status`

---

### 2. ARP Traffic Analysis

Captured and analyzed ARP traffic on the MGMT interface using Wireshark.

Observed:

- ARP requests
- ARP replies
- Broadcast discovery traffic
- Communication between the management host and pfSense

Evidence:

- `03-wireshark-arp`

---

### 3. HTTP Traffic Analysis

Captured HTTP communication between the MGMT network and AtlasBank in the DMZ.

Observed:

```text
Source:      10.10.40.10
Destination: 10.10.30.5
Protocol:    HTTP
Destination: TCP/80

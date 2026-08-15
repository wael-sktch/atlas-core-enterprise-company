# ENG-001 — Network Visibility & Traffic Baseline

## Objective

Establish a baseline of normal network traffic within the
Atlas Core Enterprise environment.

## Environment

- pfSense
- Windows 11
- Kali Linux
- Active Directory
- DMZ
- WAF01
- AtlasBank
- Internet connectivity

## Network Segments

| Zone | Network | Purpose |
|---|---|---|
| USERS | 10.10.10.0/24 | User endpoints |
| SERVERS | 10.10.20.0/24 | Enterprise servers |
| DMZ | 10.10.30.0/24 | Internet-facing services |
| MGMT | 10.10.40.0/24 | Management/security systems |

## Tools

- pfSense
- Wireshark
- Kali Linux
- Windows

## Methodology

PLAN → BUILD → BASELINE → TEST → DETECT →
INVESTIGATE → REMEDIATE → RETEST → DOCUMENT → PUBLISH

## Objective of Day 001

Identify and understand:

- ARP
- ICMP
- DNS
- DHCP
- TCP
- TLS

## Status

In Progress

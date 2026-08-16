# ATLAS CORE ENTERPRISE

# ENG-001 — Network Visibility & HTTP Traffic Analysis

## Engagement Information

| Field | Value |
|---------|---------|
| Engagement | ENG-001 |
| Title | Network Visibility & HTTP Traffic Analysis |
| Date | 2026-08-15 |
| Analyst | Wael  |
| Environment | Atlas Core Enterprise |
| Status | Completed |

---

# Objective

Establish baseline visibility into network communications between
the Management network and AtlasBank hosted in the DMZ.

The goal was to understand how communication occurs at the packet
level before introducing security monitoring technologies such as
Snort, Wazuh, and Splunk.

---

# Environment

## Architecture

```text
MGMT (10.10.40.0/24)
        |
        |
        v
     pfSense
        |
        |
        v
DMZ (10.10.30.0/24)
        |
        v
AtlasBank (10.10.30.5)
```

## Systems

### Management Host

```text
IP Address: 10.10.40.10
Role: Analyst Workstation
Tools:
- Kali Linux
- Wireshark
```

### Firewall

```text
Platform: pfSense
Role:
- Routing
- Firewall
- Network Segmentation
```

### Web Server

```text
Hostname: AtlasBank
IP Address: 10.10.30.5
Service:
- HTTP
Web Server:
- nginx
```

---

# Methodology

Atlas Core Standard Workflow

PLAN
→ BUILD
→ BASELINE
→ TEST
→ DETECT
→ INVESTIGATE
→ REMEDIATE
→ RETEST
→ DOCUMENT
→ PUBLISH

---

# Activities Performed

## Connectivity Validation

Commands:

```bash
ping -c 4 10.10.30.5
```

Purpose:

Verify communication between MGMT and AtlasBank.

Result:

Successful communication.

---

## HTTP Connectivity Testing

Commands:

```bash
curl -I http://10.10.30.5/
```

```bash
curl -v http://10.10.30.5/
```

Purpose:

Generate HTTP traffic for packet capture analysis.

Result:

HTTP communication successful.

---

## Packet Capture

Tool:

```text
Wireshark
```

Capture Point:

```text
Management Network
```

Protocols Observed:

```text
ARP
ICMP
TCP
HTTP
```

---

# TCP Session Analysis

## Three-Way Handshake

Observed:

```text
SYN
SYN/ACK
ACK
```

Source:

```text
10.10.40.10
```

Destination:

```text
10.10.30.5
```

Destination Port:

```text
80
```

Result:

Successful TCP session establishment.

---

# HTTP Analysis

## Client Request

```http
HEAD /admin/ HTTP/1.1
Host: 10.10.30.5
User-Agent: curl/8.7.1
Accept: */*
```

## Server Response

```http
HTTP/1.1 200 OK
Server: nginx/1.28.3 (Ubuntu)
Content-Type: text/html
Content-Length: 3657
Connection: keep-alive
```

Result:

Successful response returned by AtlasBank.

---

# Layer Analysis

## Layer 2

Ethernet II

Observed:

```text
Source MAC Address
Destination MAC Address
```

Purpose:

Local network frame delivery.

---

## Layer 3

IPv4

Observed:

```text
Source IP:
10.10.40.10

Destination IP:
10.10.30.5
```

Purpose:

Network routing and delivery.

---

## Layer 4

TCP

Observed:

```text
Source Port:
33152

Destination Port:
80
```

Purpose:

Reliable session establishment and transport.

---

## Layer 7

HTTP

Observed:

```text
HEAD Request
HTTP Response
```

Purpose:

Application communication.

---

# Findings

## Finding 001

### Title

Successful Communication Between MGMT and AtlasBank

### Evidence

- TCP Three-Way Handshake
- HTTP Request
- HTTP Response
- TCP Stream Reconstruction

### Impact

Communication path successfully validated.

---

## Finding 002

### Title

Server Fingerprinting Information Disclosed

### Evidence

```http
Server: nginx/1.28.3 (Ubuntu)
```

### Observation

The web server exposes technology and operating system information.

### Security Relevance

An attacker could use this information during reconnaissance.

---

## Finding 003

### Title

HTTP Traffic Visible In Plaintext

### Evidence

HTTP request and response contents were visible inside Wireshark.

### Observation

Request metadata was fully observable.

Examples:

- URI
- Host Header
- User-Agent
- Server Header

### Security Relevance

HTTP does not provide confidentiality.

---

# Lessons Learned

Applications should be analyzed as communication layers:

```text
Ethernet
   ↓
IPv4
   ↓
TCP
   ↓
HTTP
```

Network visibility allows investigators to reconstruct
communications and verify application behavior.

---

# Next Steps

ENG-002

HTTP vs HTTPS Security Analysis

Objectives:

- Observe TLS Handshake
- Analyze Client Hello
- Analyze Server Hello
- Examine Certificates
- Compare HTTP and HTTPS
- Demonstrate Encryption Benefits

---

# Evidence Collected

01-connectivity.png

02-http-capture.png

03-tcp-stream.png

04-tcp-handshake.png

05-layer-analysis.png

packet-capture-day-001.pcapng

---

# Engagement Status

COMPLETED

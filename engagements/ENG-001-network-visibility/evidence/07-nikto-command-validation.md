## Nikto Tool Validation

An initial Nikto command was executed against the AtlasBank server.

The command contained an incorrectly formatted URL:

http:/10.10.30.5

As a result, Nikto reported:

0 host(s) tested

This was treated as a command-validation issue rather than a vulnerability result.

The lesson is that security-tool results must be validated against an independently confirmed target before conclusions are drawn.

<img width="737" height="297" alt="Screenshot 2026-08-16 070425" src="https://github.com/user-attachments/assets/df09a22d-ea88-43c3-b55d-b79652989cda" />

# ADR-000: Selection of Cinema Network as the Core Business Domain

## Status
Accepted

## Context
The primary objective of this project is to demonstrate the evolution and trade-offs between popular system architectures.
hile the initial phase will simulate a smaller scale (handling just a few locations), the system must be designed with scalability in mind to support future expansion. Finally project will become a national cinema network (approx. 40 locations, similar to Helios/Multikino).

## Decision
I will design and implement a backend system for a nationwide cinema network (including movie catalog browsing and a seat reservation system).
A key architectural constraint is that **the frontend client will be built only once and remain exactly the same**, while the **backend will be implemented in three separate architectures** (Monolith, Microservices, and Event-Driven).

## Consequences
-   API Contract strictness: Keeping the frontend constant forces the backend implementations to adhere to a strict, consistent API contract. It proves that massive architectural refactoring on the server side is completely transparent to the end-user.
-   Time Management: Building the UI only once prevents wasting time on redundant frontend work, allowing 100% of the focus to remain on backend system design and infrastructure.
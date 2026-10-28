# Project Roadmap & Implementation Strategy

This document outlines the phased development plan for the CinemaNet platform. The goal is to build a single React.js frontend and iteratively connect it to three distinct backend architectural patterns for benchmarking and comparison.

---

## Phase 1: Planning & Architecture Definition 
- [x] Define business domain requirements (ADR-000)
- [x] Select frontend & backend tech stack (ADR-001)
- [x] Define database strategy & schema design (DBML / ADR-002 & ADR-003)

## Phase 2: Core Frontend (React + Tailwind CSS)
- [ ] Setup base project structure and layout components (Header, Location Selector)
- [ ] Add website routing
- [ ] Build Movie Catalog & Repertoire views
- [ ] Build interactive Seat Picker component
- [ ] Build Ticket Checkout & Order Summary flow
- [ ] Wire frontend components with Mock API data

## Phase 3: Architecture #1 – Modular Monolith (ASP.NET Core + EF Core)
- [ ] Setup Docker environment (`docker-compose.yml` for PostgreSQL & Redis)
- [ ] Scaffold solution structure using feature-based folder modules
- [ ] Implement database models, EF Core configurations, and initial migration
- [ ] Create seed data script for local testing (Cinemas, Seat Maps, Movies, Screenings)
- [ ] Containerize Modular Monolith application (`Dockerfile`)
- [ ] Implement Redis seat-locking logic (10-minute hold TTL)
- [ ] Connect React frontend to Modular Monolith API
- [ ] Run initial local performance baseline tests

## Phase 4: Architecture #2 – Microservices Architecture
- [ ] Decouple modules into independent services (`catalog-service`, `reservation-service`, etc.)
- [ ] Setup API Gateway (e.g., YARP or Ocelot)
- [ ] Update Docker Compose setup for multi-container orchestration (Gateway, Services, Databases)
- [ ] Configure inter-service communication (gRPC / REST)
- [ ] Connect React frontend via API Gateway (verify zero frontend code changes needed)

## Phase 5: Architecture #3 – Event-Driven Architecture (EDA)
- [ ] Add message broker container (RabbitMQ or Apache Kafka) to Docker Compose setup
- [ ] Implement async event producers/consumers for seat locks and ticket generation
- [ ] Setup background processing workers (BullMQ / MassTransit)
- [ ] Verify eventual consistency state across services

## Phase 6: Benchmarking & Reporting
- [ ] Execute load testing across all 3 architectures using k6 / Locust
- [ ] Measure metrics: RPS (Requests/Sec), P99 latency, CPU/RAM footprint under load
- [ ] Publish final architecture comparison report in repository docs
# ADR-002: Selection of Database Management Approach

## Status
Accepted

## Context
The application architecture relies on a relational database (PostgreSQL) to store cinemas, seat maps, screenings, and time-sensitive ticket reservations. Since ASP.NET Core was selected for backend development, I need an Object-Relational Mapping (ORM) and schema management approach that integrates cleanly with C#.

The primary options evaluated were Code-First and Database-First.

## Decision
I will use Entity Framework Core (EF Core) with the Code-First approach for managing database schema and data.

## Consequences
- Native ASP.NET Core Integration
- Great Testability
- Automated Migrations and version control
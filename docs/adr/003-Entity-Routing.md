# ADR-002: Database Slugs for City Routing

## Status
Accepted

## Context
The application requires clean, human-readable  URLs for cinema locations, movies, and events (e.g., /repertoire/cracow instead of /repertoire?cityId=12).

Main approaches were evaluated:
- Dynamic Generation 
- Names Stored in Database

## Decision
Unique slug strings will be stored directly in the database for primary routable entities (Cities, Cinemas, Events).

## Consequences
- Database-level UNIQUE constraints prevent routing collisions (no way 2 cites will have same URL)
- Allows database lookups by slug
- Requires addictional column per routable element
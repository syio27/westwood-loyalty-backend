# Westwood Loyalty Platform Backend

Spring Boot application with PostgreSQL and H2 database support.

## Requirements

- Java 17 or higher
- Maven 3.6+

## Profiles

### Development Profile (dev)
- Uses H2 in-memory database
- H2 Console enabled at `/h2-console`
- SQL logging enabled
- DDL auto-update enabled

### Production Profile (prod)
- Uses PostgreSQL database
- Database connection configured via environment variables
- SQL logging disabled
- DDL validation enabled

## Running the Application

### Development Mode (default)
```bash
mvn spring-boot:run
```

Or explicitly:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

### Production Mode
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```

Or set environment variables:
```bash
export SPRING_PROFILES_ACTIVE=prod
export DB_HOST=localhost
export DB_PORT=5432
export DB_NAME=westwooddb
export DB_USERNAME=postgres
export DB_PASSWORD=postgres
mvn spring-boot:run
```

## Environment Variables

### JWT Configuration
- `JWT_SECRET` - JWT secret key (required for production, has default for dev)
  - Generate using: `openssl rand -base64 32`
  - Minimum 32 characters (256 bits) for HS256 algorithm
  - **IMPORTANT**: Change the default secret in production!
- `JWT_EXPIRATION` - Token expiration in milliseconds (default: 86400000 = 24 hours)

### Database Configuration (Production)
- `DB_HOST` - PostgreSQL host (default: localhost)
- `DB_PORT` - PostgreSQL port (default: 5432)
- `DB_NAME` - Database name (default: westwooddb)
- `DB_USERNAME` - Database username (default: postgres)
- `DB_PASSWORD` - Database password (default: postgres)

### Setting Environment Variables

**For local development:**
```bash
export JWT_SECRET="your-generated-secret-key"
export JWT_EXPIRATION=86400000
```

**For production:**
```bash
export JWT_SECRET="your-production-secret-key"  # REQUIRED - no default
export JWT_EXPIRATION=86400000
export DB_HOST=your-db-host
export DB_PORT=5432
export DB_NAME=westwooddb
export DB_USERNAME=your-db-user
export DB_PASSWORD=your-db-password
```

## Request ID / Correlation ID

The application implements request ID tracking for logging and tracing. Every HTTP request gets a unique request ID that:

- **Generated per HTTP request** - A new UUID is generated if not provided by the client
- **Propagated via HTTP header** - Uses `X-Request-Id` header (industry standard)
- **Stored in logging context (MDC)** - Automatically included in all log lines
- **Returned in response** - Frontend can track requests using the response header

### How it works:

1. **Client sends request** with optional `X-Request-Id` header
2. **Server generates UUID** if header is missing
3. **Request ID stored in MDC** - Available in all log statements automatically
4. **Response includes** `X-Request-Id` header for frontend tracking

### Example Log Output:

```
2024-12-21 22:49:12.345  INFO [http-nio-8080-exec-1] [550e8400-e29b-41d4-a716-446655440000] com.westwood.service.ClientService : Creating new client
2024-12-21 22:49:12.456  INFO [http-nio-8080-exec-1] [550e8400-e29b-41d4-a716-446655440000] com.westwood.repository.ClientRepository : Saving client entity
```

All log lines for the same request share the same request ID in brackets `[550e8400-e29b-41d4-a716-446655440000]`, making it easy to trace a single request through all log entries.

### Frontend Integration:

The frontend can:
- Send `X-Request-Id` header with requests to maintain correlation
- Read `X-Request-Id` from response headers for tracking
- Use the request ID for error reporting and debugging

## Building

```bash
mvn clean package
```

## Running the JAR

```bash
java -jar target/westwood-backend-1.0.0.jar --spring.profiles.active=prod
```

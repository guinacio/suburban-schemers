# Multi-stage build for production-ready Vite + React app on GCP Cloud Run

# Stage 1: Build the application
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production runtime
FROM node:20-slim AS runner

WORKDIR /app

# Install serve for static file serving (lightweight production server)
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Cloud Run requires the app to listen on PORT environment variable
ENV PORT=8080
ENV NODE_ENV=production

# Expose the port (Cloud Run will override PORT env var if needed)
EXPOSE 8080

# Use serve to serve the built static files
# -s flag enables SPA mode (serves index.html for all routes)
# -l flag sets the port from PORT environment variable
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]


# Architecture Overview

## Product shape
- Telegram Mini App in Arabic (RTL)
- Non-custodial embedded wallet
- Supported networks: BNB Chain and Polygon
- Backend API for user sessions, balances, transactions, notifications, and audit logs

## Monorepo layout
- `apps/mini-app`: customer-facing Telegram experience
- `apps/api`: backend services and webhooks
- `apps/admin`: internal administration console
- `packages/*`: shared utilities, types, UI, auth, and Web3 helpers
- `prisma/`: database schema and migrations

## Core flow
1. Telegram opens the mini app
2. App validates Telegram init data
3. User wallet is created or loaded via the embedded wallet provider
4. Backend stores only non-sensitive user state
5. App reads balances and history through chain/indexing services
6. User sends transactions after confirmation

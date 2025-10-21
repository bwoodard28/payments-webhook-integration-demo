# Payments Webhook Integration Demo

Minimal Node/Express + Stripe **payments integration** you can run locally.  
Shows **PaymentIntent creation** now, with a clear path to add **webhook signature verification** and **idempotency**.

## Features (current)
- `/payments/create-intent` — creates a Stripe **PaymentIntent** for $9.99 (USD)
- Clean project layout you can extend with webhooks + idempotency

## Stack
- Node.js, Express
- Stripe SDK
- dotenv for local env management

---

## Getting Started

### 0) Prereqs
- Node.js (LTS)
- A free Stripe account (use **Test mode**)

### 1) Clone & install
```bash
git clone https://github.com/<YOUR-USER>/payments-webhook-integration-demo.git
cd payments-webhook-integration-demo/server
npm install

# E-commerce and payments

Method legend: webhook, script, polling, email, ci

- Shopify — Possible: yes. Method: webhook. Quirks: HTTPS required; verify HMAC signature. Docs: https://shopify.dev/docs/api/webhooks
- WooCommerce — Possible: yes. Method: webhook. Quirks: uses REST API keys; sign/verify if using plugins. Docs: https://woocommerce.com/document/webhooks/
- Magento (Adobe Commerce) — Possible: yes. Method: webhook/script. Quirks: use webhooks or observers. Docs: https://developer.adobe.com/commerce/
- BigCommerce — Possible: yes. Method: webhook. Quirks: require OAuth app. Docs: https://developer.bigcommerce.com/docs/integrations/webhooks
- Stripe — Possible: yes. Method: webhook. Quirks: verify signature; return 2xx quickly to avoid retries. Docs: https://stripe.com/docs/webhooks
- PayPal — Possible: yes. Method: webhook. Quirks: verify signature and webhook ID; expect retries. Docs: https://developer.paypal.com/docs/api-basics/notifications/webhooks/
- Square — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developer.squareup.com/docs/webhooks/overview
- Braintree — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developer.paypal.com/braintree/docs/guides/webhooks/overview
- Adyen — Possible: yes. Method: webhook. Quirks: HMAC verification. Docs: https://docs.adyen.com/development-resources/webhooks
- Checkout.com — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://www.checkout.com/
- Paddle — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developer.paddle.com/
- Lemon Squeezy — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://docs.lemonsqueezy.com/help/webhooks
- Chargebee — Possible: yes. Method: webhook. Quirks: event notifications. Docs: https://www.chargebee.com/
- Recurly — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developers.recurly.com/docs/webhooks
- Paystack — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://paystack.com/docs/payments/webhooks/
- Razorpay — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://razorpay.com/docs/webhooks/
- Mercado Pago — Possible: yes. Method: webhook. Quirks: verify signatures. Docs: https://www.mercadopago.com/developers/en/docs/notifications/webhooks
- Authorize.net — Possible: yes. Method: webhook. Quirks: Silent Post or Webhooks. Docs: https://developer.authorize.net/api/reference/features/webhooks.html
- Klarna — Possible: yes. Method: webhook. Quirks: HMAC verification. Docs: https://developers.klarna.com/api/#webhooks
- Worldpay — Possible: yes. Method: webhook. Quirks: event notifications. Docs: https://developer.worldpay.com/
- Coinbase Commerce — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://commerce.coinbase.com/docs/api/#webhooks
- BitPay — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://bitpay.com/

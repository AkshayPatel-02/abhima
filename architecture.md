  ┌──────────────────────┐ 
                  │                     USERS                          │ 
                  │          (Mobile / Desktop)               │ 
                  └─────────┬────────────┘ 
                       N                   │ HTTPS 
                                              ▼ 
                  ┌──────────────────────┐ 
                  │            CLOUDFLARE CDN           │ 
                  │            DNS • SSL • Security          │ 
                  └─────────┬────────────┘ 
                                             │ Cached Static Assets 
                                              ▼ 
          ┌────────────────────────────────────┐ 
          │                                FRONTEND (VERCEL HOSTED)       │ 
          │                                      Next.js Static Site (SSG)                │ 
          │                               Pages • Components • SEO               │ 
          └───────┬──────────┬───────────┬─────┘ 
                                │                           │                             │ 
        Media CDN  │                 Form Service   WhatsApp/Call 
                                │                            │                            │ 
                                ▼                             ▼                            ▼ 
     ┌────────────────┐  ┌──────────┐  ┌──────────┐ 
     │  CLOUDINARY               │  │ FORMSPREE │  │ WHATSAPP   │ 
     │ Photos & Videos            │  │ Email               │  │ / TEL                │ 
     └────────────────┘  └──────────┘  └──────────┘
# Ken Labs website

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Build: `pnpm build`.

React/Vinext with a Cloudflare Workers-oriented build, not a plain HTML export. `pnpm start` previews the built Worker locally; it does not deploy. The current Vite configuration includes the OpenAI Sites plugin; adapt the hosting configuration for your chosen provider. Generated Worker configuration is at `dist/server/wrangler.json` after building.

Includes the latest local Lab updates. Booking and enquiry links are already configured. No account credentials are included.

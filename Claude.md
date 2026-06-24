# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Web App - Development Guidelines

Single source of truth for AI coding agents. *Stable rules live here in prose.* Exact imports, hook signatures, and file templates change over time—*open neighboring files* and match those patterns instead of inventing new ones.

## Philosophy

- Less code is better. Prefer simplicity over cleverness; one clear responsibility per module.
- Be skeptical of assumptions: *read the codebase* (call sites, types, existing modules) before changing behavior.
- Do not run build, typecheck, or lint unless the user explicitly asks.
- Do not add test scripts or new documentation files unless the user approves.
- No emoji in code or user-facing strings you add.
- For external library behavior (React, Laravel, etc.), confirm current APIs when you are not sure.

## Commands

```bash
# Start all dev processes (server, queue, logs, vite)
composer dev

# Run tests
php artisan test
# Run a single test file
php artisan test tests/Feature/BookingTest.php
# Run a single test by name
php artisan test --filter "it books a boat"

# PHP linting (Laravel Pint)
composer lint

# Frontend
npm run dev        # Vite dev server (usually started via composer dev)
npm run build      # Production build
npm run types      # TypeScript check (tsc --noEmit)
npm run lint       # ESLint fix
```

## Architecture

**Stack:** Laravel 12 · Inertia.js v2 · React 19 · TypeScript · Tailwind CSS v4 · Vite

**Data flow:** Controllers load Eloquent data and pass it to React pages via `Inertia::render('page-name', [...props])`. Pages receive typed props — raw model shapes are defined in `resources/js/types/models.ts` (snake_case, matching DB). There is no separate API layer; all mutations go through standard Laravel form submissions via `useForm` from `@inertiajs/react` or `router.visit`.

**Routing:** Use **Laravel Wayfinder** (`resources/js/wayfinder/`) for type-safe route and action references on the frontend instead of hardcoding URL strings. Wayfinder auto-generates these from named Laravel routes.

**Admin panel:** Filament v4 (`app/Filament/`) handles the back-office UI. Keep Filament resources and pages separate from the public-facing controllers.

**Actions:** Business logic lives in `app/Actions/` (single-responsibility action classes), not inside controllers. Controllers stay thin — resolve input, call an action, return an Inertia response.

**Translations:** The app supports five locales (`hr`, `en`, `it`, `hu`, `de`). Locale is stored in session and switched via `GET /lang/{locale}`. Spatie `HasTranslations` models expose per-locale strings as `Translatable` (`Record<string, string>`) on the frontend — switch on the active locale client-side rather than re-fetching.

**Media:** Images and uploads go through **Spatie Media Library** — never store raw paths in model columns.

**Permissions:** Roles and gates use **Spatie Laravel Permission**. Check `$user->can(...)` or policies; do not inline role string checks in controllers.

**Mail:** Transactional mail uses Mailgun (`symfony/mailgun-mailer`). Mail classes live in `app/Mail/`.

## Laravel patterns

- Put new business logic in `app/Actions/`, not in controllers or models.
- Form validation belongs in `app/Http/Requests/` — use Form Request classes, not inline `$request->validate()` in controllers.
- Keep Eloquent relationships and scopes on models; do not build raw query logic in controllers.
- For Inertia responses, pass only the data the page actually needs — avoid over-fetching into props.
- Named routes are the contract between backend and frontend; always add `->name(...)` to new routes.

## Frontend structure

```
resources/js/
  pages/          # Inertia page components (one file per route)
  my-components/  # Feature-specific components (reservations, booking, etc.)
  components/     # Generic/shared UI primitives
  layouts/        # App and auth layout wrappers
  hooks/          # Custom React hooks
  types/          # TypeScript types (models.ts, page.ts, etc.)
  wayfinder/      # Auto-generated type-safe route helpers (do not edit manually)
```

Page components in `pages/` are the Inertia entry points — they receive typed props from controllers and compose layout + feature components.

## TypeScript

Everything must be properly typed or clearly inferred. No shortcuts.

*Do not use*

- `any` to "make it compile."
- Unsafe casts (`as SomeType`) to silence the checker. `as const` is allowed when it *narrows*, not when it lies about types.
- Non-null assertions (`!`) to pretend a value exists.

*Do use*

- Runtime checks, guards, and early `throw` (or controlled error returns) so control flow narrows types.
- Named type guards when validating unknown or external data.
- Enums or const maps for fixed domain sets; avoid scattering magic strings for one concept across the codebase.

## Naming conventions

- *Interfaces:* `I` prefix (`IProject`, `IDesign`).
- *Branded types:* `T` prefix (`TProjectId`).
- *Enums:* PascalCase type name; string values at runtime.
- *Booleans:* `is*`, `has*`, `should*`, `with*`, `include*`, `does*`, etc.
- *Components:* PascalCase directory with `index.tsx`.

*Component props*

- Always **`type Props`** (not `interface`) for a component's props.
- Do not export a separate `MyComponentProps` alias; consumers use **`ComponentProps<typeof MyComponent>`** when they need the type.

## Client components and React behavior

*Presentation ("dumb") components*

- No subscriptions to global stores or routers unless the component is intentionally a smart leaf.
- No default margin or positioning that dictates page layout; the parent passes layout via `className`.

*Orchestrators ("smart" components)*

- Derive data for children; own spacing and layout between sections.
- When logic or JSX grows large, *extract* focused subcomponents so the parent stays an orchestrator.

*Rendering rules*

- *Render is pure*—do not update React state, call parent callbacks that set parent state, or trigger side effects while rendering.
- *Short-circuit UI*—for loading, error, and missing data, return early (spinner, error state, null) before the main content.

*Effects*

- *Minimize `useEffect`*. Prefer derived values and event handlers. Use effects only for true external synchronization.
- Do not use an effect to recompute something derivable from props/state.
- When an effect schedules debounced/throttled work, use the ref-based "latest callback" pattern from existing implementations—do not improvise.

*Pure helpers*

- Functions that do not close over component state should live *outside* the component at module scope.

*API shape*

- *No boolean "mode" parameters* that flip unrelated behavior. Prefer two named functions or explicit variants.

## Styling and layout

- Prefer *flex/grid `gap`* for spacing between siblings instead of stacking `mb-*` / `mt-*` on each child.
- **`cn()`** default base classes plus conditional overrides, not ternary-swapped full class strings.
- Use Tailwind's spacing/sizing scale. Avoid arbitrary bracket values such as `[16px]` unless there is strong local precedent.

## State management

- This project does not use a global client store (no Zustand/Redux). UI state is local or in Inertia shared props.
- For finite UI phases (loading / error / success, open / closing / animating), prefer *one explicit state* (enum or discriminated union) so impossible combinations cannot exist.
- Derive visibility, disabled state, and layout from that model.

## Testing (Pest)

- Tests live in `tests/Feature/` and `tests/Unit/`.
- Use Pest's functional style: `it('should <action> when <condition>', function () { ... })`.
- Group related tests in `describe()` blocks named after the unit under test.
- Run the full suite with `php artisan test`; run a focused subset with `--filter`.

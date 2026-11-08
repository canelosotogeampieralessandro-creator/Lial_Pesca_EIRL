# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase: single self-contained `index.html` (no framework, no build step), served
as a static site from GitHub Pages and installed on the phone as a PWA. Persistence today is
`localStorage`. Confirmed this round: move to a **local-first cloud**, so the app keeps working
with no signal at the dock and syncs when it returns.

## Users

- **Owner / operator (primary).** Registers purchases at the dock, on a phone, one-handed,
  outdoors in bright sun, often with no signal. Needs speed and large targets.
- **Accountant.** Works from a computer, long sessions, dense data. Confirmed scope: may
  consult, export, register movements, and mark items as reviewed (visto bueno).
- **Management.** Reads consolidated results across the group. Views on a laptop or projector.

## Product Purpose

Control accounts payable and receivable for a group of fishing companies that buy and resell
pota (jumbo squid), by tying every purchase lot to the sale invoice that sustains it, and by
showing, per company and consolidated, what is owed, what is owed to them, and what the margin
really is after freight and factoring.

## Positioning

The link is the product. General accounting software records a purchase and a sale as unrelated
entries; this ties each sale to the exact purchase lots that back it, by kilogram, including
partial lots and sales that group several purchases. That traceability is what makes the margin
per operation real rather than an average, and it is what the accountant needs at closing.

## Operating Context

- Purchases come in two legal forms: **liquidación de compra** (to a fisherman with DNI, no RUC;
  1.5% income-tax withholding, product exonerated from IGV) and **factura de compra** (supplier
  with RUC).
- Sales carry a **1.5% detracción**: the client deposits that portion into the company's Banco de
  la Nación account, so the amount invoiced and the amount actually collected differ.
- Invoices pending collection may be **ceded to a factoring company**, at a discount per invoice
  or per batch; ceded invoices stop being receivables.
- **Freight** is paid per shipment and is not part of the cost of goods.
- Money moves through two banks, BBVA and Interbank, or cash.
- Documents are SUNAT electronic invoices; series and correlative numbers collide across document
  types, so identity is issuer RUC + document type + series + number.

## Capabilities and Constraints

- **Four companies** in the group, confirmed to operate under the same model. Company identity,
  its own numbering series and its own movements; catalogs of fishermen, clients, carriers and
  factoring firms are shared across the group.
- A purchase lot can be sold whole, split across several sales, or grouped with other lots in one
  sale. A lot with no remaining balance must not be offered again.
- **Roles:** owner and accountant. The accountant also carries a review state per movement.
- Must remain fully usable offline; sync is a background concern, never a precondition to record.
- Exports to CSV (`;` separator, for Excel in Spanish) and aligned TXT.
- Deployed from a **public** repository, so no personal data of third parties may be committed:
  catalogs ship empty and are filled in-app.
- Open decision: the cloud provider account must be created by the user; the app ships with the
  sync layer built and inactive until its configuration is pasted in.

## Brand Commitments

Deep sea-green (#05715E) is the established accent, already shipped in the installed app icon and
theme color. No other visual constraint was pinned by the user.

## Evidence on Hand

Real documents for July 2026 in `Facturas/` (not committed): 18 purchase invoices, 30 liquidaciones,
31 sales invoices, plus two reconciliation workbooks. Figures verified against them: 301,873 kg
purchased, 278,359 kg sold and reconciled to the kilogram, S/ 82,789.73 gross margin, S/ 17,650
freight, S/ 3,790.80 financial cost. Four sales grouped two liquidaciones each. No fabricated
customers, volumes or results may stand in for these.

## Product Principles

1. **Recording must never be blocked.** No signal, no login prompt, no spinner stands between the
   operator and a purchase registered at the dock.
2. **Every sale can name what it sold.** Traceability to the purchase lot is the feature, not a
   report.
3. **Invoiced is not collected.** Detracción, withholding, freight and factoring discounts are
   shown where they change the number, never buried.
4. **The accountant sees the group; the operator sees the day.** Same data, different altitude.
5. **No third party's personal data leaves the device it was typed on**, beyond the group's own
   synced workspace.

## Accessibility & Inclusion

Used outdoors in direct sunlight on a phone: high contrast and large touch targets are a
functional requirement, not a preference. Spanish (Peru) throughout, including number and date
formatting and the CSV separator.

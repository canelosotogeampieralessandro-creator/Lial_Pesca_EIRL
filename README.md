# Gestión de Cuentas — LIALPESCA E.I.R.L.

Aplicación de celular para controlar cuentas por pagar y por cobrar en la compra-venta
de pota, enlazando cada **liquidación de compra** con la **factura de venta** que la sustenta.

**▶ Abrir la app:**
<https://canelosotogeampieralessandro-creator.github.io/Lial_Pesca_EIRL/>

Es un solo archivo HTML, sin dependencias ni servidor. Se abre en el navegador del
celular y se instala con **"Agregar a pantalla de inicio"**: queda con su propio ícono y
se abre a pantalla completa, como una app normal. Funciona sin señal.

## Qué hace

**Liquidaciones de compra.** Se ingresan kilos y precio por kilo (o kilos e importe
total: lo que falte se calcula). La retención de IR y el neto a pagar al pescador se
calculan en vivo. Al guardar pregunta si la compra ya se pagó; si sí, se elige el medio
—BBVA, Interbank o efectivo— y queda saldada. Si no, queda en **por pagar** y se marca
después con su fecha y banco reales.

**Facturas de venta.** Se eligen una o varias liquidaciones de las que aún tienen saldo.
De cada lote se puede tomar el total o una parte (25 / 50 / 75 % o una cantidad exacta).
Un lote agotado deja de ofrecerse; uno vendido a medias reaparece con su saldo. La app
calcula el costo real de los lotes tomados y el margen de la operación. El cobro sigue
el mismo flujo que el pago.

**Factoring.** Se ceden facturas pendientes de cobro aplicando un porcentaje único al
lote o uno distinto a cada factura. Al registrar la operación esas facturas quedan
cobradas por factoring y salen de las cuentas por cobrar.

**Fletes.** Transportista, kilos enviados, monto y las liquidaciones que viajaron en ese
flete, con su propio control de pago y el costo por kilo transportado.

**Reportes.** Los cuatro módulos se exportan a CSV —separador `;`, listo para Excel en
español— o a TXT en tabla alineada. El reporte de ventas incluye la trazabilidad de cada
factura: `E001-1 (9,050 kg) + E001-2 (1,291 kg)`.

## Dónde viven los datos

En el navegador del propio celular (`localStorage`). No hay servidor ni cuenta: por eso
funciona en el muelle sin señal, y por eso **borrar los datos del navegador o cambiar de
teléfono los pierde**.

Usa **Reportes y datos ▤ → Descargar respaldo** cada cierto tiempo. Genera un archivo
JSON que puedes enviarte por WhatsApp o correo y volver a cargar con **Restaurar
respaldo**.

## Datos personales

Los catálogos de pescadores, clientes y transportistas **arrancan vacíos a propósito**.
Sus nombres y documentos son datos personales de terceros y este repositorio es público,
así que no se versionan aquí: se escriben una sola vez desde la app y quedan únicamente
en el celular.

Por la misma razón el `.gitignore` funciona como lista blanca: ignora toda la carpeta y
solo autoriza `app/` y este README, de modo que las facturas, liquidaciones y hojas de
cálculo del negocio no puedan subirse por descuido.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa: estilos, interfaz y lógica en un solo archivo |
| `manifest.json` | Permite instalarla en la pantalla de inicio a pantalla completa |
| `icono.svg` · `icono.png` · `icono-192.png` | Ícono de la app |
| `serve.js` | Servidor local, solo para probar en la computadora |
| `.nojekyll` | Evita que GitHub Pages procese el sitio con Jekyll |

## Uso local

```bash
node serve.js
```

Luego abre <http://localhost:4177>. Solo hace falta para desarrollar; en el celular
basta con abrir la URL publicada.

## Parámetros

Retención de IR (1.5 %), detracción (1.5 %) y las series de numeración se ajustan desde
**Reportes y datos ▤ → Parámetros**.

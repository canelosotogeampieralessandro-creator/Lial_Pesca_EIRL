# Gestión de Cuentas — Grupo

Control de cuentas por pagar y por cobrar para un grupo de empresas que compran y revenden pota,
enlazando cada **liquidación de compra** con la **factura de venta** que la sustenta.

**▶ Abrir la app:**
<https://canelosotogeampieralessandro-creator.github.io/Lial_Pesca_EIRL/>

Un solo archivo HTML, sin dependencias ni build. Se abre en el celular y se instala con
**"Agregar a pantalla de inicio"**: queda a pantalla completa, con su ícono. Funciona sin señal.
En computadora adopta una barra lateral y tablas completas, para el contador y para gerencia.

## Qué hace

**Varias empresas.** Cada una con su RUC, su color de identificación y su propia numeración de
series. Pescadores, clientes, transportistas y empresas de factoring se comparten entre todas.

**Liquidaciones de compra.** Kilos y precio por kilo, o kilos e importe total: lo que falte se
calcula. La retención de IR y el neto a pagar al pescador salen en vivo. Al guardar pregunta si
ya se pagó; si sí, se elige BBVA, Interbank o efectivo. Si no, queda en por pagar y se marca
después con su fecha y banco reales.

**Facturas de venta.** Se eligen uno o varios lotes con saldo, tomando el total o una parte
(25 / 50 / 75 % o una cantidad exacta). Un lote agotado deja de ofrecerse; uno vendido a medias
reaparece con su saldo. Calcula el costo real de los lotes tomados, la detracción y el margen.

**Factoring.** Cede facturas pendientes con un porcentaje único al lote o uno distinto por
factura. Al registrar, esas facturas quedan cobradas y salen de cuentas por cobrar.

**Fletes.** Transportista, kilos, monto, los lotes que viajaron y el costo por kilo.

**Cierre contable.** Todo el grupo en una pantalla: posición consolidada, resultado por empresa
con totales, posición tributaria del período (retención de IR, detracción, stock al cierre) y el
libro de movimientos de las cuatro empresas. El contador marca cada movimiento como **revisado**
u **observado** con una nota, y su nombre queda firmado en el registro y en la exportación.

**Reportes.** CSV con separador `;` para Excel en español, o TXT en tabla alineada. Incluye el
consolidado por empresa y el libro completo con estado de revisión. La vista contable también se
imprime o se guarda en PDF.

## Dónde viven los datos

Siempre primero en el equipo donde se escriben. Registrar nunca depende de la señal.

Sin configurar la nube, los datos viven solo en ese navegador: usa **Ajustes → Respaldo** con
regularidad, porque es la única red de seguridad.

### Conectar la nube (una sola vez)

1. Entra a [console.firebase.google.com](https://console.firebase.google.com) y crea un proyecto.
2. Crea una base de datos **Firestore**.
3. En *Configuración del proyecto → Tus apps*, registra una app **Web** y copia el bloque
   `firebaseConfig`.
4. En la app: **Ajustes → Configurar la nube**. Pega la configuración y elige un nombre de
   espacio compartido.
5. Repite el paso 4, con los mismos valores, en el equipo del contador.

Las claves de `firebaseConfig` son públicas por diseño. Lo que protege los datos son las reglas.
Pega estas en *Firestore → Reglas* y crea los usuarios en *Authentication*:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /espacios/{espacio} {
      allow read, write: if request.auth != null;
    }
  }
}
```

> Mientras no actives Authentication, usa reglas de prueba solo el tiempo que dure la prueba.
> Una base de datos abierta en internet es legible por cualquiera que tenga el `projectId`.

El selector de rol (propietario / contador) decide qué pantalla abre y quién firma las revisiones;
**no es un control de acceso**. Los permisos reales se aplican con una cuenta por persona en
Firebase.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa: estilos, interfaz y lógica |
| `PRODUCT.md` | Verdad de producto: usuarios, contexto de operación, restricciones |
| `DESIGN.md` | Sistema de diseño: color, tipografía, estados, retícula |
| `manifest.json`, `icono.*` | Instalación en la pantalla de inicio |
| `serve.js` | Servidor local, solo para desarrollo |
| `.nojekyll` | Evita que GitHub Pages procese el sitio con Jekyll |

## Uso local

```bash
node serve.js
```

Luego abre <http://localhost:4177>.

## Alcance

Las compras se registran como **liquidaciones de compra** (pescador con DNI). Las **facturas de
compra a proveedores con RUC** todavía no tienen módulo propio: si el grupo las usa, hoy quedan
fuera del costo calculado.

Los catálogos de personas arrancan vacíos a propósito: son datos personales de terceros y este
repositorio es público. El `.gitignore` funciona como lista blanca por la misma razón.

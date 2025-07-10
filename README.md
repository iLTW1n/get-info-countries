# 🌍 Country Explorer

Una aplicación web desarrollada con **Next.js**, **React** y **GraphQL** que permite explorar países por continente y moneda, y ver información detallada de cada uno.

## 🚀 Tecnologías utilizadas

- **Next.js** – Framework de React para SSR y rutas dinámicas.
- **React** – Librería para construir interfaces modernas.
- **GraphQL** – Consulta eficiente de datos desde la API pública [`https://countries.trevorblades.com`](https://countries.trevorblades.com).
- **Apollo Client** o **URQL** – Cliente GraphQL para manejar consultas y caché.


## 🛠 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/country-explorer.git
cd country-explorer
```

2. Instala las dependencias:
```bash
npm install
# o
yarn
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre la app en tu navegador: 👉 http://localhost:3000

## 🧩 Funcionalidades principales

- **🔍 Buscador de países** por nombre.
- **🌐 Filtro por continente** (África, Europa, Asia, etc).
- **💱 Filtro por moneda** (USD, EUR, PEN, etc).
- **📄 Vista detallada del país** al hacer click en la card:
  * Código
  * Emoji
  * Moneda
  * Idiomas
  * Continente

---
# 🌍 Ejercicio de algoritmo
```js
function tickets(bills) {
  const acceptedBills = [25, 50, 100];
  const hasBillsAccepted = bills.every(bill => acceptedBills.includes(bill));
  if (!hasBillsAccepted) return "NO";

  let c25 = 0;
  let c50 = 0;

  for (let bill of bills) {
    if (bill === 25) {
      c25++;
    } else if (bill === 50) {
      if (c25 === 0) return "NO";
      c25--;
      c50++;
    } else if (bill === 100) {
      if (c50 > 0 && c25 > 0) {
        c50--;
        c25--;
      } else if (c25 >= 3) {
        c25 -= 3;
      } else {
        return "NO";
      }
    }
  }

  return "SI";
}

// tickets([25, 25, 50]);         // => "SI"
// tickets([25, 100]);            // => "NO"
// tickets([25, 25, 50, 50, 100]) // => "NO"
```

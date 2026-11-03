# Rullino 90 — app per Android e iPhone

Questa cartella è l'app completa. Si pubblica gratis con GitHub Pages
e poi si installa sul telefono come una normale app.

## 1. Metti l'app su GitHub (una volta sola)

1. Crea un account gratuito su https://github.com (se non ce l'hai).
2. In alto a destra tocca **+** → **New repository**.
   - Repository name: `rullino90`
   - Lascia **Public** (GitHub Pages gratis funziona solo con i repository pubblici)
   - Premi **Create repository**.
3. Nella pagina del repository vuoto clicca il link **uploading an existing file**.
4. Trascina nella pagina **il contenuto** di questa cartella, cioè:
   `index.html`, `manifest.webmanifest`, `sw.js` e la cartella `icone`.
   (Non la cartella esterna: i file devono finire nella radice del repository.)
5. In fondo premi **Commit changes**.
6. Vai su **Settings** → **Pages** (menu a sinistra).
   - Source: **Deploy from a branch**
   - Branch: **main** e cartella **/ (root)** → **Save**.
7. Aspetta un paio di minuti e ricarica la pagina: in alto comparirà il link,
   fatto così: `https://TUONOME.github.io/rullino90/`

## 2. Installala sul telefono

**Android / GrapheneOS** (Vanadium o Chrome)
Apri il link → menu ⋮ → **Installa app** oppure **Aggiungi a schermata Home**.

**iPhone** (Safari)
Apri il link → tasto Condividi → **Aggiungi alla schermata Home**.

Dopo la prima apertura funziona anche senza internet.
Le foto vengono sviluppate sul telefono e non vengono mai caricate da nessuna parte:
il sito contiene solo l'app, non le tue foto.

## 3. Salvare le foto

"Salva" e "Salva tutte" aprono il menu di condivisione del telefono:
scegli **Salva immagine** / **Foto** / **Galleria** / **File**.

## Aggiornare l'app in futuro

Carica i file nuovi nello stesso repository (sostituiscono i vecchi) e in `sw.js`
cambia la riga `const VERSIONE = "rullino90-v1";` in `v2`, `v3` e così via.
Al riavvio successivo il telefono scarica la nuova versione.

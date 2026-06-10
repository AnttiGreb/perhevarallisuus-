# Perheen varallisuussuunnitelma — Käyttöönotto-ohje

## Tiedostorakenne

```
index.html          ← pääsivu
app.js              ← sovelluksen logiikka
styles.css          ← tyylitiedosto
supabase-auth.js    ← Supabase-integraatio (muokkaa tätä)
supabase-setup.sql  ← tietokannan asennusskripti (kerran)
```

---

## Vaihe 1 — Luo Supabase-projekti (ilmainen)

1. Mene osoitteeseen **https://supabase.com** ja kirjaudu / rekisteröidy
2. Luo uusi projekti → valitse alueeksi **eu-west** (Frankfurt, lähellä Suomea)
3. Odota ~2 min projektin käynnistystä

---

## Vaihe 2 — Asenna tietokanta

1. Avaa Supabase Dashboard → **SQL Editor**
2. Kopioi **koko `supabase-setup.sql`-tiedoston sisältö** ja liitä SQL Editoriin
3. Klikkaa **Run** → tarkista että ei tullut virheitä

---

## Vaihe 3 — Hae tunnukset

1. Supabase Dashboard → **Settings → API**
2. Kopioi kaksi arvoa:
   - **Project URL** (`https://xyz.supabase.co`)
   - **anon / public key** (pitkä merkkijono)

---

## Vaihe 4 — Aseta tunnukset `supabase-auth.js`:ään

Avaa `supabase-auth.js` ja vaihda:

```js
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";
```

↓ omiin arvoihisi, esim.:

```js
const SUPABASE_URL = "https://abcdefg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGci...";
```

---

## Vaihe 5 — Ota OTP-kirjautuminen käyttöön

1. Supabase Dashboard → **Authentication → Providers → Email**
2. Varmista että **"Confirm email"** on päällä
3. Vaihda **"Email OTP expiry"** esim. 10 minuuttiin (hyvä arvo)
4. Voit muokata sähköpostiviestin tekstiä kohdassa **Email Templates → "Magic Link"**

---

## Vaihe 6 — Julkaisu GitHub Pagesiin

### 6a. Luo GitHub-repositorio

```bash
# Luo kansio ja git-repo
git init perhevarallisuus
cd perhevarallisuus

# Kopioi kaikki tiedostot tähän kansioon
# (index.html, app.js, styles.css, supabase-auth.js)

git add .
git commit -m "Ensimmäinen versio"
```

### 6b. Luo GitHub-repo selaimessa

1. Mene **https://github.com/new**
2. Nimeä repo (esim. `perhevarallisuus`)
3. Valitse **Public** (GitHub Pages vaatii tämän ilmaisessa tilistä)
4. **Älä** lisää README:tä

### 6c. Push ja GitHub Pages

```bash
git remote add origin https://github.com/KÄYTTÄJÄNIMI/perhevarallisuus.git
git branch -M main
git push -u origin main
```

Sitten:
1. GitHub → repo → **Settings → Pages**
2. Source: **Deploy from a branch** → branch: `main`, folder: `/ (root)`
3. Klikkaa **Save**

Muutaman minuutin kuluttua sovellus on osoitteessa:
**`https://KÄYTTÄJÄNIMI.github.io/perhevarallisuus/`**

---

## Vaihe 7 — Aseta Supabase-domain (tärkeä!)

Supabase lähettää OTP-linkin sähköpostiin, ja se täytyy ohjata oikeaan osoitteeseen.

1. Supabase Dashboard → **Authentication → URL Configuration**
2. Lisää **Site URL**: `https://KÄYTTÄJÄNIMI.github.io/perhevarallisuus/`
3. Lisää sama **Redirect URLs** -listaan

---

## Kirjautuminen — miten se toimii

Käyttäjä syöttää sähköpostin → Supabase lähettää **6-numeroisen koodin** sähköpostiin → käyttäjä syöttää koodin → kirjautunut. **Ei salasanoja.**

Ensimmäisellä kirjautumisella Supabase luo automaattisesti uuden käyttäjätilin.

---

## Perhejäsenten kutsuminen (Vaihe 2 tulevassa päivityksessä)

Tällä hetkellä perhejäsenet lisätään manuaalisesti profiilisivulta. Täysimittainen kutsu-/hyväksymisvirta toteutetaan seuraavassa vaiheessa.

---

## Päivittäminen

Aina kun teet muutoksia tiedostoihin:

```bash
git add .
git commit -m "Kuvaus muutoksesta"
git push
```

GitHub Pages päivittyy automaattisesti ~1 minuutissa.

---

## Kustannukset

| Palvelu | Ilmainen taso riittää? |
|---|---|
| Supabase | Kyllä — 500 MB tietokanta, 50 000 auth-käyttäjää/kk |
| GitHub Pages | Kyllä — rajaton staattinen hosting |

Perheelle täysin ilmainen.

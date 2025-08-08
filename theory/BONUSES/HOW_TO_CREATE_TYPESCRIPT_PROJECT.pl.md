# Jak stworzyć projekt TypeScript?

> [!TIP]
> 💡 Wybierz swój język:
>
> - 🇬🇧 [English](./HOW_TO_CREATE_TYPESCRIPT_PROJECT.md)
> - 🇵🇱 [Polski](./HOW_TO_CREATE_TYPESCRIPT_PROJECT.pl.md)

Ten dokument zawiera **prosty** i **szybki** przewodnik krok po kroku do tworzenia projektu TypeScript od podstaw.

Skupiamy się na najważniejszych elementach, aby szybko zacząć, nie przytłaczając szczegółami.

> [!TIP]
> Ten poradnik jest przeznaczony dla **osób początkujących**, którzy chcą skonfigurować projekt TypeScript bez zagłębiania się w skomplikowane konfiguracje lub zaawansowane funkcje. Aby uzyskać bardziej szczegółowe informacje, możesz skorzystać z oficjalnej dokumentacji TypeScript lub [naszych kursów 🇵🇱](https://jaktestowac.pl/js-ts/).

**Spis treści:**

1. [Krok 1: Zainstaluj Node.js](#krok-1-zainstaluj-nodejs)
2. [Krok 2: Przygotuj nowy katalog](#krok-2-przygotuj-nowy-katalog)
3. [Krok 3: Zainicjuj projekt z npm](#krok-3-zainicjuj-projekt-z-npm)
4. [Krok 4: Zainstaluj TypeScript i @types/node](#krok-4-zainstaluj-typescript-i-@typesnode)
5. [Krok 5: Utwórz swój pierwszy plik TypeScript](#krok-5-utwórz-swoj-pierwszy-plik-typescript)
6. [Krok 6: Uruchom skrypt](#krok-6-uruchom-skrypt)
    - [Opcja 1: Uruchom TypeScript z `tsx` (bez kompilacji)](#opcja-1-uruchom-typescript-z-tsx-bez-kompilacji)
    - [Opcja 2: Uruchom TypeScript z `ts-node` (bez kompilacji)](#opcja-2-uruchom-typescript-z-ts-node-bez-kompilacji)
    - [Opcja 3: Kompiluj i uruchom](#opcja-3-kompiluj-i-uruchom)
7. [Co to jest `tsconfig.json`?](#co-to-jest-tsconfigjson)
    - [Czy potrzebuję `tsconfig.json`?](#czy-potrzebuje-tsconfigjson)
    - [Czy `ts-node` i `tsx` wymagają `tsconfig.json`?](#czy-ts-node-i-tsx-wymagaja-tsconfigjson)
    - [Jak stworzyć `tsconfig.json`?](#jak-stworzyc-tsconfigjson)
8. [Podsumowanie](#podsumowanie)

## Krok 1: Zainstaluj Node.js

Upewnij się, że masz zainstalowany **Node.js** na swoim komputerze. Możesz go pobrać z [nodejs.org](https://nodejs.org/).
Aby sprawdzić, czy Node.js jest zainstalowany, uruchom następującą komendę w terminalu:

```bash
node -v
```

> [!TIP]
> Zalecamy używanie najnowszej wersji LTS (Long Term Support) Node.js dla lepszej stabilności.

Jeśli Node.js jest zainstalowany, zobaczysz numer wersji. Jeśli nie, zainstaluj go z linku podanego powyżej.

## Krok 2: Przygotuj nowy katalog

Utwórz nowy katalog dla swojego projektu i przejdź do niego:

```bash
mkdir moj-projekt-typescript
cd moj-projekt-typescript
```

## Krok 3: Zainicjuj projekt z npm

Zainicjuj nowy projekt z npm, uruchamiając:

```bash
npm init
```

Zostaniesz poproszony o odpowiedź na kilka pytań dotyczących Twojego projektu. Możesz nacisnąć Enter, aby zaakceptować domyślne wartości, lub podać własne.
Jeśli chcesz pominąć pytania i użyć domyślnych wartości, możesz uruchomić:

```bash
npm init -y
```

Ta komenda tworzy plik `package.json` z domyślnymi ustawieniami.

## Krok 4: Zainstaluj TypeScript i @types/node

Zainstaluj TypeScript w swoim projekcie, uruchamiając następującą komendę:

```bash
npm install typescript
```

Ta komenda instaluje TypeScript jako lokalną zależność w Twoim projekcie. Możesz także zainstalować go globalnie, dodając flagę `-g`, ale generalnie zaleca się trzymanie go lokalnie w projekcie.

Zainstalujemy również `@types/node`, aby uzyskać typy dla Node.js:
```bash
npm install @types/node
```

> [!TIP]
> Instalacja `@types/node` zapewnia typy dla wbudowanych modułów Node.js, co jest przydatne, jeśli planujesz używać Node.js w swoim projekcie TypeScript.


## Krok 5: Utwórz swój pierwszy plik TypeScript

Utwórz nowy plik o nazwie `index.ts` w katalogu swojego projektu:

```bash
touch index.ts
```

Otwórz `index.ts` w swoim ulubionym edytorze tekstu i dodaj następujący kod:

```typescript
const powitanie: string = "Witaj, TypeScript!"
console.log(powitanie)
```

## Krok 6: Uruchom skrypt (bez kompilacji)

### Opcja 1: Uruchom TypeScript z `tsx`

Aby uruchomić swój plik TypeScript bez kompilacji do JavaScript, możesz użyć pakietu `tsx`. Najpierw zainstaluj `tsx` jako zależność deweloperską:

```bash
npm install tsx
```

Teraz możesz uruchomić swój plik TypeScript bezpośrednio:

```bash
npx tsx index.ts
```

> [!TIP]
> Używanie `tsx` pozwala na bezpośrednie uruchamianie plików TypeScript bez konieczności wcześniejszej kompilacji.
> Zapewnia szybki i efektywny sposób wykonywania kodu TypeScript w środowiskach deweloperskich. `tsx` to nowoczesna alternatywa dla `ts-node` i jest zalecana do bezpośredniego uruchamiania plików TypeScript.

### Opcja 2: Uruchom TypeScript z `ts-node`

Jeśli wolisz używać `ts-node`, możesz go zainstalować w następujący sposób:

```bash
npm install ts-node
```

Teraz możesz uruchomić swój plik TypeScript bezpośrednio:

```bash
npx ts-node index.ts
```

> [!TIP]
> Używanie `ts-node` pozwala na bezpośrednie uruchamianie plików TypeScript bez konieczności wcześniejszej kompilacji.
> To popularny wybór do uruchamiania skryptów TypeScript w środowiskach deweloperskich.

### Opcja 3: Kompiluj i uruchom

Jeśli chcesz skompilować swój kod TypeScript do JavaScript, a następnie go uruchomić, możesz to zrobić za pomocą następujących komend:

```bash
npx tsc index.ts
node index.js
```

> [!TIP]
> Kompilacja TypeScript do JavaScript jest przydatna w środowiskach produkcyjnych, gdzie chcesz uruchomić zoptymalizowany kod JavaScript.
> Możesz także skonfigurować skrypt budowania w swoim `package.json`, aby zautomatyzować ten proces.

## Co to jest `tsconfig.json`?

Plik `tsconfig.json` to plik konfiguracyjny używany przez kompilator TypeScript do zrozumienia, jak kompilować Twój kod TypeScript. Pozwala określić różne opcje, takie jak docelowa wersja JavaScript, system modułów i wiele więcej.

Ten plik zazwyczaj znajduje się w głównym katalogu Twojego projektu TypeScript.

### Czy potrzebuję `tsconfig.json`?

Choć posiadanie pliku `tsconfig.json` w projekcie TypeScript nie jest ściśle wymagane, jest wysoce zalecane.
Ten plik zapewnia ważne opcje konfiguracyjne, które mogą pomóc w wczesnym wykrywaniu błędów, poprawie przepływu pracy deweloperskiej i zapewnieniu spójnego zachowania w różnych środowiskach.

### Czy `ts-node` i `tsx` wymagają `tsconfig.json`?

Zarówno `ts-node`, jak i `tsx` mogą działać bez pliku `tsconfig.json`, ale posiadanie go jest korzystne.

- `ts-node` użyje domyślnych ustawień, jeśli nie ma `tsconfig.json`.
- `tsx` także działa bez `tsconfig.json`, ale użyje rozsądnych domyślnych ustawień.

### Jak utworzyć `tsconfig.json`?

Możesz utworzyć plik `tsconfig.json`:

- ręcznie lub
- użyć CLI TypeScript do wygenerowania go z domyślnymi ustawieniami.

### Używanie CLI TypeScript

Aby utworzyć plik `tsconfig.json` używając CLI TypeScript, uruchom następującą komendę w katalogu swojego projektu:

```bash
npx tsc --init
```

Ta komenda wygeneruje plik `tsconfig.json` z domyślnymi ustawieniami. Możesz następnie dostosować go do potrzeb swojego projektu.

### Ręczne tworzenie `tsconfig.json`

Jeśli wolisz utworzyć plik `tsconfig.json` ręcznie, możesz to zrobić, tworząc nowy plik o nazwie `tsconfig.json` w katalogu swojego projektu i dodając następującą zawartość:

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
    }
}
```

# Podsumowanie

Ten przewodnik przeprowadził Cię przez kroki tworzenia projektu TypeScript, od instalacji Node.js po uruchomienie pierwszego pliku TypeScript. Możesz wybrać między bezpośrednim uruchamianiem plików TypeScript za pomocą `tsx` lub `ts-node`, albo kompilowaniem ich do JavaScript i uruchamianiem skompilowanego kodu.

---

**Miłego kodowania! 🚀**

_Linia `export {}` jest jak umieszczenie kodu w bezpiecznym pudełku - utrzymuje go w porządku i zapobiega konfliktom z innym kodem._

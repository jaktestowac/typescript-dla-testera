# How to Create a TypeScript Project?

> [!TIP]
> 💡 Choose your language:
>
> - 🇬🇧 [English](./HOW_TO_CREATE_TYPESCRIPT_PROJECT.md)
> - 🇵🇱 [Polski](./HOW_TO_CREATE_TYPESCRIPT_PROJECT.pl.md)

This document provides You **simple** and **quick** step-by-step guide to creating a TypeScript project from scratch.

We focus on the essentials to get you started quickly, without overwhelming you with details.

> [!TIP]
> This guide is designed for beginners who want to set up a TypeScript project without diving into complex configurations or advanced features. For more detailed information, you can refer to the official TypeScript documentation or other resources or [our courses 🇵🇱](https://jaktestowac.pl/js-ts/).

**Table of Contents:**

1. [Step 1: Install Node.js](#step-1-install-nodejs)
2. [Step 2: Initialize a New Project](#step-2-initialize-a-new-project)
3. [Step 3: Initialize npm](#step-3-initialize-npm)
4. [Step 4: Install TypeScript](#step-4-install-typescript)
5. [Step 5: Create Your First TypeScript File](#step-5-create-your-first-typescript-file)
6. [Step 6: Run the script](#step-6-run-the-script)
    - [Option 1: Run TypeScript with `tsx` (without compiling)](#option-1-run-typescript-with-tsx-without-compiling)
    - [Option 2: Run TypeScript with `ts-node` (without compiling)](#option-2-run-typescript-with-ts-node-without-compiling)
    - [Option 3: Compile and Run](#option-3-compile-and-run)
7. [What is `tsconfig.json`?](#what-is-tsconfigjson)
    - [Do I need `tsconfig.json`?](#do-i-need-tsconfigjson)
    - [Do `ts-node` and `tsx` require `tsconfig.json`?](#do-ts-node-and-tsx-require-tsconfigjson)
    - [How to create `tsconfig.json`?](#how-to-create-tsconfigjson)
8. [Summary](#summary)

## Step 1: Install Node.js

Ensure you have **Node.js** installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
To check if Node.js is installed, run the following command in your terminal:

```bash
node -v
```

> [!TIP]
> We recommend using the latest LTS (Long Term Support) version of Node.js for better stability.

If Node.js is installed, you will see the version number. If not, please install it from the link provided above.

## Step 2: Initialize a New Project

Create a new directory for your project and navigate into it:

```bash
mkdir my-typescript-project
cd my-typescript-project
```

## Step 3: Initialize npm

Initialize a new npm project by running:

```bash
npm init
```

You will be prompted to answer several questions about your project. You can press Enter to accept the default values or provide your own.
If you want to skip the prompts and use default values, you can run:

```bash
npm init -y
```

This command creates a `package.json` file with default settings.

## Step 4: Install TypeScript and @types/node

Install TypeScript in your project by running the following command:

```bash
npm install typescript
```

This command installs TypeScript as a local dependency in your project. You can also install it globally by adding the `-g` flag, but it's generally recommended to keep it local to the project.

We will also install `@types/node` to get types for Node.js:

```bash
npm install @types/node
```

> [!TIP]
> Installing `@types/node` provides types for the built-in Node.js modules, which is useful if you plan to use Node.js in your TypeScript project.

## Step 5: Create Your First TypeScript File

Create a new file named `index.ts` in your project directory:

```bash
touch index.ts
```

Open `index.ts` in your favorite text editor and add the following code:

```typescript
const greeting: string = "Hello, TypeScript!"
console.log(greeting)
```

## Step 6: Run the script

### Option 1: Run TypeScript with `tsx` (without compiling)

To run your TypeScript file without compiling it to JavaScript, you can use the `tsx` package. First, install `tsx` as a development dependency:

```bash
npm install tsx
```

Now you can run your TypeScript file directly:

```bash
npx tsx index.ts
```

> [!TIP]
> Using `tsx` allows you to run TypeScript files directly without needing to compile them first.
> It provides a fast and efficient way to execute TypeScript code in development environments. `tsx` is a modern alternative to `ts-node` and is recommended for running TypeScript files directly.

### Option 2: Run TypeScript with `ts-node` (without compiling)

If you prefer to use `ts-node`, you can install it as follows:

```bash
npm install ts-node
```

Now you can run your TypeScript file directly:

```bash
npx ts-node index.ts
```

> [!TIP]
> Using `ts-node` allows you to run TypeScript files directly without needing to compile them first.
> It is a popular choice for running TypeScript scripts in development environments.

### Option 3: Compile and Run

If you want to compile your TypeScript code to JavaScript and then run it, you can do so with the following commands:

```bash
npx tsc index.ts
node index.js
```

> [!TIP]
> Compiling TypeScript to JavaScript is useful for production environments where you want to run optimized JavaScript code.
> You can also set up a build script in your `package.json` to automate this process.

## What is `tsconfig.json`?

The `tsconfig.json` file is a configuration file used by the TypeScript compiler to understand how to compile your TypeScript code. It allows you to specify various options such as the target JavaScript version, module system, and more.

This file is typically located at the root of your TypeScript project.

### Do I need `tsconfig.json`?

While it's not strictly required to have a `tsconfig.json` file in your TypeScript project, it's highly recommended.
This file provides important configuration options that can help you catch errors early, improve your development workflow, and ensure consistent behavior across different environments.

### Do `ts-node` and `tsx` require `tsconfig.json`?

Both `ts-node` and `tsx` can work without a `tsconfig.json` file, but having one is beneficial.

- `ts-node` will use default settings if no `tsconfig.json` is present.
- `tsx` also works without a `tsconfig.json`, but it will use sensible defaults.

### How to create `tsconfig.json`?

You can create a `tsconfig.json` file:

- manually or
- use the TypeScript CLI to generate one with default settings.

### Using the TypeScript CLI

To create a `tsconfig.json` file using the TypeScript CLI, run the following command in your project directory:

```bash
npx tsc --init
```

This command will generate a `tsconfig.json` file with default settings. You can then customize it according to your project's needs.

### Manually Creating `tsconfig.json`

If you prefer to create the `tsconfig.json` file manually, you can do so by creating a new file named `tsconfig.json` in your project directory and adding the following content:

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

# Summary

This guide has walked you through the steps to create a TypeScript project, from installing Node.js to running your first TypeScript file. You can choose between running TypeScript files directly with `tsx` or `ts-node`, or compiling them to JavaScript and running the compiled code.

---

**Happy coding! 🚀**

_The `export {}` line is like putting your code in a safe box - it keeps it organized and prevents conflicts with other code._

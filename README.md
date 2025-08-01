# 🗺️ Prisma Name Mapper

A custom Prisma generator that creates a TypeScript mapping of model and field names to their corresponding database names. Useful for raw SQL, logging, migrations, and tooling.

#### 🎁 Example Output

```typescript
// 🔴️ AUTO-GENERATED FILE — DO NOT EDIT! 🔴
export const PrismaNameMapper = {
  User: {
    dbName: "user_table",
    fields: {
      id: "user_id",
      name: "full_name",
    },
  },
} as const;
```

---

## Installation

```bash
$ npm install -d prisma-name-mapper-generator
$ bun add -d prisma-name-mapper-generator
```

## ⚙️ Usage

In your `schema.prisma`:

```prisma
generator dbnames {
  provider = "prisma-name-mapper"
  output   = "../generated/mapper/index.ts"
}
```

Then run:

```bash
$ bunx prisma generate
```

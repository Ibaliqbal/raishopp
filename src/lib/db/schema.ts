// import { relations, sql } from "drizzle-orm";
import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["admin", "member"]);
export const TypeLogin = pgEnum("typeLogin", ["google", "credentials"]);
export const ThemeUser = pgEnum("themeUser", ["dark", "light", "system"]);
export const StatusOrder = pgEnum("statusOrder", [
  "pending",
  "canceled",
  "success",
]);

export const UsersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    avatar: varchar("avatar", { length: 255 }),
    role: UserRole("role").default("member").notNull(),
    typeLogin: TypeLogin("type_login").default("credentials"),
    theme: ThemeUser("theme").default("dark").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    address: jsonb("address")
      .array()
      .default(sql`ARRAY[]::jsonb[]`),
  },
  (table) => {
    return {
      idIndex: index("idUserIndex").on(table.id),
    };
  }
);

export const StoresTable = pgTable(
  "stores",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    name: varchar("name", { length: 255 }).unique().notNull(),
    description: text().default(""),
    headerPhoto: varchar("headerPhoto", { length: 255 }),
    address: jsonb("address")
      .array()
      .default(sql`ARRAY[]::jsonb[]`),
    userId: uuid("user_id").references(() => UsersTable.id, {
      onDelete: "cascade",
    }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => {
    return {
      idIndex: index("idStoreIndex").on(table.id),
      nameIndex: index("nameStoreIndex").on(table.name),
    };
  }
);

export const PromoTable = pgTable(
  "promo",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    code: varchar("code", { length: 255 }).unique().notNull(),
    amount: integer("amount").default(0).notNull(),
    uses: bigint("uses", { mode: "number" }).default(0).notNull(),
    productsAllowed: jsonb("uses")
      .array()
      .default(sql`ARRAY[]::jsonb[]`),
    createdAt: timestamp("created_at").defaultNow(),
    expiredAt: timestamp("updated_at").defaultNow(),
  },
  (table) => {
    return {
      idIndex: index("idPromoIndex").on(table.id),
      codeIndex: index("codePromoIndex").on(table.code),
    };
  }
);

export const ProductsTable = pgTable(
  "products",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    storeId: uuid("store_id").references(() => StoresTable.id, {
      onDelete: "cascade",
    }),
    name: varchar("name", { length: 255 }).notNull(),
    description: text().default(""),
    variant: jsonb("variant")
      .array()
      .default(sql`ARRAY[]::jsonb[]`),
    rating: smallint("rating").default(0),
    category: varchar("category", { length: 255 }).default(""),
    promoCode: jsonb("promo_code")
      .array()
      .default(sql`ARRAY[]::jsonb[]`),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => {
    return {
      idIndex: index("idProductIndex").on(table.id),
      storeIdIndex: index("storeIdProductIndex").on(table.storeId),
      nameIndex: index("nameProductIndex").on(table.name),
      categoryIndex: index("categoryProductIndex").on(table.category),
    };
  }
);

export const CartsTable = pgTable(
  "carts",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    userId: uuid("user_id").references(() => UsersTable.id, {
      onDelete: "cascade",
    }),
    produtId: uuid("produt_id").references(() => ProductsTable.id, {
      onDelete: "cascade",
    }),
    variant: varchar("variant", { length: 255 }).notNull(),
    quantity: integer("quantity").default(1).notNull(),
    isCheckout: boolean("is_checkout").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      idIndex: index("idCartIndex").on(table.id),
      userIdIndex: index("userIdCartIndex").on(table.userId),
    };
  }
);

export const OrdersTable = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  userId: uuid("user_id").references(() => UsersTable.id, {
    onDelete: "cascade",
  }),
  products: jsonb("products_order")
    .array()
    .default(sql`ARRAY[]::jsonb[]`),
  status: StatusOrder("status").default("pending"),
  promoCode: varchar("promo_code").references(() => PromoTable.code, {
    onDelete: "restrict",
  }),
  storeIds: jsonb("store_ids")
    .array()
    .default(sql`ARRAY[]::jsonb[]`),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// All type
export type TUser = typeof UsersTable.$inferSelect;
export type TUserInsert = typeof UsersTable.$inferInsert;

import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

const prefixes = {
  request: "req",
  session: "ses",
  user: "usr",
  token: "tok",
  account: "acc",
  invite: "inv",
  membership: "mem",
  organization: "org",
  schedules: "sch",
} as const;

type Prefix = keyof typeof prefixes;

export function newId(prefix: Prefix): string {
  return [prefixes[prefix], nanoid(32)].join("_");
}

export function createSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

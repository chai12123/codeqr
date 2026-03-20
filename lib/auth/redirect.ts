/** Allow only same-origin admin paths as post-auth redirect targets. */
export function safeAdminNextParam(path: string | null): string | null {
  if (!path || path.startsWith("//") || !path.startsWith("/admin")) {
    return null;
  }
  return path;
}

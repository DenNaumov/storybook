const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.replace(/\/+$/, "");
  return normalized.length > 0 ? normalized : "/";
};

export const appendPathSegment = (pathname: string, segment: string) => {
  const basePath = normalizePathname(pathname);
  const normalizedSegment = segment.replace(/^\/+|\/+$/g, "");

  if (!normalizedSegment) {
    return basePath;
  }

  return basePath === "/"
    ? `/${normalizedSegment}`
    : `${basePath}/${normalizedSegment}`;
};

export const replaceLastPathSegment = (
  pathname: string,
  currentSegment: string,
  nextSegment: string,
) => {
  const basePath = normalizePathname(pathname);
  const normalizedCurrent = currentSegment.replace(/^\/+|\/+$/g, "");
  const normalizedNext = nextSegment.replace(/^\/+|\/+$/g, "");

  if (!normalizedCurrent) {
    return appendPathSegment(basePath, normalizedNext);
  }

  const suffix = `/${normalizedCurrent}`;

  if (!basePath.endsWith(suffix)) {
    return appendPathSegment(basePath, normalizedNext);
  }

  const parentPath = basePath.slice(0, -suffix.length) || "/";
  return appendPathSegment(parentPath, normalizedNext);
};

export const removeLastPathSegment = (pathname: string, segment: string) => {
  const basePath = normalizePathname(pathname);
  const normalizedSegment = segment.replace(/^\/+|\/+$/g, "");

  if (!normalizedSegment) {
    return basePath;
  }

  const suffix = `/${normalizedSegment}`;

  if (!basePath.endsWith(suffix)) {
    return basePath;
  }

  return basePath.slice(0, -suffix.length) || "/";
};

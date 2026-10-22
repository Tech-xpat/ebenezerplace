import type { CSSProperties, ReactNode } from "react";
import { Link as TanLink, useNavigate as useTanNavigate, useRouterState } from "@tanstack/react-router";

type LinkProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  hash?: string;
  style?: CSSProperties;
};

export function Link({ to, children, className, onClick, hash, style }: LinkProps) {
  const [path, inlineHash] = to.split("#");
  const hashValue = (hash ?? (inlineHash ? `#${inlineHash}` : undefined))?.replace(/^#/, "");
  return (
    <TanLink to={path || "/"} hash={hashValue} className={className} onClick={onClick} style={style}>
      {children}
    </TanLink>
  );
}

export function useLocation() {
  return useRouterState({
    select: (s) => ({
      pathname: s.location.pathname,
      hash: s.location.hash,
      search: s.location.searchStr ?? "",
    }),
  });
}

export function useNavigate() {
  const navigate = useTanNavigate();
  return (to: string | { pathname?: string; hash?: string }) => {
    if (typeof to === "string") {
      navigate({ to });
      return;
    }
    navigate({
      to: to.pathname || "/",
      hash: to.hash?.replace(/^#/, ""),
    });
  };
}

export function useParams<T extends Record<string, string>>() {
  const params = useRouterState({
    select: (s) => s.matches[s.matches.length - 1]?.params ?? {},
  });
  return params as T;
}

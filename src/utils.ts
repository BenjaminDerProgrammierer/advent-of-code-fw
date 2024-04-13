export function disable(query: string) {
  document.querySelector(query)?.setAttribute("disabled", "");
}

export function enable(query: string) {
  document.querySelector(query)?.removeAttribute("disabled");
}

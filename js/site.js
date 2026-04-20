/**
 * Generous Plate — mobile nav drawer & small UX helpers
 */
function openNavDrawer() {
  const d = document.getElementById("nav-drawer");
  const o = document.getElementById("nav-overlay");
  if (!d || !o) return;
  d.classList.remove("-translate-x-full");
  o.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("overflow-hidden");
}

function closeNavDrawer() {
  const d = document.getElementById("nav-drawer");
  const o = document.getElementById("nav-overlay");
  if (!d || !o) return;
  d.classList.add("-translate-x-full");
  o.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("overflow-hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeNavDrawer();
});

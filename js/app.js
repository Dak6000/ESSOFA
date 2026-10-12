const cfg = window.SITE_CONFIG || {};
const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f") + " FCFA";
function waLink(text) {
  return `https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(text || cfg.MESSAGES.default)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".phone-display").forEach((e) => (e.textContent = cfg.PHONE_DISPLAY || ""));
  document.querySelectorAll(".addr-display").forEach((e) => (e.textContent = cfg.ADDRESS || ""));
  // Tous les boutons .wa ouvrent une discussion avec un message prédéfini (data-msg = clé de cfg.MESSAGES)
  document.querySelectorAll(".wa").forEach((a) => {
    a.href = waLink(cfg.MESSAGES[a.dataset.msg || "default"]);
    a.target = "_blank";
    a.rel = "noopener";
  });
  const menu = document.querySelector(".menu"),
    links = document.querySelector(".links");
  if (menu) menu.onclick = () => links.classList.toggle("open");
  const grid = document.querySelector("#product-grid");
  if (grid) {
    const q = document.querySelector("#search"),
      filters = document.querySelector("#filters");
    let current = new URLSearchParams(location.search).get("cat") || "all";
    const render = () => {
      let term = (q?.value || "").toLowerCase();
      let list = PRODUCTS.filter(
        (p) =>
          (current === "all" || p.category === current) &&
          (!term ||
            `${p.name} ${p.description} ${p.category}`
              .toLowerCase()
              .includes(term)),
      );
      grid.innerHTML = list.map(card).join("");
      if (!list.length)
        grid.innerHTML =
          '<div style="grid-column:1/-1;padding:40px;text-align:center;color:#6D7485">Aucun produit ne correspond à votre recherche.</div>';
      window.animateDynamicCards?.(grid);
    };
    if (filters) {
      filters.innerHTML =
        `<button class="filter${current === "all" ? " active" : ""}" data-cat="all">Tous</button>` +
        CATEGORIES.map(
          (c) =>
            `<button class="filter${c.name === current ? " active" : ""}" data-cat="${c.name}">${c.name}</button>`,
        ).join("");
      filters.onclick = (e) => {
        let b = e.target.closest(".filter");
        if (!b) return;
        current = b.dataset.cat;
        filters
          .querySelectorAll(".filter")
          .forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        render();
      };
    }
    q?.addEventListener("input", render);
    render();
  }
  document.querySelectorAll("[data-featured]").forEach((el) => {
    el.innerHTML = PRODUCTS.slice(0, 4).map(card).join("");
    window.animateDynamicCards?.(el);
  });
  document.querySelectorAll("[data-categories]").forEach((el) => {
    el.innerHTML = CATEGORIES.map(
      (c) =>
        `<a class="universe" href="catalogue.html?cat=${encodeURIComponent(c.name)}"><div class="ico">${icon(c.key)}</div><h3>${c.name}</h3><p>${c.description}</p></a>`,
    ).join("");
    window.animateDynamicCards?.(el);
  });
});
function icon(k) {
  return (
    {
      pagne: "✦",
      sac: "▣",
      chaussure: "⌁",
      mode: "◈",
      cuisine: "♨",
      scolaire: "✎",
      moto: "⌂",
      informatique: "▦",
      electro: "◉",
    }[k] || "✦"
  );
}
function card(p) {
  const msg = `Bonjour ESSOFA SHOP, je souhaite commander : ${p.name} (${p.price}). J'ai vu l'article sur votre site.`;
  const n = p.images.length;
  return `<article class="product"><a href="produit.html?id=${p.id}"><div class="product-img"><span class="badge">${p.cotisation === "Oui" ? "Disponible en cotisation" : "Produit"}</span><img src="${imgPath(p, 0)}" alt="${p.name}" loading="lazy"><span class="count">${n} photos</span></div></a><div class="product-body"><div class="product-cat">${p.category}</div><h3>${p.name}</h3><div class="price">${p.price}</div><p>${p.description}</p><div class="product-actions"><a class="btn btn-outline" href="produit.html?id=${p.id}">Voir</a><a class="btn btn-gold" target="_blank" rel="noopener" href="${waLink(msg)}">WhatsApp</a></div></div></article>`;
}

/* ---------- Fiche produit : galerie 3 à 5 images + couleurs + cotisation ---------- */
function renderProduct(root) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
  document.title = p.name + " — ESSOFA SHOP";
  let cur = 0;
  const colorFor = (i) => (p.colors.find((c) => c.image === i) || p.colors[0]).name;
  const thumbs = p.images.map((im, i) => `<button class="thumb" data-i="${i}" aria-label="Photo ${i + 1} : ${im.label}"><img src="${imgPath(p, i)}" alt="" loading="lazy"></button>`).join("");
  const swatches = p.colors.map((c) => `<button class="swatch" data-i="${c.image}" title="${c.name}" aria-label="Coloris ${c.name}"><i style="background:${c.hex}"></i>${c.name}</button>`).join("");
  const cot = p.cotisation === "Oui";
  const months = (cfg.COTISATION_MONTHS || [3]).map((m) => `<option value="${m}">${m} mois</option>`).join("");
  root.innerHTML = `<nav class="crumbs"><a href="catalogue.html">Catalogue</a> / <a href="catalogue.html?cat=${encodeURIComponent(p.category)}">${p.category}</a> / ${p.name}</nav>
  <div class="detail"><div class="gallery"><div class="gallery-main"><img id="g-main" src="${imgPath(p, 0)}" alt="${p.name}"><button class="g-nav prev" aria-label="Photo précédente">‹</button><button class="g-nav next" aria-label="Photo suivante">›</button><span class="g-count" id="g-count"></span></div><div class="thumbs">${thumbs}</div><p class="g-caption" id="g-cap"></p></div>
  <div><div class="eyebrow">${p.category}</div><h1>${p.name}</h1><div class="price">${p.price}</div><p>${p.description}</p>
  <div class="opt-title">Coloris : <b id="g-color"></b></div><div class="swatches">${swatches}</div>
  <ul class="highlights">${p.highlights.map((h) => `<li>${h}</li>`).join("")}<li>À retirer à la boutique, ${cfg.ADDRESS}</li></ul>
  ${cot ? `<div class="notice"><b>✓ Disponible en cotisation</b><br>Étalez le paiement et récupérez l'article une fois la somme atteinte.<div class="sim"><label>Sur combien de temps ?<select id="sim-m">${months}</select></label><div class="sim-out"><span id="sim-w"></span><small id="sim-mo"></small></div></div><small class="muted">Simulation indicative : les modalités exactes sont confirmées avec la boutique.</small><br><a href="cotisation.html" class="inline">Comment fonctionne la cotisation ?</a></div>` : `<div class="notice"><b>Information</b><br>Cet article se commande directement auprès de la boutique. Contactez-nous pour connaître les modalités.</div>`}
  <div class="actions"><a class="btn btn-gold" id="wa-order" target="_blank" rel="noopener" href="#">Commander sur WhatsApp</a>${cot ? `<a class="btn btn-dark" id="wa-cot" target="_blank" rel="noopener" href="#">Cotiser pour cet article</a>` : ""}<a class="btn btn-outline" href="catalogue.html">← Catalogue</a></div></div></div>`;
  const $ = (q) => root.querySelector(q);
  const show = (i) => {
    cur = (i + p.images.length) % p.images.length;
    $("#g-main").src = imgPath(p, cur);
    $("#g-count").textContent = `${cur + 1} / ${p.images.length}`;
    $("#g-cap").textContent = p.images[cur].label;
    $("#g-color").textContent = colorFor(cur);
    root.querySelectorAll(".thumb").forEach((t, k) => t.classList.toggle("on", k === cur));
    root.querySelectorAll(".swatch").forEach((t) => t.classList.toggle("on", +t.dataset.i === cur || (cur >= p.colors.length && +t.dataset.i === 0)));
    const color = colorFor(cur);
    $("#wa-order").href = waLink(`Bonjour ESSOFA SHOP, je souhaite commander : ${p.name} (${p.price}), coloris ${color}. Est-il disponible ?`);
    const c = $("#wa-cot");
    if (c) c.href = waLink(`Bonjour ESSOFA SHOP, je souhaite ouvrir un carnet de cotisation pour : ${p.name} (${p.price}), coloris ${color}, sur ${$("#sim-m").value} mois. Pouvez-vous m'expliquer les modalités ?`);
  };
  root.querySelectorAll(".thumb, .swatch").forEach((b) => b.addEventListener("click", () => show(+b.dataset.i)));
  $(".prev").onclick = () => show(cur - 1);
  $(".next").onclick = () => show(cur + 1);
  document.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
  let x0 = null; const gm = $(".gallery-main");
  gm.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  gm.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
  const upd = () => { if (!cot) return; const m = +$("#sim-m").value; $("#sim-w").textContent = `≈ ${fmt(Math.ceil(p.priceNum / (m * 4) / 50) * 50)} / semaine`; $("#sim-mo").textContent = `soit ≈ ${fmt(Math.ceil(p.priceNum / m / 50) * 50)} / mois sur ${m} mois`; show(cur); };
  if (cot) $("#sim-m").onchange = upd;
  cot ? upd() : show(0);
  window.animateDynamicCards?.(root);
}

/* ---------- Simulateur de la page cotisation ---------- */
function renderSimulator(root) {
  root.innerHTML = `<label>Article<select id="s-p">${PRODUCTS.filter((p) => p.cotisation === "Oui").map((p) => `<option value="${p.id}">${p.name} — ${p.price}</option>`).join("")}</select></label><label>Durée<select id="s-m">${cfg.COTISATION_MONTHS.map((m) => `<option value="${m}">${m} mois</option>`).join("")}</select></label><div class="sim-res"><div><small>Par semaine</small><b id="s-w"></b></div><div><small>Par mois</small><b id="s-mo"></b></div><div><small>Prix de l'article</small><b id="s-t"></b></div></div><a class="btn btn-gold" id="s-wa" target="_blank" rel="noopener" href="#">Ouvrir mon carnet sur WhatsApp</a>`;
  const g = (q) => root.querySelector(q);
  const upd = () => {
    const p = PRODUCTS.find((x) => x.id === g("#s-p").value), m = +g("#s-m").value;
    g("#s-w").textContent = fmt(Math.ceil(p.priceNum / (m * 4) / 50) * 50);
    g("#s-mo").textContent = fmt(Math.ceil(p.priceNum / m / 50) * 50);
    g("#s-t").textContent = p.price;
    g("#s-wa").href = waLink(`Bonjour ESSOFA SHOP, je souhaite ouvrir un carnet de cotisation pour : ${p.name} (${p.price}) sur ${m} mois. Pouvez-vous m'expliquer les modalités ?`);
  };
  root.querySelectorAll("select").forEach((e) => (e.onchange = upd));
  upd();
}
document.addEventListener("DOMContentLoaded", () => {
  const d = document.querySelector("#detail"); if (d) renderProduct(d);
  const s = document.querySelector("#simulator"); if (s) renderSimulator(s);
});

/* ---------- ESSOFA Motion Engine ---------- */
function initMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Navigation : état compact lors du scroll + fermeture du menu mobile
  const nav = document.querySelector(".nav");
  const updateNav = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
  };
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Liens de navigation : page active
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("#")[0];
    if (href === current || (current === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Éléments à révéler progressivement au défilement.
  const revealSelectors = [
    ".section-head",
    ".universe",
    ".product",
    ".cotise",
    ".step",
    ".quote",
    ".about-grid > *",
    ".value",
    ".contact-card",
    ".detail > *",
    ".toolbar",
    ".map",
    ".footer-grid > *"
  ];

  const revealElements = [];
  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.classList.contains("reveal") && !el.classList.contains("stagger-item")) {
        el.classList.add("reveal");
        revealElements.push(el);
      }
    });
  });

  // Les éléments d'une grille apparaissent légèrement en cascade.
  document.querySelectorAll(".universes, .products, .testimonials, .values, .steps").forEach((grid) => {
    [...grid.children].forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
    });
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // Animation des cartes produits/catégories injectées après le chargement.
  window.animateDynamicCards = function(container) {
    if (!container) return;
    const items = container.querySelectorAll(".product, .universe");
    items.forEach((el, index) => {
      el.classList.add("stagger-item");
      el.style.setProperty("--stagger-delay", `${Math.min(index * 55, 350)}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    items.forEach((el) => observer.observe(el));
  };

  // Transition douce lors de la navigation interne.
  if (!reduceMotion) {
    document.querySelectorAll('a[href$=".html"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || link.target === "_blank") return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.body.style.transition = "opacity .18s ease";
        document.body.style.opacity = "0";
        setTimeout(() => { window.location.href = href; }, 180);
      });
    });
  }

  // Petit effet de profondeur sur l'illustration d'accueil.
  const heroArt = document.querySelector(".hero-art");
  if (heroArt && !reduceMotion && window.matchMedia("(min-width: 901px)").matches) {
    heroArt.addEventListener("mousemove", (e) => {
      const rect = heroArt.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;
      const card = heroArt.querySelector(".hero-card");
      if (card) card.style.transform = `translate(${x * 10}px, ${y * 8}px) rotate(4deg)`;
    });
    heroArt.addEventListener("mouseleave", () => {
      const card = heroArt.querySelector(".hero-card");
      if (card) card.style.transform = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", initMotion);

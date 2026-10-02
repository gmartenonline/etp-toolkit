(function () {
    var t = document.createElement('template');
    t.innerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo"><img src="images/etp-logo.png" alt="EcoTipping Points"></a>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links">
                <li><a href="foundations.html">Foundations</a></li>
                <li class="has-dropdown">
                    <a href="#" class="dropdown-toggle">Toolkit</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4>Systems Thinking</h4>
                            <a href="systems-thinking-overview.html">Overview</a>
                            <a href="systems-thinking-understand.html">Understand It</a>
                            <a href="systems-thinking-recognize.html">Recognize It</a>
                            <a href="systems-thinking-map.html">Map It</a>
                            <a href="systems-thinking-map-practice.html" class="dropdown-sub">Map It in Practice</a>
                            <a href="systems-thinking-reverse.html">Reverse It</a>
                            <a href="systems-thinking-reverse-practice.html" class="dropdown-sub">Reverse It in Practice</a>
                            <a href="systems-thinking-lock.html">Lock It In</a>
                        </div>
                        <div class="dropdown-section">
                            <h4>Ingredients for Success</h4>
                            <a href="ingredients-overview.html">Overview</a>
                            <a href="ingredient-outside-stimulation.html">Outside stimulation and facilitation</a>
                            <a href="ingredient-shared-awareness.html">Shared community awareness and commitment</a>
                            <a href="ingredient-harmony-ecosystem.html">Harmony between community and ecosystem</a>
                            <a href="ingredient-enduring-commitment.html">Enduring commitment of local leadership</a>
                            <a href="ingredient-letting-nature-work.html">Letting nature do the work</a>
                            <a href="ingredient-mobilizing-commitment.html">Mobilizing community commitment</a>
                            <a href="ingredient-overcoming-obstacles.html">Overcoming social obstacles</a>
                            <a href="ingredient-social-ecological-diversity.html">Social and ecological diversity</a>
                            <a href="ingredient-social-ecological-memory.html">Social and ecological memory</a>
                            <a href="ingredient-building-resilience.html">Building resilience</a>
                        </div>
                    </div>
                </li>
                <li class="has-dropdown">
                    <a href="#" class="dropdown-toggle">Case Studies</a>
                    <div class="dropdown-menu dropdown-menu-narrow">
                        <div class="dropdown-section">
                            <h4>Community Stories</h4>
                            <a href="story-apo-island.html">Marine Sanctuary - Philippines</a>
                            <a href="story-khao-din.html">Agroforestry - Thailand</a>
                            <a href="story-punukula.html">Pesticide Trap - India</a>
                            <a href="story-gopalpura.html">Rainwater Harvesting - India</a>
                        </div>
                    </div>
                </li>
                <li><a href="resources.html">Resources</a></li>
            </ul>
        </div>
    </nav>`;

    document.currentScript.before(t.content);

    function initNav() {
        var hamburger = document.querySelector('.hamburger');
        var navLinks = document.querySelector('.nav-links');
        var dropdownToggles = document.querySelectorAll('.has-dropdown > a');

        if (hamburger) {
            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            dropdownToggles.forEach(function (toggle) {
                toggle.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggle.parentElement.classList.toggle('active');
                    }
                });
            });

            document.addEventListener('click', function (e) {
                if (!e.target.closest('.navbar')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }

        // Carousel initialization
        document.querySelectorAll('.story-carousel').forEach(function (carousel) {
            var track = carousel.querySelector('.carousel-track');
            var slides = carousel.querySelectorAll('.carousel-slide');
            var navBtns = carousel.querySelectorAll('.carousel-btn');
            var prevBtn = navBtns[0] || null;
            var nextBtn = navBtns[navBtns.length - 1] || null;
            var dots = carousel.querySelectorAll('.carousel-dot');
            var counter = carousel.querySelector('.carousel-counter');
            var current = 0;
            var total = slides.length;

            if (!track || total === 0) return;

            function goTo(index) {
                current = Math.max(0, Math.min(index, total - 1));
                track.style.transform = 'translateX(-' + (current * 100) + '%)';
                dots.forEach(function (dot, i) {
                    dot.classList.toggle('active', i === current);
                });
                if (counter) counter.textContent = 'Story ' + (current + 1) + ' of ' + total;
                if (prevBtn) prevBtn.disabled = current === 0;
                if (nextBtn) nextBtn.disabled = current === total - 1;
            }

            if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
            if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
            dots.forEach(function (dot) {
                dot.addEventListener('click', function () {
                    goTo(parseInt(dot.dataset.index, 10));
                });
            });

            goTo(0);
        });
    }

    function initFooter() {
        var F = "font-family:'Source Sans 3',sans-serif;";

        function col(title, links) {
            var items = links.map(function (l) {
                return '<a href="' + l.href + '" style="' + F + 'display:block;font-size:14px;color:#4d564e;text-decoration:none;margin-bottom:9px;">' + l.text + '</a>';
            }).join('');
            return '<div><div style="' + F + 'font-size:11px;font-weight:600;color:#C92914;margin-bottom:14px;">' + title + '</div>' + items + '</div>';
        }

        var upper =
            '<div class="etp-foot-grid" style="max-width:calc(var(--max-width) + 2 * var(--content-pad-x));margin:0 auto;padding:54px var(--content-pad-x) 44px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;">' +
                '<div>' +
                    '<img src="images/etp-logo.png" alt="EcoTipping Points" style="height:26px;width:auto;display:block;margin-bottom:16px;">' +
                    '<p style="' + F + 'font-size:16px;line-height:1.5;color:#4d564e;max-width:280px;margin:0;">A practical toolkit for facilitating community-scale ecological restoration, grounded in systems thinking and field experience.</p>' +
                '</div>' +
                col('The Toolkit', [
                    { href: 'foundations.html', text: 'Foundations' },
                    { href: 'systems-thinking-overview.html', text: 'Systems Thinking' },
                    { href: 'ingredients-overview.html', text: 'Ingredients for Success' }
                ]) +
                col('Case Studies', [
                    { href: 'story-apo-island.html', text: 'Apo Island, Philippines' },
                    { href: 'story-gopalpura.html', text: 'Gopalpura, India' },
                    { href: 'story-khao-din.html', text: 'Khao Din, Thailand' },
                    { href: 'story-punukula.html', text: 'Punukula, India' }
                ]) +
                col('More', [
                    { href: 'resources.html', text: 'Resources' },
                    { href: 'glossary.html', text: 'Glossary' },
                    { href: 'https://www.ecotippingpoints.org/', text: 'EcoTippingPoints.org' },
                    { href: 'about.html', text: 'About the project' }
                ]) +
            '</div>';

        var bar =
            '<div style="background:#173a2b;color:#a6c0b0;">' +
                '<div style="max-width:calc(var(--max-width) + 2 * var(--content-pad-x));margin:0 auto;padding:18px var(--content-pad-x);' + F + 'font-size:12px;letter-spacing:0.04em;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;">' +
                    '<span>©2026 EcoTipping Points</span>' +
                    '<div style="text-align:right;">' +
                        '<div>v0.7.0 · 10/1/26</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        var footer = document.createElement('footer');
        footer.className = 'footer';
        footer.style.background = '#eef0ed';
        footer.style.borderTop = '1px solid #e4e7e3';
        footer.innerHTML = upper + bar;
        document.body.appendChild(footer);

        // Responsive: collapse the 4 columns on small screens.
        if (!document.getElementById('etp-foot-style')) {
            var st = document.createElement('style');
            st.id = 'etp-foot-style';
            st.textContent =
                '@media (max-width:64rem){.etp-foot-grid{grid-template-columns:1fr 1fr!important;}}' +
                '@media (max-width:40rem){.etp-foot-grid{grid-template-columns:1fr!important;padding:36px var(--content-pad-x) 32px!important;}}';
            document.head.appendChild(st);
        }
    }

    // Section menus: drive the desktop rail / mobile nav and the order of
    // pages in a section print.
    var sections = {
        'systems-thinking': {
            label: 'Systems Thinking',
            items: [
                { href: 'systems-thinking-overview.html', text: 'Overview' },
                { href: 'systems-thinking-understand.html', text: 'Understand It' },
                { href: 'systems-thinking-recognize.html', text: 'Recognize It' },
                { href: 'systems-thinking-map.html', text: 'Map It' },
                { href: 'systems-thinking-map-practice.html', text: 'Map It in Practice', indent: true },
                { href: 'systems-thinking-reverse.html', text: 'Reverse It' },
                { href: 'systems-thinking-reverse-practice.html', text: 'Reverse It in Practice', indent: true },
                { href: 'systems-thinking-lock.html', text: 'Lock It In' }
            ]
        },
        'ingredient': {
            label: 'Ingredients for Success',
            items: [
                { href: 'ingredients-overview.html', text: 'Overview' },
                { href: 'ingredient-outside-stimulation.html', text: 'Outside stimulation and facilitation' },
                { href: 'ingredient-shared-awareness.html', text: 'Shared community awareness and commitment' },
                { href: 'ingredient-harmony-ecosystem.html', text: 'Harmony between community and ecosystem' },
                { href: 'ingredient-enduring-commitment.html', text: 'Enduring commitment of local leadership' },
                { href: 'ingredient-letting-nature-work.html', text: 'Letting nature do the work' },
                { href: 'ingredient-mobilizing-commitment.html', text: 'Mobilizing community commitment' },
                { href: 'ingredient-overcoming-obstacles.html', text: 'Overcoming social obstacles' },
                { href: 'ingredient-social-ecological-diversity.html', text: 'Social and ecological diversity' },
                { href: 'ingredient-social-ecological-memory.html', text: 'Social and ecological memory' },
                { href: 'ingredient-building-resilience.html', text: 'Building resilience' }
            ]
        }
    };

    function initSectionRail() {
        var subnav = document.querySelector('.subnav');
        if (!subnav) return;

        var page = window.location.pathname.split('/').pop() || 'index.html';

        var sectionKey = null;
        if (page.indexOf('systems-thinking') === 0) sectionKey = 'systems-thinking';
        else if (page.indexOf('ingredient') === 0) sectionKey = 'ingredient';

        if (!sectionKey) return;

        var sec = sections[sectionKey];
        var items = sec.items;

        // Find current item by matching page
        var currentIndex = 0;
        items.forEach(function (item, i) { if (item.href === page) currentIndex = i; });
        var total = items.length;

        function makeItems() {
            return items.map(function (item) {
                var isActive = (item.href === page);
                var cls = isActive ? 'rail-active' : '';
                if (item.indent) cls += (cls ? ' ' : '') + 'rail-indent';
                return '<li><a href="' + item.href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + item.text + '</a></li>';
            }).join('');
        }

        var railItems = makeItems();

        // Build desktop rail aside
        var rail = document.createElement('aside');
        rail.className = 'section-rail';
        rail.setAttribute('aria-label', sec.label + ' navigation');
        rail.innerHTML = '<span class="rail-label">' + sec.label + '</span><ul class="rail-list">' + railItems + '</ul>';

        // Build rail-content wrapper
        var railContent = document.createElement('div');
        railContent.className = 'rail-content';

        // Outer flex wrapper
        var wrapper = document.createElement('div');
        wrapper.className = 'section-with-rail';
        wrapper.appendChild(rail);
        wrapper.appendChild(railContent);

        // Build mobile section menu
        var mobileNav = document.createElement('div');
        mobileNav.className = 'section-mobile-nav';
        var panelId = 'section-menu-panel';
        mobileNav.innerHTML =
            '<button class="section-menu-btn" aria-expanded="false" aria-controls="' + panelId + '">' +
                '<span class="section-menu-label">' + sec.label + '</span>' +
                '<span class="section-menu-current"><span>' + items[currentIndex].text + '</span><span>' + (currentIndex + 1) + ' / ' + total + ' ▾</span></span>' +
            '</button>' +
            '<ul class="section-menu-panel" id="' + panelId + '" aria-hidden="true">' + railItems + '</ul>';

        // Find page-header and move content after it
        var pageHeader = document.querySelector('.page-header');
        if (!pageHeader) return;

        // Hide the original horizontal subnav
        subnav.style.display = 'none';

        // Collect all siblings after pageHeader, move into railContent
        var node = pageHeader.nextSibling;
        while (node) {
            var next = node.nextSibling;
            railContent.appendChild(node);
            node = next;
        }

        // Insert mobile nav then desktop wrapper after pageHeader
        pageHeader.insertAdjacentElement('afterend', mobileNav);
        mobileNav.insertAdjacentElement('afterend', wrapper);

        // Mobile toggle
        var btn = mobileNav.querySelector('.section-menu-btn');
        var panel = mobileNav.querySelector('.section-menu-panel');
        btn.addEventListener('click', function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            panel.setAttribute('aria-hidden', String(expanded));
        });

        // Close panel on item click
        panel.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                btn.setAttribute('aria-expanded', 'false');
                panel.setAttribute('aria-hidden', 'true');
            });
        });
    }

    function initDfnPopovers() {
        var dfns = document.querySelectorAll('dfn[data-definition]');
        if (!dfns.length) return;

        var popover = document.createElement('div');
        popover.className = 'dfn-popover';
        popover.innerHTML = '<span class="dfn-popover-close">&times;</span><span class="dfn-popover-text"></span>';
        document.body.appendChild(popover);
        var textEl = popover.querySelector('.dfn-popover-text');
        var closeEl = popover.querySelector('.dfn-popover-close');
        var isTouch = window.matchMedia('(hover: none)').matches;

        function show(term, x, y) {
            textEl.textContent = term.dataset.definition;
            popover.classList.add('is-open');
            popover.style.top = (y + 8) + 'px';
            if (!isTouch) {
                var maxLeft = window.innerWidth - popover.offsetWidth - 16;
                popover.style.left = Math.max(16, Math.min(x, maxLeft)) + 'px';
            }
        }

        function hide() {
            popover.classList.remove('is-open');
        }

        dfns.forEach(function (term) {
            if (isTouch) {
                term.addEventListener('click', function (e) {
                    e.stopPropagation();
                    var point = (e.touches && e.touches[0]) || e;
                    show(term, point.clientX, point.clientY);
                });
            } else {
                term.addEventListener('mouseenter', function (e) { show(term, e.clientX, e.clientY); });
                term.addEventListener('mouseleave', hide);
            }
        });

        closeEl.addEventListener('click', hide);
        document.addEventListener('click', function (e) {
            if (isTouch && !e.target.closest('.dfn-popover') && !e.target.closest('dfn')) hide();
        });
    }

    // ---- Section print: a "Download as PDF" link with
    // data-print-section="<section>" fetches every page of that section,
    // extracts each page's content (the .page-header and everything after it)
    // and prints them as one job, each page starting on a new sheet. ----
    function sectionPages(key) {
        if (sections[key]) return sections[key].items.map(function (item) { return item.href; });
        // Community Sessions has no rail entry; its menu is the page's own subnav.
        return Array.prototype.map.call(document.querySelectorAll('.subnav-container a'), function (a) {
            return a.getAttribute('href');
        });
    }

    // Page-level <style> blocks are re-scoped to their own chunk so one
    // page's rules can't restyle another page's content.
    function scopeCss(cssText, scope) {
        var sheet;
        try { sheet = new CSSStyleSheet(); sheet.replaceSync(cssText); } catch (e) { return ''; }
        function splitSelectors(sel) {
            var out = [], depth = 0, cur = '';
            for (var i = 0; i < sel.length; i++) {
                var c = sel[i];
                if (c === '(' || c === '[') depth++;
                else if (c === ')' || c === ']') depth--;
                if (c === ',' && depth === 0) { out.push(cur); cur = ''; } else cur += c;
            }
            out.push(cur);
            return out;
        }
        function walk(rules) {
            return Array.prototype.map.call(rules, function (r) {
                if (r.selectorText !== undefined && r.style) {
                    var sel = splitSelectors(r.selectorText).map(function (one) {
                        one = one.trim();
                        if (/^(html|body|:root)\b/.test(one)) return scope + one.replace(/^(html|body|:root)/, '');
                        return scope + ' ' + one;
                    }).join(', ');
                    return sel + ' { ' + r.style.cssText + ' }';
                }
                if (r.media && r.cssRules) return '@media ' + r.media.mediaText + ' { ' + walk(r.cssRules) + ' }';
                return r.cssText;
            }).join('\n');
        }
        return walk(sheet.cssRules);
    }

    function extractPrintChunk(html, href) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var header = doc.querySelector('body > .page-header');
        if (!header) throw new Error('No .page-header in ' + href);

        var chunk = document.createElement('section');
        chunk.className = 'print-chunk';
        chunk.setAttribute('data-print-page', href);

        var css = Array.prototype.map.call(doc.querySelectorAll('head style'), function (st) {
            return st.textContent;
        }).join('\n');
        if (css) {
            var style = document.createElement('style');
            style.textContent = scopeCss(css, '.print-chunk[data-print-page="' + href + '"]');
            chunk.appendChild(style);
        }

        for (var node = header; node; node = node.nextElementSibling) {
            if (node.tagName !== 'SCRIPT') chunk.appendChild(document.importNode(node, true));
        }

        chunk.querySelectorAll('.video-embed, iframe, script').forEach(function (el) { el.remove(); });
        chunk.querySelectorAll('a[data-print-section], a[onclick*="print"]').forEach(function (a) {
            (a.closest('.callout') || a).remove();
        });
        chunk.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
        return chunk;
    }

    function initSectionPrint() {
        var busy = false;
        document.addEventListener('click', function (e) {
            var link = e.target.closest && e.target.closest('a[data-print-section]');
            if (!link) return;
            e.preventDefault();
            if (busy) return;
            busy = true;

            var label = link.textContent;
            link.textContent = 'Preparing PDF…';

            function restore() {
                link.textContent = label;
                busy = false;
            }

            var pages = sectionPages(link.getAttribute('data-print-section'));
            Promise.all(pages.map(function (href) {
                return fetch(href).then(function (res) {
                    if (!res.ok) throw new Error(href + ' returned ' + res.status);
                    return res.text();
                }).then(function (html) { return extractPrintChunk(html, href); });
            })).then(function (chunks) {
                var box = document.createElement('div');
                box.id = 'print-assembly';
                chunks.forEach(function (chunk) { box.appendChild(chunk); });
                document.body.appendChild(box);
                document.body.classList.add('printing-section');

                // Wait for the assembled pages' images so none print blank.
                var images = Array.prototype.map.call(box.querySelectorAll('img'), function (img) {
                    return img.complete ? null : new Promise(function (done) {
                        img.addEventListener('load', done);
                        img.addEventListener('error', done);
                    });
                });
                return Promise.all(images).then(function () {
                    window.addEventListener('afterprint', function cleanup() {
                        window.removeEventListener('afterprint', cleanup);
                        box.remove();
                        document.body.classList.remove('printing-section');
                        restore();
                    });
                    window.print();
                });
            }).catch(function (err) {
                console.warn('Section print failed; printing this page only.', err);
                var partial = document.getElementById('print-assembly');
                if (partial) partial.remove();
                document.body.classList.remove('printing-section');
                restore();
                window.print();
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initNav(); initSectionRail(); initFooter(); initDfnPopovers(); initSectionPrint(); });
    } else {
        initNav();
        initSectionRail();
        initFooter();
        initDfnPopovers();
        initSectionPrint();
    }
}());

(function () {
    var opened = [];
    window.addEventListener('beforeprint', function () {
        opened = [];
        document.querySelectorAll('details.video-script:not([open])').forEach(function (d) {
            d.setAttribute('open', '');
            opened.push(d);
        });
    });
    window.addEventListener('afterprint', function () {
        opened.forEach(function (d) { d.removeAttribute('open'); });
        opened = [];
    });
})();

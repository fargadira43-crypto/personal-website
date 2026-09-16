        (function(){
            var btn = document.getElementById('header_1788404480254_menu_btn');
            var menu = document.getElementById('header_1788404480254_menu');
            if (!btn || !menu) return;
            function closeMenu() {
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
            function toggleMenu(e) {
                e.stopPropagation();
                var isOpen = menu.classList.toggle('open');
                btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            }
            btn.addEventListener('click', toggleMenu);
            menu.querySelectorAll('a').forEach(function(a){
                a.addEventListener('click', function(e){
                    e.preventDefault();
                    closeMenu();
                    var targetId = a.getAttribute('data-scroll-target');
                    var targetEl = targetId ? document.getElementById(targetId) : null;
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
            document.addEventListener('click', function(e){
                if (!menu.contains(e.target) && e.target !== btn) closeMenu();
            });
            document.addEventListener('keydown', function(e){
                if (e.key === 'Escape') closeMenu();
            });
        })();
        (function(){
            var track = document.querySelector('#services_1788405183098 .services-track');
            if (!track) return;
            var autoplayMs = 1.5 * 1000;
            var paused = false, resumeTimer = null;
            function next(){
                if (paused) return;
                var card = track.querySelector('.service-card');
                var step = card ? card.offsetWidth + 16 : 220;
                if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
                    track.scrollTo({left: 0, behavior: 'smooth'});
                } else {
                    track.scrollBy({left: step, behavior: 'smooth'});
                }
            }
            setInterval(next, autoplayMs);
            function onManual(){
                paused = true;
                clearTimeout(resumeTimer);
                resumeTimer = setTimeout(function(){ paused = false; }, autoplayMs);
            }
            track.addEventListener('touchstart', onManual, {passive: true});
            track.addEventListener('mousedown', onManual);
            track.addEventListener('wheel', onManual, {passive: true});
        })();
        (function(){
            var track = document.querySelector('#testimonials_1788405649946 .testimonials-track');
            var viewport = document.querySelector('#testimonials_1788405649946 .testimonials-viewport');
            if (!track || !viewport) return;
            var count = track.children.length;
            if (count <= 1) return;
            var index = 0;
            setInterval(function(){
                index = (index + 1) % count;
                track.style.transform = 'translateY(' + (-index * viewport.offsetHeight) + 'px)';
            }, 2000);
        })();
        (function(){
            var btn = document.getElementById('contact_1788405485893_btn');
            var input = document.getElementById('contact_1788405485893_email');
            if (!btn) return;
            btn.addEventListener('click', function(){
                var visitor = input ? input.value.trim() : '';
                var subject = encodeURIComponent('New message from your website');
                var body = encodeURIComponent('From: ' + (visitor || '(no email provided)') + '\n\n');
                window.location.href = 'mailto:you@example.com?subject=' + subject + '&body=' + body;
            });
        })();

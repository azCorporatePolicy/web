/**
 * includes.js
 * Inject shared header and footer into every page WITHOUT fetch().
 * Works with file:// (no web server needed) — pure static web.
 *
 * Each page's <body> must have data-page="<name>" e.g. data-page="about"
 */
(function () {

	var HEADER_HTML = `
<div id="phoneheader">
	<div class="menubutton" id="menubutton"></div>
</div>
<div id="header">
	<ul class="menu white">
		<li><a href="index.html" data-page="index">หน้าหลัก</a></li>
		<li><a href="about.html" data-page="about">เกี่ยวกับเรา</a></li>
		<li class="menuservice"><a href="#" data-page="service">บริการ</a>
			<ul class="svmenu">
				<li><a href="service-corporation.html" data-page="service-corporation">บริการสำหรับองค์กร</a></li>
			</ul>
		</li>
		<li><a href="contact.html" data-page="contact">ติดต่อเรา</a></li>
	</ul>
	<div class="clear"></div>
</div>`;

	var FOOTER_HTML = `
<div id="footer">
	<div class="ftnav">
		<div class="ftbox">
			<h3 class="fthead">Corporate Service</h3>
			<ul class="ftmenu">
				<li><a href="service-corporation.html">Financial product for organization</a></li>
			</ul>
		</div>
		<div class="ftbox">
			<h3 class="fthead">about</h3>
			<ul class="ftmenu">
				<li><a href="about.html">Our story</a></li>
			</ul>
		</div>
		<div class="ftbox">
			<h3 class="fthead">follow us</h3>
			<ul class="ftmenu">
				<li><a href="https://www.facebook.com/plantconsultant/" target="_blank"><img alt="" src="images/01-main_137.png" /><p>plant</p></a></li>
				<li><a href="http://line.me/ti/p/@plant.co" target="_blank"><img alt="" src="images/01-main_140.png" /><p>@plant.co</p></a></li>
			</ul>
		</div>
	</div>
	<div class="clear"></div>
</div>`;

	function inject() {
		// Inject header
		var headerEl = document.getElementById('header-placeholder');
		if (headerEl) headerEl.innerHTML = HEADER_HTML;

		// Inject footer
		var footerEl = document.getElementById('footer-placeholder');
		if (footerEl) footerEl.innerHTML = FOOTER_HTML;

		// Highlight active nav link
		var page = document.body.getAttribute('data-page') || '';
		document.querySelectorAll('#header .menu a[data-page]').forEach(function (a) {
			if (a.getAttribute('data-page') === page) {
				a.style.opacity = '1';
				a.style.fontWeight = '700';
			}
		});

		// Mobile menu toggle
		var btn = document.getElementById('menubutton');
		if (btn) {
			btn.addEventListener('click', function () {
				var h = document.getElementById('header');
				if (h) h.classList.toggle('active');
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', inject);
	} else {
		inject();
	}

})();

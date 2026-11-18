/* ============ EDIT EVERYTHING HERE ============ */
const CFG = {
    handle: "GhOsT_999", name: ["GUNASAGAR", "BEHERA"], typed: "Cybersecurity Expert & Developer",
    photo: "",                       // e.g. "/photo.webp" (empty = placeholder)
    resume: "/Resume.pdf", github: "https://github.com/gunasagar03",
    lead: "Ethical Hacker, Developer specializing in <b>VAPT</b>, <b>Digital Forensics</b>, and <b>Web Development</b>.",
    about: ["I am a dedicated <b>Ethical Hacker</b> and Cybersecurity Expert driven by a passion for securing complex digital landscapes. My core expertise lies in identifying and resolving critical vulnerabilities through in-depth Penetration Testing, Vulnerability Assessments (VAPT), and Digital Forensics."],
    skills: { "Cybersecurity": ["Ethical Hacking", "Web App Security", "Threat Analysis", "Digital Forensics", "VAPT", "Bug Bounty"], "Security Tools": ["Nmap", "Burp Suite", "Metasploit", "OWASP ZAP", "SQLmap", "Nessus"], "Programming & Systems": ["Linux", "Python", "Java", "C", "Shell Scripting", "Web Development"], "Professional Skills": ["Problem Solving", "Analytical Thinking", "Leadership", "Communication", "Teamwork", "Adaptability"] },
    jobs: [
        { date: "2026 August - September", title: "Intern", co: "The Drop Organization", url: "https://drop.org.in", desc: "Completed practical training in Web Application Penetration Testing, focusing on identifying, assessing, and documenting common web security vulnerabilities."},
        { date: "2027 - Onwards", title: "Upcomming..", co: "XXXXXX", url: "", desc: "upcomming.." },
    ],
    degree: ["Bachelor of Computer Applications", { school: "Ravenshaw University", years: "2025 - 2028" }],
    projects: [
        { t: "Project One", c: "Security Tool", d: "Short description of what this project does and why it matters.", tags: ["Tag", "Tag", "Tag"], url: "#" },
        { t: "Project Two", c: "Web App", d: "Short description of what this project does and why it matters.", tags: ["Tag", "Tag", "Tag"], url: "#" },
        { t: "Project Three", c: "Scanner", d: "Short description of what this project does and why it matters.", tags: ["Tag", "Tag", "Tag"], url: "#" }],
    freelance:"I am open to <b>VAPT</b>, <b>Web Application Security</b>, <b>Web Development</b> and <b>Cyber Security Auditing</b>",
    certs: [
        { t: "Upcomming..", by: "XXXXXX", f: "", ty: "TBA" },
        { t: "Advent of Cyber 2025", by: "TryHackMe", f: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NGVVSKRPQA.pdf", ty: "PDF" },
        { t: "Advent of Cyber 2024", by: "TryHackMe", f: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-PZSPKQNA7J.pdf", ty: "PDF" },
        { t: "Advent of Cyber 2023", by: "TryHackMe", f: "https://tryhackme.com/certificate/THM-KICIGTJNJW", ty: "WEB" },
        { t: "Coursera Certificate", by: "Coursera", f: "https://www.coursera.org/account/accomplishments/verify/RHMUGQOFR3NS?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse", ty: "WEB" },
        { t: "Coursera Specialization", by: "Coursera", f: "https://www.coursera.org/account/accomplishments/specialization/CE34TW0ZD2T9?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n", ty: "WEB" }],
    phone: "+91 9348873500", email: "gunasagar883@gmail.com",
    social: [["GITHUB", "https://github.com/gunasagar03"], ["LINKEDIN", "https://www.linkedin.com/in/gunasagar-behera"], ["TWITTER / X", "https://x.com/gunasagar883"], ["MEDIUM", "https://medium.com/@gunasagar883"]]
};
/* ============ ENGINE ============ */
const $ = id => document.getElementById(id), H = CFG.handle;
const ps = (p, c) => `<div class="ps"><span class="b">┌──(</span><span class="r">root㉿${H}</span><span class="b">)-[</span><span class="w">${p}</span><span class="b">]</span><br><span class="b">└─</span><span class="r">#</span> <span class="cmd">${c}</span></div>`;
const sec = (id, h) => `<section id="${id}"><div class="wrap">${h}</div></section>`;
const dots = '<span class="dots"><i></i><i></i><i></i></span>';
const kv = (k, v) => `<div><span class="b bd">${k}</span><span class="d">: </span>${v}</div>`;
const nav = ["About", "Skills", "Experience", "Projects", "Freelance", "Certificates"];
$("logo").innerHTML = `${dots}<span class="r bd">root</span><span class="d">㉿${H}: ~#</span><span class="cur" style="background:var(--r)"></span>`;
const L = nav.map(n => `<a href="#${n.toLowerCase()}">${n.toLowerCase()}</a>`).join("");
$("links").innerHTML = L;
$("mob").innerHTML = L + `<a class="btn" href="${CFG.resume}" target="_blank">[ MY RESUME ]</a><a class="btn blue" href="#footer">[ CONNECT ]</a>`;
$("mob").onclick = e => { if (e.target.closest("a")) toggle(false) };
function toggle(s) { $("mob").classList.toggle("open", s); $("burger").setAttribute("aria-expanded", s) }
$("burger").onclick = () => toggle(!$("mob").classList.contains("open"));
$("resume").href = CFG.resume; $("gh").href = CFG.github;
/* hero */
$("psHome").innerHTML = ps("~", "whoami");
$("hname").innerHTML = `<span class="w">${CFG.name[0]}</span><br><span class="g">${CFG.name.slice(1).join(" ")}</span>`;
$("lead").innerHTML = CFG.lead;
$("photo").innerHTML = CFG.photo ? `<img src="${CFG.photo}" alt="${CFG.name.join(" ")}">` : `<div>[ PHOTO ]<br><small>set CFG.photo</small></div>`;
$("nf").innerHTML = `<div><span class="r bd">root</span><span class="w">@</span><span class="b bd">${H}</span></div><div class="d">──────────────────</div>` + kv("OS", "Kali GNU/Linux Rolling") + kv("Role", CFG.typed) + kv("Shell", "zsh") + kv("Status", '<span class="g">● ONLINE</span>') + kv("Access", '<span class="g">GRANTED</span>');
/* sections */
const about = sec("about", ps("~/about", "cat about.txt") + `<div class="out">${CFG.about.map(p => `<p>${p}</p>`).join("")}</div>`);
const skills = sec("skills", ps("~/skills", "tree skills/") + `<div class="out g4">${Object.entries(CFG.skills).map(([k, v]) => `<div class="pane sk"><div class="tb"><span>drwxr-xr-x</span><span class="b bd">${k}/</span></div><ul class="pb">${v.map(s => `<li>${s}</li>`).join("")}</ul></div>`).join("")}</div>`);
const jobs = CFG.jobs.map(j => `<div class="job"><div class="dt">[ ${j.date} ]</div><h3>${j.title}</h3><h4><span class="d">@</span> ${j.url ? `<a href="${j.url}" target="_blank" rel="noopener" style="text-decoration:underline">${j.co}</a>` : j.co}</h4><p>${j.desc}</p></div>`).join("");
const l = (k, v) => `<div><span class="b">${k}</span> <span class="d">=</span> <span class="g">"${v}"</span></div>`;
const exp = sec("experience", ps("~/experience", "cat career.log") + `<div class="out">${jobs}</div>` + ps("~/education", "cat education.conf") + `<div class="out pane"><div class="pb">${l("degree", CFG.degree[0]) + l("school", CFG.degree[1].school) + l("years", CFG.degree[1].years)}</div></div>`);
const proj = sec("projects", ps("~/projects", "ls -l projects/") + `<div class="out g3">${CFG.projects.map((p, i) => `<div class="pane pj"><div class="tb"><span>-rwxr-xr-x</span><span>0${i + 1}</span></div><div class="pb"><span class="c">[${p.c}]</span><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.tags.map(t => `<span>#${t}</span>`).join("")}</div><div><a class="btn" href="${p.url}" target="_blank" rel="noopener">./view_source.sh</a></div></div></div>`).join("")}</div>`);
const fl = sec("freelance", ps("~/freelance", "systemctl status freelance.service") + `<div class="out svc"><span class="g">●</span> <span class="w bd">freelance.service</span> <span class="d">- Open for contracts</span>
<span class="d">   Loaded: loaded (/etc/systemd/system/freelance.service; </span><span class="g">enabled</span><span class="d">)</span>
   Active: <span class="g bd">active (running)</span> <span class="d">since ${new Date().toDateString()}</span>
    Scope: ${CFG.freelance}</div>`);
const certs = sec("certificates", ps("~/certs", "ls -lh certs/") + `<div class="out"><div class="d" style="padding:0 10px">total ${CFG.certs.length}</div>${CFG.certs.map(c => { const cols = "--cols:110px 56px 1.4fr 1fr auto", inner = `<span class="d hide">-rw-r--r--</span><span class="${c.ty === "PDF" ? "r" : "b"} bd">.${c.ty.toLowerCase()}</span><span class="w">${c.t}</span><span class="d">${c.by}</span><span class="go" style="min-width:6ch;text-align:right">${c.f ? "open ↗" : "soon"}</span>`; return c.f ? `<a class="row" style="${cols}" href="${c.f}" target="_blank" rel="noopener">${inner}</a>` : `<div class="row" style="${cols}">${inner}</div>` }).join("")}</div>`);
$("main").insertAdjacentHTML("beforeend", about + skills + exp + proj + fl + certs);
/* footer */
const row = (href, k, v, go) => `<a class="row" style="--cols:100px 1fr auto" href="${href}"><span class="b bd">${k}</span><span class="g">${v}</span><span class="go d">${go}</span></a>`;
$("footer").innerHTML = `<div class="wrap">` + ps("~/contact", "cat contact.vcf") + `<div class="out pane"><div class="pb">${row("tel:" + CFG.phone.replace(/\s/g, ""), "PHONE", CFG.phone, "dial ↗")}${row("mailto:" + CFG.email, "EMAIL", CFG.email, "send ↗")}</div></div>` + ps("~/contact", "./connect.sh --socials") + `<div class="soc">${CFG.social.map((s, i) => `<a class="btn${i % 2 ? " blue" : ""}" href="${s[1]}" target="_blank" rel="noopener">[ ${s[0]} ]</a>`).join("")}</div>` + ps("~", "exit") + `<div class="out d">logout<br>Connection to ${H} closed.</div><div class="ps"><span class="b">┌──(</span><span class="r">root㉿${H}</span><span class="b">)-[</span><span class="w">~</span><span class="b">]</span><br><span class="b">└─</span><span class="r">#</span> <span class="cur"></span></div><div class="d" style="font-size:.78rem;margin-top:22px">© ${new Date().getFullYear()} ${CFG.name.join(" ")}. All rights reserved.</div></div>`;
/* motion (replays on every scroll in/out, typed prompts, scroll-spy) */
const root = document.documentElement, RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
function clearCmd(c) { if (!c) return; clearTimeout(c._to); clearInterval(c._iv); c.textContent = ""; c.classList.remove("ty") }
function typeCmd(c, delay) {
    if (!c || !c.dataset.t) return;
    clearCmd(c);
    c._to = setTimeout(() => { let k = 0; const t = c.dataset.t; c.classList.add("ty"); c._iv = setInterval(() => { c.textContent = t.slice(0, ++k); if (k >= t.length) { clearInterval(c._iv); c.classList.remove("ty") } }, 34) }, delay || 0)
}
try {
    const spy = new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) document.querySelectorAll("#links a").forEach(a => a.classList.toggle("act", a.getAttribute("href") === "#" + x.target.id)) }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section").forEach(s => spy.observe(s));
    addEventListener("scroll", () => document.querySelector("nav").classList.toggle("sc", scrollY > 10), { passive: true });
    if (!RM) {
        root.classList.add("js");
        document.querySelectorAll(".cmd").forEach(c => { c.dataset.t = c.textContent; c.textContent = "" });
        /* hero: plays after boot, and again every time you scroll back to the top */
        const hero = [...document.querySelectorAll("#psHome,#hname,.role,.lead,.acts,.photo")];
        hero.forEach(e => { e.classList.add("hi"); e.addEventListener("animationend", ev => { if (ev.target === e) e.classList.remove("hi") }) });
        hero.forEach((e, i) => e.style.setProperty("--d", (.3 + i * .13) + "s"));
        let heroOut = false;
        new IntersectionObserver(en => en.forEach(x => {
            if (!x.isIntersecting) { heroOut = true; return }
            if (heroOut && root.classList.contains("ready")) {
                heroOut = false;
                hero.forEach((e, i) => { e.classList.remove("hi"); void e.offsetWidth; e.style.setProperty("--d", i * .1 + "s"); e.classList.add("hi") });
                startType()
            }
        }), { threshold: .3 }).observe($("home"));
        /* sections: reveal on enter, reset on leave, so it replays every time */
        const io = new IntersectionObserver(en => {
            let k = 0;
            en.forEach(x => {
                const e = x.target, c = e.matches(".ps") ? e.querySelector(".cmd") : null;
                clearTimeout(e._ok);
                if (x.isIntersecting) {
                    e.style.setProperty("--d", Math.min(k, 6) * .08 + "s");
                    e.classList.add("in");
                    if (c) typeCmd(c, k * 80);
                    e._ok = setTimeout(() => { e.classList.add("ok"); e.style.setProperty("--d", "0s") }, 1500);
                    k++
                } else {
                    e.classList.remove("in", "ok"); e.style.setProperty("--d", "0s");
                    clearCmd(c)
                }
            })
        }, { threshold: .1, rootMargin: "0px 0px -2% 0px" });
        document.querySelectorAll("main section:not(#home) .ps,main .out>p,main .out>.d,main .job,main .sk,main .pj,main .out.pane,main .svc,main .out>.row,footer .ps,footer .out,footer .soc .btn,footer .wrap>.d").forEach(e => { e.classList.add("rv"); io.observe(e) })
    }
} catch (e) { root.classList.remove("js") }
/* typewriter (after boot; replays when you return to the top) */
let ti = 0, tw;
function startType() {
    clearInterval(tw); ti = 0; $("type").textContent = "";
    typeCmd($("psHome").querySelector(".cmd"), 500);
    tw = setInterval(() => { $("type").textContent = CFG.typed.slice(0, ++ti); if (ti >= CFG.typed.length) clearInterval(tw) }, 50)
}
/* Kali-style boot: silver dragon, ice-blue glint, glow, fade out (click to skip) */
const boot = $("boot");
let fin = false; document.body.style.overflow = "hidden";
function done() {
    if (fin) return; fin = true;
    boot.classList.add("off"); document.body.style.overflow = "";
    clearTimeout(to);
    root.classList.add("ready"); startType()
}
const to = setTimeout(done, RM ? 900 : 5000); boot.onclick = done;

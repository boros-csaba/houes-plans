function nthroot(e, a) {
    try {
        var t = a % 2 == 1 && e < 0;
        t && (e = -e);
        var i = Math.pow(e, 1 / a);
        if (((a = Math.pow(i, a)), Math.abs(e - a) < 1 && e > 0 == a > 0)) return t ? -i : i;
    } catch (e) {}
}
function toRadians(e) {
    return e * (Math.PI / 180);
}
function toDegrees(e) {
    return e * (180 / Math.PI);
}
function parseFloatAndConst(e) {
    return parseFloat(String(e).replace(/pi/g, "3.14159").replace(/e/g, "2.71828"));
}
function getUrlParameters() {
    var e = {};
    window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function (a, t, i) {
        e[t] = i;
    });
    return e;
}
function clone_object(e) {
    if (null == e || "object" != typeof e) return e;
    var a = e.constructor();
    for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t]);
    return a;
}
function isFloat(e) {
    return Number(e) === e && e % 1 != 0;
}
function isInt(e) {
    return Number(e) === e && e % 1 == 0;
}
$(document).ready(function () {
    function e(e) {
        return (e = Math.round(e * m) / m), String(e).replace(/\./g, ",");
    }
    function a(e, a) {
        return (e = parseFloat(String(e).replace(/\,/g, "."))), (a = Math.pow(10, a)), (e = Math.round(e * a) / a), e;
    }
    function t() {
        var e = !1;
        if (
            ($(".formelblock input").each(function () {
                var a = $(this).val().indexOf(",") + 1,
                    t = $(this).val().length;
                a == t && (e = !0);
            }),
            e)
        )
            return !0;
    }
    function i() {
        var e = "",
            a = $("textarea[name=val_drawings]").val();
        a = a.replace(/\n+/g, "\n");
        var t = a.split("\n");
        (a = ""),
            $.each(t, function () {
                a += (0 == a.length ? "" : "\n") + this.trim();
            }),
            (a = encodeURIComponent(a.trim())),
            (e += "draw=" + a);
        var i = location.protocol + "//" + location.host + location.pathname;
        (i = i.replace(/\/$/, "")), R || (e += "&axesoff"), 2 != M && (e += "&cp=" + M), (v = i + "?" + e), $("#memvaluelink").attr("href", v), $("#perspectiveviewbtn").attr("href", "/rechner/schragbild?" + e);
    }
    function s() {
        Y = { font: Z, size: ae, height: 0.05, curveSegments: 2, weight: "normal", style: "normal" };
        var e = new THREE.TextGeometry("x", Y),
            a = new THREE.MeshBasicMaterial({ color: 5614080 });
        (J = new THREE.Mesh(e, a)), (J.position.z = ee + 0.1), (J.position.y = 0.1), W.add(J);
        var t = new THREE.TextGeometry("y", Y),
            i = new THREE.MeshBasicMaterial({ color: 255 });
        (Q = new THREE.Mesh(t, i)), (Q.position.x = ee + 0.1), (Q.position.y = 0.1), (Q.rotation.y = 0), W.add(Q);
        var s = new THREE.TextGeometry("z", Y),
            n = new THREE.MeshBasicMaterial({ color: 16711680 });
        (X = new THREE.Mesh(s, n)), (X.position.y = ee + 0.1), (X.rotation.y = 0), W.add(X);
    }
    function n() {
        $("#additionals").empty();
        var e = $("textarea[name=val_drawings]").val();
        if (e.indexOf("$") > -1) {
            var a = {},
                t = e.replace(/,/g, ".").split("\n"),
                i = 0,
                s = [];
            $.each(t, function () {
                var e = this.trim();
                e = e.replace(/ *(=) */g, "$1");
                var t = "",
                    n = "";
                if (0 == e.indexOf("$") && e.indexOf("=") > -1) {
                    var r = 0,
                        l = e.indexOf("=");
                    (t = e.substring(r + 1, l)), (n = e.substring(l + 1, e.length)), s.push(i), (a[t] = n);
                }
                i++;
            });
            var n = e.split("\n");
            $.each(s, function () {
                n[this] = "";
            }),
                (e = n.join("\n")),
                (e = e.replace(/(^[ \t]*\n)/gm, "")),
                $.each(a, function (a, t) {
                    var i = "\\$" + a,
                        s = new RegExp(i, "g");
                    e = e.replace(s, t);
                });
        }
        n = e.replace(/,/g, ".").split("\n");
        W.remove(B),
            (B = new THREE.Object3D()),
            (A = 0),
            (F = !1),
            $.each(n, function () {
                var e = this.toString();
                r(e);
            }),
            (J.visible = Q.visible = X.visible = R),
            (oe.visible = pe.visible = ce.visible = R),
            2 == M ||
                F ||
                ((fe.visible = ze.visible = Me.visible = $e.visible = Fe.visible = Ve.visible = we.visible = ye.visible = me.visible = xe.visible = Te.visible = He.visible = !1),
                V ? ((fe.visible = ze.visible = g), (Me.visible = $e.visible = f), (Fe.visible = Ve.visible = z)) : ((we.visible = ye.visible = g), (me.visible = xe.visible = f), (Te.visible = He.visible = z))),
            F ? $("#planeswitcher").hide() : $("#planeswitcher").show(),
            V &&
                $.each(B.children, function (e, a) {
                    a.castShadow = !0;
                }),
            W.add(B);
    }
    function r(a) {
        W.background = V ? new THREE.Color(11184810) : new THREE.Color(16777215);
        var t = a.substring(0, a.indexOf("(")).trim(),
            i = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).trim(),
            s = a.substring(a.indexOf("[") + 1, a.lastIndexOf("]")),
            n = a.substring(a.indexOf("%") + 1, a.lastIndexOf("%")),
            r = "#111",
            l = !1;
        H = T;
        for (var o, p = [], c = /\{(.*?)\}/g; null != (o = c.exec(a)); ) p.push(o[1]);
        for (var h = 0; h < p.length; h++) {
            var E = p[h];
            1 == E.length || E.indexOf(".") > -1 ? (H = parseFloat(E)) : (3 != E.length && 6 != E.length) || ((l = !0), (r = "#" + E));
        }
        if ((l || void 0 === L[A] || (r = L[A]), t != l_coordplanes && "text" != t && (A > 0 && $("#additionals").append("<br />"), "" != t && $("#additionals").append(t.charAt(0).toUpperCase() + t.slice(1) + ": ")), t == l_triangle)) {
            var d = i.replace(/\|/g, " ").split(" "),
                v = new THREE.LineBasicMaterial({ color: r, linewidth: 1 }),
                u = new THREE.Geometry(),
                b = new THREE.Geometry(),
                w = new Array([], [], []),
                y = 0;
            for (h = 0; h < d.length; h++) h % 3 == 0 && h > 0 && y++, void 0 !== w[y] && w[y].push(parseFloat(d[h]));
            for (h = 0; h < w.length; h++) {
                var m = h + 1;
                h + 1 >= w.length && (m = 0), u.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]), new THREE.Vector3(w[m][1], w[m][2], w[m][0])), b.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]));
            }
            var x = new THREE.Line(u, v);
            if ((B.add(x), "#" != a.slice(-1))) {
                b.faces.push(new THREE.Face3(0, 1, 2));
                var R = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0 });
                V && (R = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, side: THREE.DoubleSide, transparent: !0, opacity: H })), b.computeFaceNormals(), b.computeVertexNormals();
                var g = new THREE.Mesh(b, R);
                B.add(g);
            }
            var f = [
                    { x: w[0][0], y: w[0][1], z: w[0][2] },
                    { x: w[1][0], y: w[1][1], z: w[1][2] },
                    { x: w[2][0], y: w[2][1], z: w[2][2] },
                ],
                z = Math.sqrt(Math.pow(f[2].x - f[1].x, 2) + Math.pow(f[2].y - f[1].y, 2) + Math.pow(f[2].z - f[1].z, 2)),
                q = Math.sqrt(Math.pow(f[0].x - f[2].x, 2) + Math.pow(f[0].y - f[2].y, 2) + Math.pow(f[0].z - f[2].z, 2)),
                N = Math.sqrt(Math.pow(f[1].x - f[0].x, 2) + Math.pow(f[1].y - f[0].y, 2) + Math.pow(f[1].z - f[0].z, 2)),
                O = { x: w[1][0] - w[0][0], y: w[1][1] - w[0][1], z: w[1][2] - w[0][2] },
                C = { x: w[2][0] - w[0][0], y: w[2][1] - w[0][1], z: w[2][2] - w[0][2] },
                D = { x: w[1][0] - w[2][0], y: w[1][1] - w[2][1], z: w[1][2] - w[2][2] },
                K = Math.sqrt(Math.pow(O.y * C.z - O.z * C.y, 2) + Math.pow(O.z * C.x - O.x * C.z, 2) + Math.pow(O.x * C.y - O.y * C.x, 2)) / 2;
            $("#additionals").append('<span title="' + l_triangle_sidelength + '">a = ' + e(z) + "; b = " + e(q) + "; c = " + e(N) + "</span> &ensp;"),
                $("#additionals").append(
                    '<span title="' +
                        l_conn_vectors +
                        '">v<sub>a</sub> = (' +
                        e(O.x) +
                        "|" +
                        e(O.y) +
                        "|" +
                        e(O.z) +
                        "); v<sub>b</sub> = (" +
                        e(C.x) +
                        "|" +
                        e(C.y) +
                        "|" +
                        e(C.z) +
                        "); v<sub>c</sub> = (" +
                        e(D.x) +
                        "|" +
                        e(D.y) +
                        "|" +
                        e(D.z) +
                        "); </span> &ensp;"
                ),
                $("#additionals").append('<span title="' + l_area + '">A = ' + e(K) + "</span> &ensp;"),
                A++;
        } else if (t == l_plane) {
            for (d = i.replace(/\|/g, " ").split(" "), w = new Array([], [], []), y = 0, h = 0; h < d.length; h++) h % 3 == 0 && h > 0 && y++, void 0 !== w[y] && w[y].push(parseFloat(d[h]));
            var Z = { x: w[0][0], y: w[0][1], z: w[0][2] },
                J = { x: w[1][0], y: w[1][1], z: w[1][2] },
                Q = { x: w[2][0], y: w[2][1], z: w[2][2] },
                X = { x: w[1][0] - w[0][0], y: w[1][1] - w[0][1], z: w[1][2] - w[0][2] },
                ee = { x: w[2][0] - w[0][0], y: w[2][1] - w[0][1], z: w[2][2] - w[0][2] };
            if ("#" == a.slice(-1)) {
                var te = 11184844,
                    ie = 0.3,
                    se = 0.09,
                    ne = new THREE.Vector3(Z.y, Z.z, Z.x),
                    re = new THREE.Vector3(J.y, J.z, J.x),
                    le = new THREE.Vector3().subVectors(re, ne).normalize(),
                    oe = Math.sqrt(Math.pow(X.y, 2) + Math.pow(X.z, 2) + Math.pow(X.x, 2)),
                    pe = new THREE.ArrowHelper(le, ne, oe, te);
                pe.setLength(oe, ie, se), B.add(pe);
                var ce = new THREE.Vector3(Z.y, Z.z, Z.x),
                    he = new THREE.Vector3(Q.y, Q.z, Q.x),
                    Ee = new THREE.Vector3().subVectors(he, ce).normalize(),
                    de = Math.sqrt(Math.pow(ee.y, 2) + Math.pow(ee.z, 2) + Math.pow(ee.x, 2)),
                    _e = new THREE.ArrowHelper(Ee, ce, oe, te);
                _e.setLength(de, ie, se), B.add(_e);
            }
            (v = new THREE.LineBasicMaterial({ color: 16755455, linewidth: 1 })), (u = new THREE.Geometry());
            var ve = 2;
            (vec_r_length = Math.sqrt(X.x * X.x + X.y * X.y + X.z * X.z)),
                (vec_q_length = Math.sqrt(ee.x * ee.x + ee.y * ee.y + ee.z * ee.z)),
                (ve = 10 / (0.5 * (vec_r_length + vec_q_length))),
                u.vertices.push(new THREE.Vector3(Z.y - ve * X.y - ve * ee.y, Z.z - ve * X.z - ve * ee.z, Z.x - ve * X.x - ve * ee.x)),
                u.vertices.push(new THREE.Vector3(Z.y + ve * X.y - ve * ee.y, Z.z + ve * X.z - ve * ee.z, Z.x + ve * X.x - ve * ee.x)),
                (ve = 10 / (0.5 * (vec_r_length + vec_q_length))),
                u.vertices.push(new THREE.Vector3(Z.y + ve * X.y + ve * ee.y, Z.z + ve * X.z + ve * ee.z, Z.x + ve * X.x + ve * ee.x)),
                u.vertices.push(new THREE.Vector3(Z.y - ve * X.y + ve * ee.y, Z.z - ve * X.z + ve * ee.z, Z.x - ve * X.x + ve * ee.x)),
                u.vertices.push(new THREE.Vector3(Z.y - ve * X.y - ve * ee.y, Z.z - ve * X.z - ve * ee.z, Z.x - ve * X.x - ve * ee.x));
            x = new THREE.Line(u, v);
            B.add(x);
            var ue = new THREE.Geometry();
            (ve = 10 / (0.5 * (vec_r_length + vec_q_length))),
                ue.vertices.push(new THREE.Vector3(Z.y - ve * X.y - ve * ee.y, Z.z - ve * X.z - ve * ee.z, Z.x - ve * X.x - ve * ee.x)),
                ue.vertices.push(new THREE.Vector3(Z.y + ve * X.y - ve * ee.y, Z.z + ve * X.z - ve * ee.z, Z.x + ve * X.x - ve * ee.x)),
                ue.vertices.push(new THREE.Vector3(Z.y + ve * X.y + ve * ee.y, Z.z + ve * X.z + ve * ee.z, Z.x + ve * X.x + ve * ee.x)),
                ue.vertices.push(new THREE.Vector3(Z.y - ve * X.y + ve * ee.y, Z.z - ve * X.z + ve * ee.z, Z.x - ve * X.x + ve * ee.x)),
                ue.faces.push(new THREE.Face3(0, 1, 2)),
                ue.faces.push(new THREE.Face3(2, 3, 0));
            var be = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0, depthWrite: !1 });
            V && ((be = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, side: THREE.DoubleSide, transparent: !0, opacity: H })), ue.computeFaceNormals(), ue.computeVertexNormals());
            var Re = new THREE.Mesh(ue, be);
            B.add(Re),
                $("#additionals").append(
                    '<span title="' +
                        l_plane_pf +
                        '">' +
                        l_plane_pf_abbr +
                        ": (x|y|z) = (" +
                        e(Z.x) +
                        "|" +
                        e(Z.y) +
                        "|" +
                        e(Z.z) +
                        ") + s·(" +
                        e(X.x) +
                        "|" +
                        e(X.y) +
                        "|" +
                        e(X.z) +
                        ") + t·(" +
                        e(ee.x) +
                        "|" +
                        e(ee.y) +
                        "|" +
                        e(ee.z) +
                        ")</span> &ensp;"
                );
            X.y, ee.z, X.z, ee.y, X.z, ee.x, X.x, ee.z, X.x, ee.y, X.y, ee.x;
            var ge = X.y * ee.z - X.z * ee.y,
                Pe = X.z * ee.x - X.x * ee.z,
                Se = X.x * ee.y - X.y * ee.x,
                Ie = Z.x * ge + Z.y * Pe + Z.z * Se;
            $("#additionals").append('<span title="' + l_plane_cf + '">' + l_plane_cf_abbr + ": " + e(ge) + "·x + " + e(Pe) + "·y + " + e(Se) + "·z = " + e(Ie)), A++;
        } else if (t == l_line) {
            var ke = i.split(" ");
            w = [];
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            });
            for (h = 0; h < w.length; h++) for (var Ge = 0; Ge < w[h].length; Ge++) w[h] && (w[h][Ge] = parseFloat(w[h][Ge]));
            var Be = parseFloat(w[0][0]),
                Le = parseFloat(w[0][1]),
                Ae = parseFloat(w[0][2]),
                qe = parseFloat(w[1][0]),
                Ne = parseFloat(w[1][1]),
                Oe = parseFloat(w[1][2]),
                Ce = ((Z = { x: Be, y: Le, z: Ae }), { x: qe - Be, y: Ne - Le, z: Oe - Ae }),
                De = Math.sqrt(Math.pow(Ce.x, 2) + Math.pow(Ce.y, 2) + Math.pow(Ce.z, 2));
            ve = 5;
            (Be -= Ce.x * ve), (Le -= Ce.y * ve), (Ae -= Ce.z * ve), (qe += Ce.x * ve), (Ne += Ce.y * ve), (Oe += Ce.z * ve);
            (v = new THREE.LineBasicMaterial({ color: r, linewidth: 1 })), (u = new THREE.Geometry());
            var Ke = new THREE.Geometry();
            u.vertices.push(new THREE.Vector3(Le, Ae, Be)), u.vertices.push(new THREE.Vector3(Ne, Oe, qe));
            x = new THREE.Line(u, v);
            B.add(x), $("#additionals").append('<span title="' + l_line_pf + '">' + l_line_pf_abbr + ": (x|y|z) = (" + e(Z.x) + "|" + e(Z.y) + "|" + e(Z.z) + ") + r·(" + e(Ce.x) + "|" + e(Ce.y) + "|" + e(Ce.z) + ")</span> &ensp;");
            var je = -Z.z / Ce.z,
                Ue = { x: Z.x + je * Ce.x, y: Z.y + je * Ce.y, z: Z.z + je * Ce.z },
                We = -Z.y / Ce.y,
                Ye = { x: Z.x + We * Ce.x, y: Z.y + We * Ce.y, z: Z.z + We * Ce.z },
                Ze = -Z.x / Ce.x,
                Je = { x: Z.x + Ze * Ce.x, y: Z.y + Ze * Ce.y, z: Z.z + Ze * Ce.z },
                Qe = "",
                Xe = "",
                ea = "",
                aa = new THREE.Mesh(new THREE.SphereGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 85 })),
                ta = new THREE.Mesh(new THREE.SphereGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 85 })),
                ia = new THREE.Mesh(new THREE.SphereGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 85 }));
            $.isNumeric(Ue.x) &&
                $.isNumeric(Ue.y) &&
                $.isNumeric(Ue.z) &&
                ((aa.position.x = Ue.y), (aa.position.y = Ue.z), (aa.position.z = Ue.x), B.add(aa), (Qe = "v<sub>xy</sub> = (" + e(Ue.x) + "|" + e(Ue.y) + "|" + e(Ue.z) + ") &ensp; ")),
                $.isNumeric(Ye.x) &&
                    $.isNumeric(Ye.y) &&
                    $.isNumeric(Ye.z) &&
                    ((ta.position = Ye), (ta.position.x = Ye.y), (ta.position.y = Ye.z), (ta.position.z = Ye.x), B.add(ta), (Xe = "v<sub>xz</sub> = (" + e(Ye.x) + "|" + e(Ye.y) + "|" + e(Ye.z) + ") &ensp; ")),
                $.isNumeric(Je.x) && $.isNumeric(Je.y) && $.isNumeric(Je.z) && ((ia.position.x = Je.y), (ia.position.y = Je.z), (ia.position.z = Je.x), B.add(ia), (ea = "v<sub>yz</sub> = (" + e(Je.x) + "|" + e(Je.y) + "|" + e(Je.z) + ")")),
                $("#additionals").append('<span title="' + l_line_trackpoints + '">' + l_line_trackpoints_abbr + ": " + Qe + Xe + ea),
                (aa.visible = ta.visible = ia.visible = !1),
                "#" == a.slice(-1) && (aa.visible = ta.visible = ia.visible = !0),
                A++;
        } else if (t == l_sphere) {
            w = i.replace(/\|/g, " ").split(" ");
            var sa = parseFloat(w[3]),
                na = new THREE.MeshBasicMaterial({ color: r, opacity: H, transparent: !0 });
            V && (na = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, transparent: !0, opacity: H }));
            var ra = new THREE.Mesh(new THREE.SphereGeometry(sa, 30, 30), na);
            void 0 !== w[4] &&
                (console.log("sphere with extras"),
                (ra = new THREE.Mesh(
                    new THREE.SphereGeometry(sa, 30, 30, parseFloatAndConst(w[4]), parseFloatAndConst(w[5]), parseFloatAndConst(w[6]), parseFloatAndConst(w[7])),
                    new THREE.MeshBasicMaterial({ color: r, opacity: H, transparent: !0 })
                )),
                (ra.material.side = THREE.DoubleSide)),
                (ra.position.x = parseFloat(w[1])),
                (ra.position.y = parseFloat(w[2])),
                (ra.position.z = parseFloat(w[0])),
                B.add(ra);
            var la = new THREE.Mesh(new THREE.SphereGeometry(0.075, 0.075, 0.075), new THREE.MeshBasicMaterial({ color: 85 }));
            (la.position.x = ra.position.x), (la.position.y = ra.position.y), (la.position.z = ra.position.z), B.add(la);
            var oa = 2 * Math.PI * sa,
                pa = Math.PI * sa * sa,
                ca = 4 * Math.PI * sa * sa,
                ha = (4 / 3) * Math.PI * Math.pow(sa, 3),
                Ea = ra.position.z < 0 ? "+ " + e(-ra.position.z) : "- " + e(ra.position.z),
                da = ra.position.x < 0 ? "+ " + e(-ra.position.x) : "- " + e(ra.position.x),
                _a = ra.position.y < 0 ? "+ " + e(-ra.position.y) : "- " + e(ra.position.y),
                va = "(x " + Ea + ")² + (y " + da + ")² + (z " + _a + ")² = " + sa + "²";
            $("#additionals").append(
                '<span title="' +
                    l_sphere_radius +
                    '">r = ' +
                    e(sa) +
                    '</span> &ensp;<span title="' +
                    l_sphere_perimeter +
                    '">u = ' +
                    e(oa) +
                    '</span> &ensp;<span title="' +
                    l_sphere_area +
                    '">' +
                    l_sphere_area_abbr +
                    " = " +
                    e(pa) +
                    '</span> &ensp;<span title="' +
                    l_sphere_surface +
                    '">' +
                    l_surface_abbr +
                    " = " +
                    e(ca) +
                    '</span> &ensp;<span title="' +
                    l_sphere_volume +
                    '">' +
                    l_volume_abbr +
                    " = " +
                    e(ha) +
                    '</span> &ensp;<span title="' +
                    l_sphere_equation +
                    '">K: ' +
                    va +
                    "</span> &ensp;"
            ),
                A++;
        } else if (t == l_polygon) {
            (ke = i.split(" ")), (w = []);
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            });
            for (v = new THREE.LineBasicMaterial({ color: r, linewidth: 5 }), u = new THREE.Geometry(), Ke = new THREE.Geometry(), h = 0; h < w.length; h++) {
                for (Ge = 0; Ge < w[h].length; Ge++) w[h][Ge] = parseFloat(w[h][Ge]);
                m = h + 1;
                h + 1 >= w.length && (m = 0), u.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]), new THREE.Vector3(w[m][1], w[m][2], w[m][0])), Ke.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]));
                var ua = new THREE.Mesh(new THREE.SphereGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 85 }));
                (ua.position.x = w[h][1]), (ua.position.y = w[h][2]), (ua.position.z = w[h][0]), B.add(ua);
            }
            x = new THREE.Line(u, v);
            B.add(x);
            var ba = new THREE.Geometry();
            ba.vertices = Ke.vertices;
            for (Ge = 0; Ge < ba.vertices.length; Ge++) (ba.vertices[Ge].x += 0.001 * Ge), (ba.vertices[Ge].y += 0.001 * Ge), (ba.vertices[Ge].z += 0.001 * Ge);
            var wa = [],
                ya = THREE.ShapeUtils.triangulateShape(ba.vertices, wa);
            for (h = 0; h < ya.length; h++) ba.faces.push(new THREE.Face3(ya[h][0], ya[h][1], ya[h][2]));
            var ma = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0 });
            V && ((ma = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, side: THREE.DoubleSide, transparent: !0, opacity: H })), ba.computeFaceNormals(), ba.computeVertexNormals());
            var xa = new THREE.Mesh(ba, ma);
            B.add(xa), A++;
        } else if (t == l_point) {
            w = i.replace(/\|/g, " ").split(" ");
            var Ta = parseFloat(w[0]),
                Ha = parseFloat(w[1]),
                Ra = parseFloat(w[2]),
                ga = "";
            !1 !== i.indexOf('"') && (ga = i.substring(i.indexOf('"') + 1, i.lastIndexOf('"')));
            var fa = 0.1;
            n.length > 0 && (n = parseFloat(n));
            var za = l ? r : 85;
            ra = new THREE.Mesh(new THREE.SphereGeometry(fa, fa, fa), new THREE.MeshBasicMaterial({ color: za }));
            (ra.position.x = Ha), (ra.position.y = Ra), (ra.position.z = Ta), B.add(ra);
            (v = new THREE.LineBasicMaterial({ color: 14540253, linewidth: 2 })), (u = new THREE.Geometry());
            u.vertices.push(new THREE.Vector3(Ha, 0, Ta), new THREE.Vector3(Ha, Ra, Ta));
            x = new THREE.Line(u, v);
            if ((B.add(x), "" != ga)) {
                let e = clone_object(Y);
                n > 0 && ((e.size = ae * n), (e.height *= n));
                var Ma = new THREE.TextGeometry(ga, e),
                    $a = l ? r : 85,
                    Fa = new THREE.MeshBasicMaterial({ color: $a }),
                    Va = new THREE.Mesh(Ma, Fa);
                (Va.position.x = Ha), (Va.position.z = Ta), (Va.position.y = Ra + 0.2), (Va.rotation.y = 0), B.add(Va);
            }
            if (s.length > 0) {
                var Pa = s.replace(/\|/g, " ").split(" ");
                (Va.rotation.x = (Math.PI * parseFloat(Pa[1])) / 180), (Va.rotation.y = (Math.PI * parseFloat(Pa[2])) / 180), (Va.rotation.z = (Math.PI * parseFloat(Pa[0])) / 180);
            }
            $("#additionals").append("<span>" + ga + "(" + e(Ta) + "|" + e(Ha) + "|" + e(Ra) + ") &ensp;"), A++;
        } else if (t == l_cuboid) {
            for (w = i.replace(/\|/g, " ").split(" "), h = 0; h < w.length; h++) w[h] = parseFloat(w[h]);
            var Sa = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0 });
            V && (Sa = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, transparent: !0, opacity: H }));
            var Ia = new THREE.Mesh(new THREE.CubeGeometry(w[4], w[5], w[3]), Sa);
            (Ia.position.x = w[1] + w[4] / 2), (Ia.position.z = w[0] + w[3] / 2), (Ia.position.y = w[2] + w[5] / 2), B.add(Ia);
            var ka = new THREE.EdgesGeometry(Ia.geometry),
                Ga = new THREE.LineBasicMaterial({ color: 10066329, linewidth: 1 }),
                Ba = new THREE.LineSegments(ka, Ga);
            Ia.add(Ba);
            var La = w[3],
                Aa = w[4],
                qa = w[5],
                Na = Math.sqrt(Aa * Aa + La * La + qa * qa),
                Oa = 2 * Aa + 2 * La,
                Ca = Aa * La,
                Da = 2 * Aa * qa + 2 * La * qa,
                Ka = 2 * Aa * qa + 2 * La * qa + 2 * Aa * La,
                ja = Aa * La * qa,
                Ua = 4 * Aa + 4 * La + 4 * qa;
            if (
                ($("#additionals").append(
                    '<span title="' +
                        l_cuboid_edges +
                        '">' +
                        l_length_abbr +
                        " = " +
                        e(La) +
                        "; " +
                        l_width_abbr +
                        " = " +
                        e(Aa) +
                        "; " +
                        l_height_abbr +
                        " = " +
                        e(qa) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_diagonal +
                        '">e = ' +
                        e(Na) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_perimeter +
                        '">' +
                        l_perimeter_abbr +
                        " = " +
                        e(Oa) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_basearea +
                        '">' +
                        l_basearea_abbr +
                        " = " +
                        e(Ca) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_lateralsurface +
                        '">' +
                        l_lateralsurface_abbr +
                        " = " +
                        e(Da) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_surface +
                        '">' +
                        l_surface_abbr +
                        " = " +
                        e(Ka) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_volume +
                        '">' +
                        l_volume_abbr +
                        " = " +
                        e(ja) +
                        '</span> &ensp;<span title="' +
                        l_cuboid_edgeslength +
                        '">' +
                        l_edgelength_abbr +
                        " = " +
                        e(Ua) +
                        "</span> &ensp;"
                ),
                s.length > 0)
            ) {
                Pa = s.replace(/\|/g, " ").split(" ");
                (Ia.rotation.x = (Math.PI * parseFloat(Pa[1])) / 180), (Ia.rotation.y = (Math.PI * parseFloat(Pa[2])) / 180), (Ia.rotation.z = (Math.PI * parseFloat(Pa[0])) / 180);
            }
            A++;
        } else if (t == l_parallelepiped) {
            (ke = i.split(" ")), (w = []);
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            }),
                void 0 === w[3] && w.unshift(new Array(0, 0, 0));
            var Wa = { x: parseFloat(w[0][0]), y: parseFloat(w[0][1]), z: parseFloat(w[0][2]) },
                Ya = { x: parseFloat(w[1][0]), y: parseFloat(w[1][1]), z: parseFloat(w[1][2]) },
                Za = { x: parseFloat(w[2][0]), y: parseFloat(w[2][1]), z: parseFloat(w[2][2]) },
                Ja = { x: parseFloat(w[3][0]), y: parseFloat(w[3][1]), z: parseFloat(w[3][2]) },
                Qa = ((v = new THREE.LineBasicMaterial({ color: r, linewidth: 5 })), (u = new THREE.Geometry()), new THREE.Geometry());
            u.vertices.push(new THREE.Vector3(0, 0, 0)),
                u.vertices.push(new THREE.Vector3(Ya.y, Ya.z, Ya.x)),
                u.vertices.push(new THREE.Vector3(Ya.y + Za.y, Ya.z + Za.z, Ya.x + Za.x)),
                u.vertices.push(new THREE.Vector3(Za.y, Za.z, Za.x)),
                u.vertices.push(new THREE.Vector3(0, 0, 0)),
                u.vertices.push(new THREE.Vector3(Za.y, Za.z, Za.x)),
                u.vertices.push(new THREE.Vector3(Za.y + Ja.y, Za.z + Ja.z, Za.x + Ja.x)),
                u.vertices.push(new THREE.Vector3(Ja.y, Ja.z, Ja.x)),
                u.vertices.push(new THREE.Vector3(0, 0, 0)),
                u.vertices.push(new THREE.Vector3(Ja.y, Ja.z, Ja.x)),
                u.vertices.push(new THREE.Vector3(Ja.y + Ya.y, Ja.z + Ya.z, Ja.x + Ya.x)),
                u.vertices.push(new THREE.Vector3(Ya.y, Ya.z, Ya.x)),
                u.vertices.push(new THREE.Vector3(0, 0, 0)),
                u.vertices.push(new THREE.Vector3(Ya.y, Ya.z, Ya.x)),
                u.vertices.push(new THREE.Vector3(Ya.y + Ja.y, Ya.z + Ja.z, Ya.x + Ja.x)),
                u.vertices.push(new THREE.Vector3(Ya.y + Za.y + Ja.y, Ya.z + Za.z + Ja.z, Ya.x + Za.x + Ja.x)),
                u.vertices.push(new THREE.Vector3(Za.y + Ja.y, Za.z + Ja.z, Za.x + Ja.x)),
                u.vertices.push(new THREE.Vector3(Za.y, Za.z, Za.x)),
                u.vertices.push(new THREE.Vector3(Za.y + Ya.y, Za.z + Ya.z, Za.x + Ya.x)),
                u.vertices.push(new THREE.Vector3(Za.y + Ja.y + Ya.y, Za.z + Ja.z + Ya.z, Za.x + Ja.x + Ya.x)),
                u.vertices.push(new THREE.Vector3(Ja.y + Ya.y, Ja.z + Ya.z, Ja.x + Ya.x)),
                u.vertices.push(new THREE.Vector3(Ja.y, Ja.z, Ja.x)),
                u.vertices.push(new THREE.Vector3(Ja.y + Za.y, Ja.z + Za.z, Ja.x + Za.x)),
                u.vertices.push(new THREE.Vector3(Ja.y + Ya.y + Za.y, Ja.z + Ya.z + Za.z, Ja.x + Ya.x + Za.x)),
                u.vertices.push(new THREE.Vector3(Ya.y + Za.y, Ya.z + Za.z, Ya.x + Za.x));
            x = new THREE.Line(u, v);
            B.add(x), (x.position.x = Wa.y), (x.position.y = Wa.z), (x.position.z = Wa.x), (Qa.vertices = u.vertices);
            var Xa = { x: Wa.x + Ya.x, y: Wa.y + Ya.y, z: Wa.z + Ya.z };
            pe = _(Wa, Xa);
            if ((B.add(pe), (Xa = { x: Wa.x + Za.x, y: Wa.y + Za.y, z: Wa.z + Za.z }), (pe = _(Wa, Xa)), B.add(pe), (Xa = { x: Wa.x + Ja.x, y: Wa.y + Ja.y, z: Wa.z + Ja.z }), (pe = _(Wa, Xa)), B.add(pe), "#" != a.slice(-1))) {
                Qa.faces.push(new THREE.Face3(0, 1, 2)),
                    Qa.faces.push(new THREE.Face3(2, 3, 0)),
                    Qa.faces.push(new THREE.Face3(0, 9, 6)),
                    Qa.faces.push(new THREE.Face3(0, 6, 3)),
                    Qa.faces.push(new THREE.Face3(7, 8, 10)),
                    Qa.faces.push(new THREE.Face3(10, 8, 1)),
                    Qa.faces.push(new THREE.Face3(7, 6, 10)),
                    Qa.faces.push(new THREE.Face3(6, 10, 15)),
                    Qa.faces.push(new THREE.Face3(15, 16, 17)),
                    Qa.faces.push(new THREE.Face3(17, 18, 15)),
                    Qa.faces.push(new THREE.Face3(18, 19, 20)),
                    Qa.faces.push(new THREE.Face3(20, 18, 11));
                var et = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0 });
                V && ((et = new THREE.MeshPhongMaterial({ color: r, specular: G, shininess: I, side: THREE.DoubleSide, transparent: !0, opacity: H })), Qa.computeFaceNormals(), Qa.computeVertexNormals());
                var at = new THREE.Mesh(Qa, et);
                (at.position.x = Wa.y), (at.position.y = Wa.z), (at.position.z = Wa.x), B.add(at);
            }
            var tt = Math.sqrt(Math.pow(Ya.x, 2) + Math.pow(Ya.y, 2) + Math.pow(Ya.z, 2)),
                it = Math.sqrt(Math.pow(Za.x, 2) + Math.pow(Za.y, 2) + Math.pow(Za.z, 2)),
                st = Math.sqrt(Math.pow(Ja.x, 2) + Math.pow(Ja.y, 2) + Math.pow(Ja.z, 2)),
                nt = 0;
            (nt += Math.sqrt(Math.pow(Ya.y * Za.z - Ya.z * Za.y, 2) + Math.pow(Ya.z * Za.x - Ya.x * Za.z, 2) + Math.pow(Ya.x * Za.y - Ya.y * Za.x, 2))),
                (nt += Math.sqrt(Math.pow(Za.y * Ja.z - Za.z * Ja.y, 2) + Math.pow(Za.z * Ja.x - Za.x * Ja.z, 2) + Math.pow(Za.x * Ja.y - Za.y * Ja.x, 2))),
                (nt += Math.sqrt(Math.pow(Ya.y * Ja.z - Ya.z * Ja.y, 2) + Math.pow(Ya.z * Ja.x - Ya.x * Ja.z, 2) + Math.pow(Ya.x * Ja.y - Ya.y * Ja.x, 2))),
                (nt *= 2),
                (spat_vec = { x: Ya.y * Za.z - Ya.z * Za.y, y: Ya.z * Za.x - Ya.x * Za.z, z: Ya.x * Za.y - Ya.y * Za.x }),
                (spat_volumen = Math.abs(spat_vec.x * Ja.x + spat_vec.y * Ja.y + spat_vec.z * Ja.z)),
                $("#additionals").append(
                    '<span title="' +
                        l_vectors_length +
                        '">|v<sub>1</sub>| = ' +
                        e(tt) +
                        "; |v<sub>2</sub>| = " +
                        e(it) +
                        "; |v<sub>3</sub>| = " +
                        e(st) +
                        '</span> &ensp;<span title="' +
                        l_surface +
                        '">' +
                        l_surface_abbr +
                        " = " +
                        e(nt) +
                        '</span> &ensp;<span title="' +
                        l_volume +
                        '">' +
                        l_volume_abbr +
                        " = " +
                        e(spat_volumen) +
                        "</span> &ensp;"
                ),
                A++;
        } else if (t == l_lineseg) {
            (ke = i.split(" ")), (w = []);
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            });
            if (!w[0] || !w[1]) return;
            if (!w[0] || !w[1]) return;
            (Be = parseFloat(w[0][0])),
                (Le = parseFloat(w[0][1])),
                (Ae = parseFloat(w[0][2])),
                (qe = parseFloat(w[1][0])),
                (Ne = parseFloat(w[1][1])),
                (Oe = parseFloat(w[1][2])),
                (v = new THREE.LineBasicMaterial({ color: r, linewidth: 5 })),
                (u = new THREE.Geometry());
            u.vertices.push(new THREE.Vector3(Le, Ae, Be), new THREE.Vector3(Ne, Oe, qe));
            x = new THREE.Line(u, v);
            B.add(x);
            (O = { x: qe - Be, y: Ne - Le, z: Oe - Ae }), (De = Math.sqrt(Math.pow(qe - Be, 2) + Math.pow(Ne - Le, 2) + Math.pow(Oe - Ae, 2)));
            $("#additionals").append(
                '<span title="' + l_lineseg_length + '">' + l_lineseg_length_abbr + " = " + e(De) + '</span> &ensp;<span title="' + l_lineseg_asvec + '">v = (' + e(O.x) + "|" + e(O.y) + "|" + e(O.z) + ")</span> &ensp;"
            ),
                A++;
        } else if (t == l_text) {
            (w = i.replace(/\|/g, " ").split(" ")), (Ta = parseFloat(w[0])), (Ha = parseFloat(w[1])), (Ra = parseFloat(w[2])), (ga = i.substring(i.indexOf('"') + 1, i.lastIndexOf('"')));
            if ("#" == a.slice(-1)) {
                (v = new THREE.LineBasicMaterial({ color: 14540253, linewidth: 2 })), (u = new THREE.Geometry());
                u.vertices.push(new THREE.Vector3(Ha, 0, Ta), new THREE.Vector3(Ha, Ra, Ta));
                x = new THREE.Line(u, v);
                B.add(x);
            }
            $a = 85;
            l && ($a = r);
            let e = clone_object(Y);
            n.length > 0 && ((n = parseFloat(n)), n > 0 && ((e.size = ae * n), (e.height *= n)));
            (Ma = new THREE.TextGeometry(ga, e)), (Fa = new THREE.MeshBasicMaterial({ color: $a })), (Va = new THREE.Mesh(Ma, Fa));
            if (((Va.position.x = Ha), (Va.position.y = Ra + 0.2), (Va.rotation.y = 0), (Va.position.z = Ta), B.add(Va), s.length > 0)) {
                Pa = s.replace(/\|/g, " ").split(" ");
                (Va.rotation.x = (Math.PI * parseFloat(Pa[1])) / 180), (Va.rotation.y = (Math.PI * parseFloat(Pa[2])) / 180), (Va.rotation.z = (Math.PI * parseFloat(Pa[0])) / 180);
            }
            A++;
        } else if (t == l_vector_dt) {
            (ke = i.split(" ")), (w = []);
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            }),
                (void 0 === w[1] || w[1].length < 3) && w.unshift(new Array(0, 0, 0));
            (Be = parseFloat(w[0][0])), (Le = parseFloat(w[0][1])), (Ae = parseFloat(w[0][2]));
            var rt = parseFloat(w[1][0]),
                lt = parseFloat(w[1][1]),
                ot = parseFloat(w[1][2]);
            (qe = Be + rt), (Ne = Le + lt), (Oe = Ae + ot);
            if (i.indexOf('"') > -1) {
                (ga = i.substring(i.indexOf('"') + 1, i.lastIndexOf('"'))), (Ma = new THREE.TextGeometry(ga, Y)), (Fa = new THREE.MeshBasicMaterial({ color: 85 })), (Va = new THREE.Mesh(Ma, Fa));
                (Va.position.x = Le + lt / 2), (Va.position.z = Be + rt / 2), (Va.position.y = Ae + ot / 2 + 0.25), B.add(Va);
            }
            te = 1127253;
            l && (te = r);
            (ne = new THREE.Vector3(Le, Ae, Be)),
                (re = new THREE.Vector3(Ne, Oe, qe)),
                (le = new THREE.Vector3().subVectors(re, ne).normalize()),
                (oe = Math.sqrt(Math.pow(Ne - Le, 2) + Math.pow(Oe - Ae, 2) + Math.pow(qe - Be, 2))),
                (pe = new THREE.ArrowHelper(le, ne, oe, te));
            pe.setLength(oe, 0.5, 0.25), B.add(pe);
            De = Math.sqrt(Math.pow(rt, 2) + Math.pow(lt, 2) + Math.pow(ot, 2));
            var pt = Math.asin(ot / De),
                ct = (180 * pt) / Math.PI;
            if (
                ($("#additionals").append(
                    '<span title="' +
                        l_vector +
                        '">v = (' +
                        e(rt) +
                        "|" +
                        e(lt) +
                        "|" +
                        e(ot) +
                        ')</span> &ensp;<span title="' +
                        l_vectorlength +
                        '">|v| = ' +
                        e(De) +
                        '</span> &ensp;<span title="' +
                        l_vector_anglexy +
                        '">a = ' +
                        e(pt) +
                        " rad (" +
                        e(ct) +
                        "°)</span> &ensp;"
                ),
                "#" == a.slice(-1))
            ) {
                (v = new THREE.LineBasicMaterial({ color: 16742144, linewidth: 5, opacity: H, transparent: !0 })), (u = new THREE.Geometry());
                u.vertices.push(new THREE.Vector3(0, 0, 0)), u.vertices.push(new THREE.Vector3(lt, 0, 0)), u.vertices.push(new THREE.Vector3(lt, 0, rt)), u.vertices.push(new THREE.Vector3(lt, ot, rt));
                x = new THREE.Line(u, v);
                (x.position.x = Le), (x.position.y = Ae), (x.position.z = Be), B.add(x);
                var ht = new THREE.LineBasicMaterial({ color: 13421772, linewidth: 2, opacity: H, transparent: !0 }),
                    Et = new THREE.Geometry();
                Et.vertices.push(new THREE.Vector3(0, 0, 0)), Et.vertices.push(new THREE.Vector3(lt, 0, rt));
                var dt = new THREE.Line(Et, ht);
                (dt.position.x = Le), (dt.position.y = Ae), (dt.position.z = Be), B.add(dt);
            }
            A++;
        }
        if (t == l_quadrangle) {
            (ke = i.split(" ")), (w = []);
            $.each(ke, function (e, a) {
                var t = a.split("|");
                w.push(t);
            });
            for (v = new THREE.LineBasicMaterial({ color: r, linewidth: 5 }), u = new THREE.Geometry(), Qa = new THREE.Geometry(), h = 0; h < w.length; h++) {
                for (Ge = 0; Ge < w[h].length; Ge++) w[h][Ge] = parseFloat(w[h][Ge]);
                m = h + 1;
                h + 1 >= w.length && (m = 0), u.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]), new THREE.Vector3(w[m][1], w[m][2], w[m][0])), Qa.vertices.push(new THREE.Vector3(w[h][1], w[h][2], w[h][0]));
            }
            x = new THREE.Line(u, v);
            if ((B.add(x), "#" != a.slice(-1))) {
                Qa.faces.push(new THREE.Face3(0, 1, 2)), Qa.faces.push(new THREE.Face3(2, 3, 0));
                et = new THREE.MeshBasicMaterial({ color: r, side: THREE.DoubleSide, opacity: H, transparent: !0 });
                V && ((et = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: I, side: THREE.DoubleSide, transparent: !0, opacity: H })), Qa.computeFaceNormals(), Qa.computeVertexNormals());
                at = new THREE.Mesh(Qa, et);
                B.add(at);
            }
            (f = [
                { x: w[0][0], y: w[0][1], z: w[0][2] },
                { x: w[1][0], y: w[1][1], z: w[1][2] },
                { x: w[2][0], y: w[2][1], z: w[2][2] },
                { x: w[3][0], y: w[3][1], z: w[3][2] },
            ]),
                (z = Math.sqrt(Math.pow(f[1].x - f[0].x, 2) + Math.pow(f[1].y - f[0].y, 2) + Math.pow(f[1].z - f[0].z, 2))),
                (q = Math.sqrt(Math.pow(f[2].x - f[1].x, 2) + Math.pow(f[2].y - f[1].y, 2) + Math.pow(f[2].z - f[1].z, 2))),
                (N = Math.sqrt(Math.pow(f[3].x - f[2].x, 2) + Math.pow(f[3].y - f[2].y, 2) + Math.pow(f[3].z - f[2].z, 2)));
            var _t = Math.sqrt(Math.pow(f[0].x - f[3].x, 2) + Math.pow(f[0].y - f[3].y, 2) + Math.pow(f[0].z - f[3].z, 2)),
                vt =
                    ((O = { x: w[1][0] - w[0][0], y: w[1][1] - w[0][1], z: w[1][2] - w[0][2] }),
                    (C = { x: w[2][0] - w[1][0], y: w[2][1] - w[1][1], z: w[2][2] - w[1][2] }),
                    (D = { x: w[3][0] - w[2][0], y: w[3][1] - w[2][1], z: w[3][2] - w[2][2] }),
                    { x: w[0][0] - w[3][0], y: w[0][1] - w[3][1], z: w[0][2] - w[3][2] }),
                ut = Math.sqrt(Math.pow(O.y * C.z - O.z * C.y, 2) + Math.pow(O.z * C.x - O.x * C.z, 2) + Math.pow(O.x * C.y - O.y * C.x, 2)),
                bt = Math.sqrt(Math.pow(D.y * vt.z - D.z * vt.y, 2) + Math.pow(D.z * vt.x - D.x * vt.z, 2) + Math.pow(D.x * vt.y - D.y * vt.x, 2)),
                wt = ut / 2 + bt / 2;
            $("#additionals").append('<span title="' + l_quadrangle_length + '">a = ' + e(z) + "; b = " + e(q) + "; c = " + e(N) + "; d = " + e(_t) + "</span> &ensp;"),
                $("#additionals").append(
                    '<span title="' +
                        l_conn_vectors +
                        '">v<sub>1</sub> = (' +
                        e(O.x) +
                        "|" +
                        e(O.y) +
                        "|" +
                        e(O.z) +
                        "); v<sub>2</sub> = (" +
                        e(C.x) +
                        "|" +
                        e(C.y) +
                        "|" +
                        e(C.z) +
                        "); v<sub>3</sub> = (" +
                        e(D.x) +
                        "|" +
                        e(D.y) +
                        "|" +
                        e(D.z) +
                        "); v<sub>4</sub> = (" +
                        e(vt.x) +
                        "|" +
                        e(vt.y) +
                        "|" +
                        e(vt.z) +
                        "); </span> &ensp;"
                ),
                $("#additionals").append('<span title="' + l_area + '">A = ' + e(wt) + "</span> &ensp;"),
                A++;
        } else if (t == l_cube) {
            w = i.replace(/\|/g, " ").split(" ");
            var yt = parseFloat(w[3]),
                mt = new THREE.MeshBasicMaterial({ color: r, opacity: H, transparent: !0 });
            V && (mt = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, transparent: !0, opacity: H }));
            Ia = new THREE.Mesh(new THREE.CubeGeometry(yt, yt, yt), mt);
            if (((Ia.position.x = parseFloat(w[1]) + parseFloat(w[3] / 2)), (Ia.position.y = parseFloat(w[2]) + parseFloat(w[3] / 2)), (Ia.position.z = parseFloat(w[0]) + parseFloat(w[3] / 2)), i.indexOf("#") > -1)) {
                var xt = new THREE.Mesh(new THREE.SphereGeometry(0.02, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 85 }));
                (xt.position.x = Ia.position.x), (xt.position.y = Ia.position.y), (xt.position.z = Ia.position.z), B.add(xt);
            }
            (ka = new THREE.EdgesGeometry(Ia.geometry)), (Ga = new THREE.LineBasicMaterial({ color: 10066329, linewidth: 1 })), (Ba = new THREE.LineSegments(ka, Ga));
            Ia.add(Ba);
            var Tt = Math.sqrt(2) * yt,
                Ht = Math.sqrt(3) * yt,
                Rt = 4 * yt,
                gt = yt * yt,
                ft = 4 * yt * yt,
                zt = 6 * yt * yt,
                Mt = yt * yt * yt,
                $t = 12 * yt;
            if (
                ($("#additionals").append(
                    '<span title="' +
                        l_cube_edge +
                        '">a = ' +
                        e(yt) +
                        '</span> &ensp;<span title="' +
                        l_cube_areadiagonal +
                        '">d = ' +
                        e(Tt) +
                        '</span> &ensp;<span title="' +
                        l_cube_spacediagonal +
                        '">e = ' +
                        e(Ht) +
                        '</span> &ensp;<span title="' +
                        l_cube_perimeter +
                        '">u = ' +
                        e(Rt) +
                        '</span> &ensp;<span title="' +
                        l_cube_basearea +
                        '">' +
                        l_basearea_abbr +
                        " = " +
                        e(gt) +
                        '</span> &ensp;<span title="' +
                        l_cube_lateralsurface +
                        '">' +
                        l_lateralsurface_abbr +
                        " = " +
                        e(ft) +
                        '</span> &ensp;<span title="' +
                        l_cube_surface +
                        '">' +
                        l_surface_abbr +
                        " = " +
                        e(zt) +
                        '</span> &ensp;<span title="' +
                        l_cube_volume +
                        '">' +
                        l_volume_abbr +
                        " = " +
                        e(Mt) +
                        '</span> &ensp;<span title="' +
                        l_cube_lengthsides +
                        '">' +
                        l_length_abbr +
                        " = " +
                        e($t) +
                        "</span> &ensp;"
                ),
                s.length > 0)
            ) {
                Pa = s.replace(/\|/g, " ").split(" ");
                (Ia.rotation.x = (Math.PI * parseFloat(Pa[1])) / 180), (Ia.rotation.y = (Math.PI * parseFloat(Pa[2])) / 180), (Ia.rotation.z = (Math.PI * parseFloat(Pa[0])) / 180);
            }
            B.add(Ia), A++;
        } else if (t == l_cylinder) {
            w = i.replace(/\|/g, " ").split(" ");
            var Ft = parseFloat(w[4]);
            $.isNumeric(Ft) || (Ft = 2);
            var Vt = parseFloat(w[5]);
            $.isNumeric(Vt) || (Vt = 2);
            var Pt = parseFloat(w[3]);
            $.isNumeric(Pt) || (Pt = 2);
            var St = parseFloat(w[6]);
            $.isNumeric(St) || (St = 30), (cyl_heightSegments = 1);
            var It = parseFloat(w[7]);
            (It = !!$.isNumeric(It) && 1 == It), (cyl_thetaStart = 0);
            var kt = parseFloat(w[8]);
            kt = $.isNumeric(kt) ? (Math.PI * kt) / 180 : 2 * Math.PI;
            var Gt = new THREE.MeshBasicMaterial({ color: r, opacity: H, transparent: !0, side: THREE.DoubleSide });
            V && (Gt = new THREE.MeshPhongMaterial({ color: r, specular: k, shininess: S, transparent: !0, opacity: H }));
            var Bt = new THREE.Mesh(new THREE.CylinderGeometry(Ft, Vt, Pt, St, cyl_heightSegments, It, cyl_thetaStart, kt), Gt);
            (Bt.position.x = parseFloat(w[1])), (Bt.position.y = parseFloat(w[2])), (Bt.position.y += Pt / 2), (Bt.position.z = parseFloat(w[0]));
            (ka = new THREE.EdgesGeometry(Bt.geometry)), (Ga = new THREE.LineBasicMaterial({ color: 10066329, linewidth: 1 })), (Ba = new THREE.LineSegments(ka, Ga));
            if ((Bt.add(Ba), kt == 2 * Math.PI && Ft == Vt)) {
                var Lt = Ft,
                    At = Pt,
                    qt = 2 * Ft,
                    Nt = 2 * Math.PI * Ft,
                    Ot = Math.PI * Ft * Ft,
                    Ct = 2 * Math.PI * Ft * Pt,
                    Dt = 2 * Math.PI * Ft * (Ft + Pt),
                    Kt = Math.PI * Ft * Ft * Pt;
                $("#additionals").append(
                    '<span title="' +
                        l_radius +
                        '">r = ' +
                        e(Lt) +
                        '</span> &ensp;<span title="' +
                        l_height +
                        '">h = ' +
                        e(At) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_diameter +
                        '">' +
                        l_diameter_abbr +
                        " = " +
                        e(qt) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_perimeter +
                        '">' +
                        l_perimeter_abbr +
                        " = " +
                        e(Nt) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_basearea +
                        '">' +
                        l_basearea_abbr +
                        " = " +
                        e(Ot) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_lateralsurface +
                        '">' +
                        l_lateralsurface_abbr +
                        " = " +
                        e(Ct) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_surface +
                        '">' +
                        l_surface_abbr +
                        " = " +
                        e(Dt) +
                        '</span> &ensp;<span title="' +
                        l_cylinder_volume +
                        '">' +
                        l_volume_abbr +
                        " = " +
                        e(Kt) +
                        "</span> &ensp;"
                );
            }
            if (s.length > 0) {
                Pa = s.replace(/\|/g, " ").split(" ");
                (Bt.rotation.x = (Math.PI * parseFloat(Pa[1])) / 180), (Bt.rotation.y = (Math.PI * parseFloat(Pa[2])) / 180), (Bt.rotation.z = (Math.PI * parseFloat(Pa[0])) / 180);
            }
            B.add(Bt), A++;
        } else if (t == l_coordplanes || P)
            if (((F = !0), t != l_coordplanes && P)) 2 == M && (V ? ((fe.visible = ze.visible = !0), (we.visible = ye.visible = !1)) : ((we.visible = ye.visible = !0), (fe.visible = ze.visible = !1)), (P = !1));
            else {
                (we.visible = me.visible = Te.visible = !1), (ye.visible = xe.visible = He.visible = !1), (fe.visible = Me.visible = Fe.visible = !1), (ze.visible = $e.visible = Ve.visible = !1);
                ke = i.split(" ");
                V
                    ? $.each(ke, function (e, a) {
                          "xy" == a
                              ? ((fe.visible = !0), (ze.visible = !1))
                              : "xy#" == a
                              ? ((fe.visible = !0), (ze.visible = !0))
                              : "xz" == a
                              ? ((Me.visible = !0), ($e.visible = !1))
                              : "xz#" == a
                              ? ((Me.visible = !0), ($e.visible = !0))
                              : "yz" == a
                              ? ((Fe.visible = !0), (Ve.visible = !1))
                              : "yz#" == a && ((Fe.visible = !0), (Ve.visible = !0));
                      })
                    : $.each(ke, function (e, a) {
                          "xy" == a
                              ? ((we.visible = !0), (ye.visible = !1))
                              : "xy#" == a
                              ? ((we.visible = !0), (ye.visible = !0))
                              : "xz" == a
                              ? ((me.visible = !0), (xe.visible = !1))
                              : "xz#" == a
                              ? ((me.visible = !0), (xe.visible = !0))
                              : "yz" == a
                              ? ((Te.visible = !0), (He.visible = !1))
                              : "yz#" == a && ((Te.visible = !0), (He.visible = !0));
                      });
            }
        else if ("camera" == t) {
            w = i.replace(/\|/g, " ").split(" ");
            var jt = parseFloat(w[0]),
                Ut = parseFloat(w[1]),
                Wt = parseFloat(w[2]),
                Yt = parseFloat(w[3]),
                Zt = parseFloat(w[4]),
                Jt = parseFloat(w[5]);
            $.isNumeric(Zt) || (Zt = 0), $.isNumeric(Jt) || (Jt = 0), $.isNumeric(Yt) || (Yt = 0), j.position.set(Ut, Wt, jt), (U.target = new THREE.Vector3(Zt, Jt, Yt)), U.update();
        }
    }
    function l() {}
    function o() {
        (!b && w) ||
            ((w = !0),
            l(),
            setTimeout(function () {
                requestAnimationFrame(o);
            }, 25),
            U.update(),
            u.render(W, j),
            $("#campos code").text("camera(" + a(j.position.z, 1) + "|" + a(j.position.x, 1) + "|" + a(j.position.y, 1) + ")"));
    }
    function p(e) {
        e && !b ? ((b = !0), o()) : !e && b && (b = !1);
    }
    function c(e) {
        setTimeout(function () {
            p(!1);
        }, e);
    }
    function h() {
        (D = document.getElementById("rendercanvas").offsetWidth), (K = document.getElementById("rendercanvas").offsetHeight), (j.aspect = D / K), j.updateProjectionMatrix(), u.setSize(D, K), o();
    }
    function E() {
        (j.aspect = window.innerWidth / window.innerHeight), j.updateProjectionMatrix(), u.setSize(window.innerWidth, window.innerHeight), o();
    }
    function d(e, a, t) {
        if (e.createTextRange) {
            var i = e.createTextRange();
            i.collapse(!0), i.moveStart("character", a), i.moveEnd("character", t), i.select();
        } else e.setSelectionRange ? e.setSelectionRange(a, t) : e.selectionStart && ((e.selectionStart = a), (e.selectionEnd = t));
    }
    function _(e, a) {
        var t = new THREE.Vector3(e.y, e.z, e.x),
            i = new THREE.Vector3(a.y, a.z, a.x),
            s = new THREE.Vector3().subVectors(i, t).normalize(),
            n = Math.sqrt(Math.pow(a.y - e.y, 2) + Math.pow(a.z - e.z, 2) + Math.pow(a.x - e.x, 2)),
            r = new THREE.ArrowHelper(s, t, n, 1127253);
        return r.setLength(n, 0.5, 0.25), r;
    }
    (l_coordplanes = $("#meta-l_coordplanes").html()),
        (l_triangle = $("#meta-l_triangle").html()),
        (l_plane = $("#meta-l_plane").html()),
        (l_line = $("#meta-l_line").html()),
        (l_sphere = $("#meta-l_sphere").html()),
        (l_polygon = $("#meta-l_polygon").html()),
        (l_point = $("#meta-l_point").html()),
        (l_cuboid = $("#meta-l_cuboid").html()),
        (l_parallelepiped = $("#meta-l_parallelepiped").html()),
        (l_lineseg = $("#meta-l_lineseg").html()),
        (l_text = $("#meta-l_text").html()),
        (l_vector = $("#meta-l_vector").html()),
        (l_vector_dt = $("#meta-l_vector_dt").html()),
        (l_vectorlength = $("#meta-l_vectorlength").html()),
        (l_quadrangle = $("#meta-l_quadrangle").html()),
        (l_cube = $("#meta-l_cube").html()),
        (l_cylinder = $("#meta-l_cylinder").html()),
        (l_width = $("#meta-l_width").html()),
        (l_width_abbr = $("#meta-l_width_abbr").html()),
        (l_length = $("#meta-l_length").html()),
        (l_length_abbr = $("#meta-l_length_abbr").html()),
        (l_height = $("#meta-l_height").html()),
        (l_height_abbr = $("#meta-l_height_abbr").html()),
        (l_radius = $("#meta-l_radius").html()),
        (l_radius_abbr = $("#meta-l_radius_abbr").html()),
        (l_diameter = $("#meta-l_diameter").html()),
        (l_diameter_abbr = $("#meta-l_diameter_abbr").html()),
        (l_perimeter = $("#meta-l_perimeter").html()),
        (l_perimeter_abbr = $("#meta-l_perimeter_abbr").html()),
        (l_basearea = $("#meta-l_basearea").html()),
        (l_basearea_abbr = $("#meta-l_basearea_abbr").html()),
        (l_lateralsurface = $("#meta-l_lateralsurface").html()),
        (l_lateralsurface_abbr = $("#meta-l_lateralsurface_abbr").html()),
        (l_surface = $("#meta-l_surface").html()),
        (l_surface_abbr = $("#meta-l_surface_abbr").html()),
        (l_volume = $("#meta-l_volume").html()),
        (l_volume_abbr = $("#meta-l_volume_abbr").html()),
        (l_edgelength_abbr = $("#meta-l_edgelength_abbr").html()),
        (l_triangle_sidelength = $("#meta-l_triangle_sidelength").html()),
        (l_conn_vectors = $("#meta-l_conn_vectors").html()),
        (l_area = $("#meta-l_area").html()),
        (l_plane_pf = $("#meta-l_plane_pf").html()),
        (l_plane_pf_abbr = $("#meta-l_plane_pf_abbr").html()),
        (l_plane_cf = $("#meta-l_plane_cf").html()),
        (l_plane_cf_abbr = $("#meta-l_plane_cf_abbr").html()),
        (l_line_pf = $("#meta-l_line_pf").html()),
        (l_line_pf_abbr = $("#meta-l_line_pf_abbr").html()),
        (l_line_trackpoints = $("#meta-l_line_trackpoints").html()),
        (l_line_trackpoints_abbr = $("#meta-l_line_trackpoints_abbr").html()),
        (l_sphere_radius = $("#meta-l_sphere_radius").html()),
        (l_sphere_perimeter = $("#meta-l_sphere_perimeter").html()),
        (l_sphere_area = $("#meta-l_sphere_area").html()),
        (l_sphere_area_abbr = $("#meta-l_sphere_area_abbr").html()),
        (l_sphere_surface = $("#meta-l_sphere_surface").html()),
        (l_sphere_volume = $("#meta-l_sphere_volume").html()),
        (l_sphere_equation = $("#meta-l_sphere_equation").html()),
        (l_cuboid_edges = $("#meta-l_cuboid_edges").html()),
        (l_cuboid_diagonal = $("#meta-l_cuboid_diagonal").html()),
        (l_cuboid_perimeter = $("#meta-l_cuboid_perimeter").html()),
        (l_cuboid_basearea = $("#meta-l_cuboid_basearea").html()),
        (l_cuboid_lateralsurface = $("#meta-l_cuboid_lateralsurface").html()),
        (l_cuboid_surface = $("#meta-l_cuboid_surface").html()),
        (l_cuboid_volume = $("#meta-l_cuboid_volume").html()),
        (l_cuboid_edgeslength = $("#meta-l_cuboid_edgeslength").html()),
        (l_vectors_length = $("#meta-l_vectors_length").html()),
        (l_lineseg_length = $("#meta-l_lineseg_length").html()),
        (l_lineseg_length_abbr = $("#meta-l_lineseg_length_abbr").html()),
        (l_lineseg_asvec = $("#meta-l_lineseg_asvec").html()),
        (l_vector_anglexy = $("#meta-l_vector_anglexy").html()),
        (l_quadrangle_length = $("#meta-l_quadrangle_length").html()),
        (l_cube_edge = $("#meta-l_cube_edge").html()),
        (l_cube_areadiagonal = $("#meta-l_cube_areadiagonal").html()),
        (l_cube_spacediagonal = $("#meta-l_cube_spacediagonal").html()),
        (l_cube_perimeter = $("#meta-l_cube_perimeter").html()),
        (l_cube_basearea = $("#meta-l_cube_basearea").html()),
        (l_cube_lateralsurface = $("#meta-l_cube_lateralsurface").html()),
        (l_cube_surface = $("#meta-l_cube_surface").html()),
        (l_cube_volume = $("#meta-l_cube_volume").html()),
        (l_cube_lengthsides = $("#meta-l_cube_lengthsides").html()),
        (l_cylinder_diameter = $("#meta-l_cylinder_diameter").html()),
        (l_cylinder_perimeter = $("#meta-l_cylinder_perimeter").html()),
        (l_cylinder_basearea = $("#meta-l_cylinder_basearea").html()),
        (l_cylinder_lateralsurface = $("#meta-l_cylinder_lateralsurface").html()),
        (l_cylinder_surface = $("#meta-l_cylinder_surface").html()),
        (l_cylinder_volume = $("#meta-l_cylinder_volume").html());
    var v,
        u,
        b = !1,
        w = !1,
        y = 3,
        m = Math.pow(10, y),
        x = "",
        T = parseFloat($("input#val_alpha").val()),
        H = T,
        R = !1,
        g = !1,
        f = !1,
        z = !1,
        M = 0,
        F = !1,
        V = !1,
        P = !1,
        S = 10,
        I = 5,
        k = 5592405,
        G = 1118481,
        B = new THREE.Object3D(),
        L = ["#00F", "#0A0", "#F00", "#C0C", "#0A0", "#FA0", "#00F0F0", "#A00A0A", "#FF0F00", "#5599FF", "#CCC0CC", "#A509AF", "#0FAFAA"],
        A = 0,
        q = (new THREE.Object3D(), ""),
        N = "",
        O = getUrlParameters();
    if (Object.keys(O).length > 0) {
        var C = decodeURIComponent(O.draw);
        $("textarea[name=val_drawings]").val(C),
            void 0 !== O.axesoff && ((R = !1), $("#axes-visible").prop("checked", !1)),
            void 0 !== O.cp && ((M = parseInt(O.cp)), (g = 0 != (2 & M)), (f = 0 != (4 & M)), (z = 0 != (8 & M)), $("#planexy-visible").prop("checked", g), $("#planexz-visible").prop("checked", f), $("#planeyz-visible").prop("checked", z));
    }
    $(".formelblock").keyup(function (e) {
        if ((p(!1), !t() && 37 != e.keyCode && 39 != e.keyCode && 38 != e.keyCode && 40 != e.keyCode)) {
            "" != x ? $("#errormsg").html(x) : $("#errormsg").html("");
            var a = $("textarea[name=val_drawings]").val();
            a != q && ((q = a), i(), n(), j.lookAt(B.position), p(!0), c(100), "" == $("#additionals").text() ? $("#additionals").hide() : ($("#additionals span").tipsy({ gravity: "s", offset: 5, html: !0 }), $("#additionals").show()));
        }
    }),
        $("textarea#val_drawings")
            .focusin(function (e) {
                U.noPan = !0;
            })
            .focusout(function (e) {
                U.noPan = !1;
            }),
        $(document).keyup(function (e) {
            ke && 27 === e.keyCode && $("#fullscreenbtn-close").trigger("click");
        }),
        $("#rendercanvas").on("pointerdown pointermove", function (e) {
            p(!0);
        }),
        $("#rendercanvas")
            .bind("wheel mousewheel DOMMouseScroll", function (e) {
                p(!0);
            })
            .on("pointerup pointerout", function (e) {
                p(!1);
            }),
        $("#rendercanvas").mousedown(function (e) {
            $("#val_drawings, input#val_alpha, #axes-visible").blur();
        }),
        (container = document.getElementById("rendercanvas")),
        (u = Detector.webgl ? new THREE.WebGLRenderer({ antialias: !0 }) : new THREE.CanvasRenderer({ antialias: !0 }));
    var D = document.getElementById("rendercanvas").offsetWidth,
        K = document.getElementById("rendercanvas").offsetHeight;
    u.setSize(D, K), container.appendChild(u.domElement);
    var j = new THREE.PerspectiveCamera(45, D / K, 1, 1e3),
        U = new THREE.OrbitControls(j, u.domElement);
    j.position.set(-10, 10, 8),
        U.saveState(),
        (U.enableKeys = !0),
        (U.enablePan = !0),
        (U.enableRotate = !0),
        (U.enableZoom = !0),
        (U.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
        (U.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN }),
        (U.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN });
    var W = new THREE.Scene();
    W.background = new THREE.Color(16777215);
    var Y,
        Z,
        J,
        Q,
        X,
        ee = 6,
        ae = 0.3,
        te = new THREE.FontLoader();
    te.load("/js/threejs/fonts/helvetiker_regular.typeface.json", function (e) {
        (Z = e), s(), $(".formelblock").trigger("keyup"), o();
    });
    var ie = new THREE.Vector3(0, 0, 0),
        se = 0.75,
        ne = 0.2,
        re = new THREE.Vector3(1, 0, 0),
        le = 255,
        oe = new THREE.ArrowHelper(re, ie, ee, le, se, ne);
    W.add(oe), (re = new THREE.Vector3(0, 0, 1)), (le = 3381555);
    var pe = new THREE.ArrowHelper(re, ie, ee, le, se, ne);
    W.add(pe), (re = new THREE.Vector3(0, 1, 0)), (le = 16711680);
    var ce = new THREE.ArrowHelper(re, ie, ee, le, se, ne);
    W.add(ce);
    var he = 20,
        Ee = he,
        de = 13421772,
        _e = 4539717,
        ve = 16768187,
        ue = new THREE.PlaneGeometry(he, he),
        be = new THREE.MeshBasicMaterial({ color: ve, side: THREE.DoubleSide, opacity: H, transparent: !0, depthWrite: !1 }),
        we = new THREE.Mesh(ue, be);
    (we.rotation.x = -Math.PI / 2), W.add(we), (we.receiveShadow = !0);
    var ye = new THREE.GridHelper(he, Ee, de, de);
    (ye.position = new THREE.Vector3(1, 0, 0)), W.add(ye);
    var me = new THREE.Mesh(ue, be);
    (me.rotation.y = -Math.PI / 2), W.add(me), (me.receiveShadow = !0);
    var xe = new THREE.GridHelper(he, Ee, de, de);
    (xe.position = new THREE.Vector3(0, 0, 0)), (xe.rotation.x = -Math.PI / 2), (xe.rotation.z = -Math.PI / 2), W.add(xe);
    var Te = new THREE.Mesh(ue, be);
    (Te.rotation.z = -Math.PI / 2), W.add(Te), (Te.receiveShadow = !0);
    var He = new THREE.GridHelper(he, Ee, de, de);
    (He.position = new THREE.Vector3(0, 0, 0)), (He.rotation.x = -Math.PI / 2), W.add(He), (we.visible = !1), (ye.visible = !1), (me.visible = !1), (xe.visible = !1), (Te.visible = !1), (He.visible = !1);
    var Re = new THREE.PlaneGeometry(he, he),
        ge = new THREE.MeshPhongMaterial({ color: 0, specular: G, shininess: 70, side: THREE.DoubleSide, transparent: !0, opacity: H }),
        fe = new THREE.Mesh(Re, ge);
    (fe.rotation.x = -Math.PI / 2), W.add(fe), (fe.receiveShadow = !0);
    var ze = new THREE.GridHelper(he, Ee, _e, _e);
    (ze.position = new THREE.Vector3(1, 0, 0)), W.add(ze);
    var Me = new THREE.Mesh(Re, ge);
    (Me.rotation.y = -Math.PI / 2), W.add(Me), (me.receiveShadow = !0);
    var $e = new THREE.GridHelper(he, Ee, _e, _e);
    ($e.position = new THREE.Vector3(0, 0, 0)), ($e.rotation.x = -Math.PI / 2), ($e.rotation.z = -Math.PI / 2), W.add($e);
    var Fe = new THREE.Mesh(Re, ge);
    (Fe.rotation.z = -Math.PI / 2), W.add(Fe), (Fe.receiveShadow = !0);
    var Ve = new THREE.GridHelper(he, Ee, _e, _e);
    (Ve.position = new THREE.Vector3(0, 0, 0)),
        (Ve.rotation.x = -Math.PI / 2),
        W.add(Ve),
        (fe.visible = !1),
        (ze.visible = !1),
        (Me.visible = !1),
        ($e.visible = !1),
        (Fe.visible = !1),
        (Ve.visible = !1),
        2 == M && (V ? (fe.visible = ze.visible = !0) : (we.visible = ye.visible = !0));
    var Pe = new THREE.PointLight(10066380, 0.75, 0, 1);
    (Pe.position.x = -80), (Pe.position.y = 120), (Pe.position.z = 130), W.add(Pe);
    var Se = new THREE.PointLight(13430476, 0.9, 0, 1);
    (Se.position.x = 90), (Se.position.y = 10), (Se.position.z = 125), W.add(Se);
    var Ie = new THREE.SpotLight(16772778, 2, 100, 0.9, 0.7, 2);
    Ie.position.set(1, 20, 11),
        (Ie.castShadow = !0),
        (Ie.shadow.mapSize.width = 1024),
        (Ie.shadow.mapSize.height = 1024),
        (Ie.shadow.camera.near = 0.5),
        (Ie.shadow.camera.far = 400),
        W.add(Ie),
        Detector.webgl && ((u.shadowMap.enabled = !0), (u.shadowMap.type = THREE.PCFSoftShadowMap)),
        window.addEventListener("resize", h, !1);
    var ke = !1;
    $("#fullscreen").click(function (e) {
        (ke = !ke),
            ke
                ? ($(".wrapper3d").width("90%"), $(".wrapper3d").height("80%"), $(".wrapper3dinner").height(0.9 * $(window).height()), $("#rendercanvas canvas").width("100%"), $("#rendercanvas canvas").height("100%"))
                : ($(".wrapper3d").width("500px"), $(".wrapper3d").height("auto"), $(".wrapper3dinner").height("400px"), $("#rendercanvas canvas").width("500px"), $("#rendercanvas canvas").height("400px")),
            (D = document.getElementById("rendercanvas").offsetWidth),
            (K = document.getElementById("rendercanvas").offsetHeight),
            console.log("Rendering in: " + D + " * " + K),
            u.setSize(D, K),
            h(),
            p(!0),
            c(100),
            $("html, body").animate({ scrollTop: $("#rendercanvas").offset().top - 50 }, 1e3);
    }),
        $("kbd").click(function () {
            $("#val_drawings").val().length > 0 ? $("#val_drawings").val($("#val_drawings").val() + "\n" + $(this).text()) : $("#val_drawings").val($("#val_drawings").val() + $(this).text()),
                "coordplanes" == $(this).attr("id") && $(".formelblock").trigger("keyup");
        }),
        $('label[for="axes-visible"]').click(function (e) {
            (R = $("#axes-visible").prop("checked")), n(), p(!0), c(100);
        }),
        $('label[for="planexy-visible"]').click(function (e) {
            (g = $("#planexy-visible").prop("checked")),
                g ? (M |= 2) : (M &= -3),
                i(),
                V ? ((fe.visible = ze.visible = g), (we.visible = ye.visible = !1)) : ((we.visible = ye.visible = g), (fe.visible = ze.visible = !1)),
                n(),
                p(!0),
                c(100);
        }),
        $('label[for="planexz-visible"]').click(function (e) {
            (f = $("#planexz-visible").prop("checked")),
                f ? (M |= 4) : (M &= -5),
                i(),
                V ? ((Me.visible = $e.visible = f), (me.visible = xe.visible = !1)) : ((me.visible = xe.visible = f), (Me.visible = $e.visible = !1)),
                n(),
                p(!0),
                c(100);
        }),
        $('label[for="planeyz-visible"]').click(function (e) {
            (z = $("#planeyz-visible").prop("checked")),
                z ? (M |= 8) : (M &= -9),
                i(),
                V ? ((Fe.visible = Ve.visible = z), (Te.visible = He.visible = !1)) : ((Te.visible = He.visible = z), (Fe.visible = Ve.visible = !1)),
                n(),
                p(!0),
                c(100);
        }),
        $("input#val_alpha")
            .bind("keyup change", function (e) {
                (U.noPan = !0), (T = parseFloat($(this).val())), n(), p(!0), c(100);
            })
            .focusout(function (e) {
                U.noPan = !1;
            }),
        $("#memvaluelink").click(function (e) {
            return (
                e.preventDefault(),
                $("#lightbox-popup").show(),
                $("#lightbox-center").html('<input type="text" class="linkshare" value="' + v + '" >'),
                $("#lightbox-center .linkshare").select(),
                $("#lightbox-center").css("margin-top", ($(window).height() - $("#lightbox-center").height()) / 2 + "px"),
                !1
            );
        }),
        $("#fullscreenbtn").click(function () {
            (ke = !0), $("#rendercanvas").addClass("fullscreen-canvas"), $("#fullscreenbtn-close").show(), E(), $("textarea#val_drawings").addClass("fullscreen-val_drawings");
        }),
        $("#fullscreenbtn-close").click(function () {
            (ke = !1), $("#rendercanvas").removeClass("fullscreen-canvas"), $("#fullscreenbtn-close").hide(), h(), $("textarea#val_drawings").removeClass("fullscreen-val_drawings");
        }),
        $("#shaderbtn").click(function () {
            (V = !V), (P = !0), n(), j.lookAt(B.position), p(!0), c(100);
        }),
        $("#campos code").click(function () {
            var e = $(this).text(),
                a = $(this),
                t = $("<input type=text>");
            t.prop("value", e),
                t.insertAfter($(this)),
                t.focus(),
                t.select(),
                a.hide(),
                t.focusout(function () {
                    a.show(), t.remove();
                });
        }),
        /msie|trident/i.test(navigator.userAgent) && $(".iehint").show(),
        "" == $("#additionals").text() && $("#additionals").hide(),
        $("#val_drawings").on("keydown", function (e) {
            if (N != $("#val_drawings").val() || e.ctrlKey) {
                N = $("#val_drawings").val();
                var a = !1,
                    t = this.selectionStart,
                    i = this.selectionEnd;
                i === t && (i = t + 1);
                var s = $(this).val().substring(t, i);
                if ((("-" != s && "." != s) || (i++, (s = $(this).val().substring(t, i))), (isNaN(s) || " " === s.charAt(0)) && ((i = t), (t -= 1), (s = $(this).val().substring(t, i))), isNaN(s) || " " === s.charAt(0) || "" === s)) return;
                for (var n = t, r = i; n >= 0; ) {
                    if (((s = $(this).val().substring(n, i)), "-" !== s && (isNaN(s) || " " === s.charAt(0)))) {
                        n++;
                        break;
                    }
                    n--;
                }
                for (; r <= $(this).val().length; ) {
                    if (((s = $(this).val().substring(t, r)), isNaN(s) || " " === s.charAt(s.length - 1))) {
                        r--;
                        break;
                    }
                    r++;
                }
                s = Number($(this).val().substring(n, r));
                var l = $(this).val(),
                    o = l.substring(0, n),
                    p = l.substring(r);
                "\n" == l.charAt(r - 1) && (p = "\n" + p);
                var c = ("" + s).length;
                e.ctrlKey && e.altKey && e.shiftKey && 38 == e.keyCode
                    ? (s++, (a = !0))
                    : e.ctrlKey && e.altKey && e.shiftKey && 40 == e.keyCode
                    ? (s--, (a = !0))
                    : e.ctrlKey && e.altKey && e.shiftKey && 39 == e.keyCode
                    ? ((s += 0.1), (a = !0))
                    : e.ctrlKey && e.altKey && e.shiftKey && 37 == e.keyCode && ((s -= 0.1), (a = !0)),
                    a && ((s = Math.round(1e3 * s) / 1e3), $(this).val(o + "" + s + p)),
                    $(".formelblock").trigger("keyup");
                var h = this;
                if (a) {
                    var E = ("" + s).length;
                    return (
                        E != c && (r -= c - E),
                        window.setTimeout(function () {
                            d(h, n, r);
                        }, 10),
                        e.preventDefault(),
                        !1
                    );
                }
            }
        });
});

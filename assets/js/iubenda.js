{{ if and $.Site.Params.iubenda.id (or (not $.Site.Params.iubenda.pro.enable_pro) (not $.Site.Params.iubenda.pro.disable_footer_link)) }}
(function (w,d) {
    var loader = function () {
        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
        s.src = "//cdn.iubenda.com/iubenda.js";
        tag.parentNode.insertBefore(s,tag);
    };
    if (w.addEventListener) {
        w.addEventListener("load", loader, false);
    } else if (w.attachEvent) {
        w.attachEvent("onload", loader);
    } else {
        w.onload = loader;
    }
})(window, document);
{{ end }}

{{- if and (not $.Site.IsServer) (and $.Site.Params.iubenda.pro.enable_cookie_policy (and $.Site.Params.iubenda.id $.Site.Params.iubenda.pro.site_id)) -}}
var _iub = _iub || [];
_iub.csConfiguration = {
    cookiePolicyId: {{ $.Site.Params.iubenda.id }},
    siteId: {{ $.Site.Params.iubenda.pro.site_id }},
    lang: "en",
    consentOnScroll: true
    {{- if not $.Site.Params.iubenda.pro.prior_consent }},
    priorConsent: false
    {{- end }},
    banner: {
        slideDown: false,
        applyStyles: false,
        content: "<p>{{ i18n "cookie_banner" }}</p>"
    }
};
{{- end -}}

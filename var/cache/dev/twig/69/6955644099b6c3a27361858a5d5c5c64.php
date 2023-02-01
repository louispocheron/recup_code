<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* pdf/test.html.twig */
class __TwigTemplate_04f06849c93228cb13b59f0d1d26322a extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "pdf/test.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "pdf/test.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "pdf/test.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 4
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        // line 5
        echo "    pdf
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 8
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 9
        echo "<link href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/recap.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
<link href=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/pdf.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">



<div class=\"wrapper\">
    <div class=\"header-pdf\">
         <h2 class=\"h2-pdf\">";
        // line 16
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 16, $this->source); })()), "user", [], "any", false, false, false, 16), "username", [], "any", false, false, false, 16), "html", null, true);
        echo "</h2>
    </div>
    <table class=\"table\">
        <tr>
            <th>Association</th>
            <th>Date</th>
            <th>Ville de départ</th>
            <th>Ville d'arrivée</th>    
            <th>Raisons</th>
            <th>Km</th>
            <th>Barème km</th>
            <th>Frais</th>
            <th>Dons</th>
            <th>A payer</th>
            <th>Durée</th>
            <th>Groupe</th>
            <th>Heures valorisées</th>
        </tr>
        <tr>        
            <td data-label=\"Association\" class=\"td\">";
        // line 35
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 35, $this->source); })()), "association", [], "any", false, false, false, 35), "name", [], "any", false, false, false, 35), "html", null, true);
        echo "</td> 
            <td data-label=\"Date\">";
        // line 36
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 36, $this->source); })()), "date", [], "any", false, false, false, 36), "d/m/Y"), "html", null, true);
        echo "</td>
            <td data-label=\"Ville de départ\">";
        // line 37
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 37, $this->source); })()), "villeDepart", [], "any", false, false, false, 37), "html", null, true);
        echo "</td>
            <td data-label=\"Ville d'arrivée\">";
        // line 38
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 38, $this->source); })()), "villeArrive", [], "any", false, false, false, 38), "html", null, true);
        echo "</td>
            <td data-label=\"Raison\">";
        // line 39
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 39, $this->source); })()), "raisons", [], "any", false, false, false, 39), "html", null, true);
        echo "</td>
            <td data-label=\"Km\">";
        // line 40
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 40, $this->source); })()), "km", [], "any", false, false, false, 40), "html", null, true);
        echo "km</td>
            <td data-label=\"Frais\">";
        // line 41
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 41, $this->source); })()), "bareme", [], "any", false, false, false, 41), "html", null, true);
        echo "</td>
            <td data-label=\"Frais\">";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 42, $this->source); })()), "frais", [], "any", false, false, false, 42), "html", null, true);
        echo "€</td>
            <td data-label=\"Don\" class=\"donTdPdf\" data-donPdf=\"";
        // line 43
        echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 43, $this->source); })()), "dons", [], "any", false, false, false, 43), 2), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 43, $this->source); })()), "dons", [], "any", false, false, false, 43), 2), "html", null, true);
        echo "€</td>
            <td data-label=\"A payer\" class=\"payerTdPdf\" data-payerPdf=\"";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 44, $this->source); })()), "Apayer", [], "any", false, false, false, 44), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 44, $this->source); })()), "Apayer", [], "any", false, false, false, 44), 2), "html", null, true);
        echo "€</td>
            <td data-label=\"Durée\" class=\"dureePdf\" data-dureePdf=\"";
        // line 45
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 45, $this->source); })()), "duree", [], "any", false, false, false, 45), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 45, $this->source); })()), "duree", [], "any", false, false, false, 45), "html", null, true);
        echo "</td>
            <td data-label=\"Frais\">";
        // line 46
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 46, $this->source); })()), "groupe", [], "any", false, false, false, 46), "html", null, true);
        echo "</td>
            <td data-label=\"Heures valorisées\" class=\"lastchild valoriseesTdPdf\" data-valoriseesPdf=\"";
        // line 47
        echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 47, $this->source); })()), "heuresValorisees", [], "any", false, false, false, 47), 2), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["action"]) || array_key_exists("action", $context) ? $context["action"] : (function () { throw new RuntimeError('Variable "action" does not exist.', 47, $this->source); })()), "heuresValorisees", [], "any", false, false, false, 47), 2), "html", null, true);
        echo "</td>
        </tr>
    </table>
    <div class=\"accept-container\">
        <div class=\"p-container\">
            <p>je soussigné(e), auteur du présent état, certifie l'éxactitude et souhaite pour la somme notifiée</p>
        </div>
        <div class=\"p-container\">
                <input type=\"checkbox\"/>
            <p>Son règlement par chèque ou par virement bancaire (fournir RIB pour le premier remboursement ou en cas de changement de compte)</p>
        </div>
        <div class=\"p-container\">
            <input type=\"checkbox\"/>
            <p>Renoncer au remboursement des frais du présent état au profit de l'association en tant que don</p>
        </div>
        <div class=\"p-container start\">
            <p style=\"text-align: start;\">Fait le : </p>
        </div>
    </div>
    <div class=\"sign-container\"> 
        <div class=\"signature\">
            <p class=\"p-sign\">Signature du salarié ou du bénévole : </p>
        </div>
        <div class=\"signature\">
            <p class=\"p-sign\">Signature du trésorier ou du président : </p>
        </div>
    </div>
</div>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 78
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 79
        echo "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\" integrity=\"sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>
    ";
        // line 80
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("pdfJs");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "pdf/test.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  236 => 80,  233 => 79,  223 => 78,  181 => 47,  177 => 46,  171 => 45,  165 => 44,  159 => 43,  155 => 42,  151 => 41,  147 => 40,  143 => 39,  139 => 38,  135 => 37,  131 => 36,  127 => 35,  105 => 16,  96 => 10,  91 => 9,  81 => 8,  70 => 5,  60 => 4,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}


{% block title %}
    pdf
{% endblock %}

{% block body %}
<link href=\"{{ asset('css/recap.css') }}\" rel=\"stylesheet\">
<link href=\"{{ asset('css/pdf.css') }}\" rel=\"stylesheet\">



<div class=\"wrapper\">
    <div class=\"header-pdf\">
         <h2 class=\"h2-pdf\">{{app.user.username}}</h2>
    </div>
    <table class=\"table\">
        <tr>
            <th>Association</th>
            <th>Date</th>
            <th>Ville de départ</th>
            <th>Ville d'arrivée</th>    
            <th>Raisons</th>
            <th>Km</th>
            <th>Barème km</th>
            <th>Frais</th>
            <th>Dons</th>
            <th>A payer</th>
            <th>Durée</th>
            <th>Groupe</th>
            <th>Heures valorisées</th>
        </tr>
        <tr>        
            <td data-label=\"Association\" class=\"td\">{{ action.association.name }}</td> 
            <td data-label=\"Date\">{{ action.date|date('d/m/Y') }}</td>
            <td data-label=\"Ville de départ\">{{ action.villeDepart }}</td>
            <td data-label=\"Ville d'arrivée\">{{ action.villeArrive }}</td>
            <td data-label=\"Raison\">{{ action.raisons }}</td>
            <td data-label=\"Km\">{{ action.km }}km</td>
            <td data-label=\"Frais\">{{ action.bareme }}</td>
            <td data-label=\"Frais\">{{ action.frais }}€</td>
            <td data-label=\"Don\" class=\"donTdPdf\" data-donPdf=\"{{ action.dons|number_format(2) }}\">{{ action.dons|number_format(2) }}€</td>
            <td data-label=\"A payer\" class=\"payerTdPdf\" data-payerPdf=\"{{ action.Apayer }}\">{{ action.Apayer|number_format(2) }}€</td>
            <td data-label=\"Durée\" class=\"dureePdf\" data-dureePdf=\"{{ action.duree }}\">{{ action.duree }}</td>
            <td data-label=\"Frais\">{{ action.groupe }}</td>
            <td data-label=\"Heures valorisées\" class=\"lastchild valoriseesTdPdf\" data-valoriseesPdf=\"{{ action.heuresValorisees|number_format(2) }}\">{{ action.heuresValorisees|number_format(2)}}</td>
        </tr>
    </table>
    <div class=\"accept-container\">
        <div class=\"p-container\">
            <p>je soussigné(e), auteur du présent état, certifie l'éxactitude et souhaite pour la somme notifiée</p>
        </div>
        <div class=\"p-container\">
                <input type=\"checkbox\"/>
            <p>Son règlement par chèque ou par virement bancaire (fournir RIB pour le premier remboursement ou en cas de changement de compte)</p>
        </div>
        <div class=\"p-container\">
            <input type=\"checkbox\"/>
            <p>Renoncer au remboursement des frais du présent état au profit de l'association en tant que don</p>
        </div>
        <div class=\"p-container start\">
            <p style=\"text-align: start;\">Fait le : </p>
        </div>
    </div>
    <div class=\"sign-container\"> 
        <div class=\"signature\">
            <p class=\"p-sign\">Signature du salarié ou du bénévole : </p>
        </div>
        <div class=\"signature\">
            <p class=\"p-sign\">Signature du trésorier ou du président : </p>
        </div>
    </div>
</div>

{% endblock %}

{% block javascripts %}
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\" integrity=\"sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>
    {{ encore_entry_script_tags('pdfJs') }}
{% endblock %}", "pdf/test.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/pdf/test.html.twig");
    }
}

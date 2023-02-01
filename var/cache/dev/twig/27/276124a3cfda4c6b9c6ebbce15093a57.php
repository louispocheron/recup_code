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

/* super_admin/user.html.twig */
class __TwigTemplate_1548863beeedf279d86931e831c4c98c extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/user.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/user.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "super_admin/user.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 2
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        // line 3
        echo " superAdmin/user 
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 6
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 7
        echo " <link href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/admintable.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <link href=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/recap.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">

 ";
        // line 11
        echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">
<p>Administration de ";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 12, $this->source); })()), "username", [], "any", false, false, false, 12), "html", null, true);
        echo " </p>
    <table class=\"sortable table\">
        <thead>
                <tr class=\"tr-first\">
                    <th data-column=\"association\" data-order=\"desc\" class=\"no-sort column\" >Association</th>
                    <th data-column=\"date\" data-order=\"desc\" class=\"column\">Date</th>
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
                    <th>Supprimer</th>
                </tr>
            </thead>
                <tbody class=\"ajaxDivContent\">
                    ";
        // line 33
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["actions"]) || array_key_exists("actions", $context) ? $context["actions"] : (function () { throw new RuntimeError('Variable "actions" does not exist.', 33, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["action"]) {
            // line 34
            echo "                        <tr class=\"trtest tr-";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "id", [], "any", false, false, false, 34), "html", null, true);
            echo "\">
                            <td data-label=\"Association\" class=\"td\">";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["action"], "association", [], "any", false, false, false, 35), "name", [], "any", false, false, false, 35), "html", null, true);
            echo "</td> 
                            <td data-label=\"Date\">";
            // line 36
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "date", [], "any", false, false, false, 36), "d/m/Y"), "html", null, true);
            echo "</td>
                            <td data-label=\"Ville de départ\">";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "villeDepart", [], "any", false, false, false, 37), "html", null, true);
            echo "</td>
                            <td data-label=\"Ville d'arrivée\">";
            // line 38
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "villeArrive", [], "any", false, false, false, 38), "html", null, true);
            echo "</td>
                            <td data-label=\"Raison\">";
            // line 39
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "raisons", [], "any", false, false, false, 39), "html", null, true);
            echo "</td>
                            <td data-label=\"Km\">";
            // line 40
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "km", [], "any", false, false, false, 40), "html", null, true);
            echo " km</td>
                            <td data-label=\"bareme\">";
            // line 41
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "bareme", [], "any", false, false, false, 41), "html", null, true);
            echo "</td>
                            <td data-label=\"Frais\">";
            // line 42
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "frais", [], "any", false, false, false, 42), "html", null, true);
            echo "€</td>
                            <td data-label=\"Don\" class=\"donTd\" data-don=\"";
            // line 43
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "dons", [], "any", false, false, false, 43), 2), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "dons", [], "any", false, false, false, 43), 2), "html", null, true);
            echo "€</td>
                            <td data-label=\"A payer\" class=\"payerTd\" data-payer=\"";
            // line 44
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "Apayer", [], "any", false, false, false, 44), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "Apayer", [], "any", false, false, false, 44), 2), "html", null, true);
            echo "€</td>
                            <td data-label=\"Durée\" class=\"duree\" data-duree=\"";
            // line 45
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "duree", [], "any", false, false, false, 45), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "duree", [], "any", false, false, false, 45), "html", null, true);
            echo "</td>
                            <td data-label=\"groupe\">";
            // line 46
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "groupe", [], "any", false, false, false, 46), "html", null, true);
            echo "€</td>
                            <td data-label=\"Heures valorisées\" class=\"lastchild valoriseesTd\" data-valorisees=\"";
            // line 47
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "heuresValorisees", [], "any", false, false, false, 47), 2), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "heuresValorisees", [], "any", false, false, false, 47), 2), "html", null, true);
            echo "</td>
                            <td class=\"trash-action-user\" data-id=\"";
            // line 48
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "id", [], "any", false, false, false, 48), "html", null, true);
            echo "\"><i class=\"fa-solid fa-trash poubelle\"></i></a></td>
                        </tr>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['action'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 51
        echo "                </tbody>
            </div>
        </div>

<div class=\"modal-adherer\">
    <h1 class=\"modalP\">Voulez vous vraiment supprimer cette saisie ?</h1>
    <img src=\"";
        // line 57
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/HumanMan.png"), "html", null, true);
        echo "\" class=\"img-modal\"/>
    <div class='btn-container'>
            <button class=\"btn-yes\">
                oui 
            </button>
        <button class=\"btn-no\">
            non
        </button>
    </div>
</div>
    </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 69
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 70
        echo "    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
  ";
        // line 71
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("deleteActionSuperAdmin");
        echo "

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "super_admin/user.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  249 => 71,  246 => 70,  236 => 69,  214 => 57,  206 => 51,  197 => 48,  191 => 47,  187 => 46,  181 => 45,  175 => 44,  169 => 43,  165 => 42,  161 => 41,  157 => 40,  153 => 39,  149 => 38,  145 => 37,  141 => 36,  137 => 35,  132 => 34,  128 => 33,  104 => 12,  101 => 11,  96 => 8,  91 => 7,  81 => 6,  70 => 3,  60 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block title %}
 superAdmin/user 
{% endblock %}

{% block body %}
 <link href=\"{{ asset('css/admintable.css') }}\" rel=\"stylesheet\">
    <link href=\"{{ asset('css/recap.css') }}\" rel=\"stylesheet\">

 {# <link href=\"{{ asset('css/superAdminTable.css') }}\" rel=\"stylesheet\"> #}
<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">
<p>Administration de {{user.username}} </p>
    <table class=\"sortable table\">
        <thead>
                <tr class=\"tr-first\">
                    <th data-column=\"association\" data-order=\"desc\" class=\"no-sort column\" >Association</th>
                    <th data-column=\"date\" data-order=\"desc\" class=\"column\">Date</th>
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
                    <th>Supprimer</th>
                </tr>
            </thead>
                <tbody class=\"ajaxDivContent\">
                    {% for action in actions %}
                        <tr class=\"trtest tr-{{action.id}}\">
                            <td data-label=\"Association\" class=\"td\">{{ action.association.name }}</td> 
                            <td data-label=\"Date\">{{ action.date|date('d/m/Y') }}</td>
                            <td data-label=\"Ville de départ\">{{ action.villeDepart }}</td>
                            <td data-label=\"Ville d'arrivée\">{{ action.villeArrive }}</td>
                            <td data-label=\"Raison\">{{ action.raisons }}</td>
                            <td data-label=\"Km\">{{ action.km }} km</td>
                            <td data-label=\"bareme\">{{ action.bareme }}</td>
                            <td data-label=\"Frais\">{{ action.frais }}€</td>
                            <td data-label=\"Don\" class=\"donTd\" data-don=\"{{ action.dons|number_format(2) }}\">{{ action.dons|number_format(2) }}€</td>
                            <td data-label=\"A payer\" class=\"payerTd\" data-payer=\"{{ action.Apayer }}\">{{ action.Apayer|number_format(2) }}€</td>
                            <td data-label=\"Durée\" class=\"duree\" data-duree=\"{{ action.duree }}\">{{ action.duree }}</td>
                            <td data-label=\"groupe\">{{ action.groupe }}€</td>
                            <td data-label=\"Heures valorisées\" class=\"lastchild valoriseesTd\" data-valorisees=\"{{ action.heuresValorisees|number_format(2) }}\">{{ action.heuresValorisees|number_format(2)}}</td>
                            <td class=\"trash-action-user\" data-id=\"{{action.id}}\"><i class=\"fa-solid fa-trash poubelle\"></i></a></td>
                        </tr>
                    {% endfor %}
                </tbody>
            </div>
        </div>

<div class=\"modal-adherer\">
    <h1 class=\"modalP\">Voulez vous vraiment supprimer cette saisie ?</h1>
    <img src=\"{{ asset('assets/HumanMan.png') }}\" class=\"img-modal\"/>
    <div class='btn-container'>
            <button class=\"btn-yes\">
                oui 
            </button>
        <button class=\"btn-no\">
            non
        </button>
    </div>
</div>
    </div>
{% endblock %}
{% block javascripts %}
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
  {{ encore_entry_script_tags('deleteActionSuperAdmin') }}

{% endblock %}
", "super_admin/user.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/super_admin/user.html.twig");
    }
}

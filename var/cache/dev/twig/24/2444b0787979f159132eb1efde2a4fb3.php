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

/* admin/user.html.twig */
class __TwigTemplate_9c36247493c871b91080d4eae5b43e26 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/user.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/admintable.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <link href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/recap.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">


<div class=\"content-container\">
    ";
        // line 12
        if (((isset($context["userAction"]) || array_key_exists("userAction", $context) ? $context["userAction"] : (function () { throw new RuntimeError('Variable "userAction" does not exist.', 12, $this->source); })()) == null)) {
            // line 13
            echo "        <h2>Aucune action n'a été effectuée par cet utilisateur</h2>
        <img src=\"";
            // line 14
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/Human.png"), "html", null, true);
            echo "\" alt=\"human\" class=\"img-responsive\" style=\"margin: 0 auto;\" />
        </div>
    ";
        } else {
            // line 17
            echo "<div class=\"content-container\">
    <div class=\"content-info\">
        <h3> Rechercher dans les saisies de ";
            // line 19
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 19, $this->source); })()), "username", [], "any", false, false, false, 19), "html", null, true);
            echo " </h3>
       
        <div class=\"totalDiv\">
            <div class=\"select-container\">
                <label>Années :</label>
                <select class=\"selectYear\" id=\"selectYear\"></select>
            </div>
            <div class=\"select-container\">
                <label>Mois :</label>
                <select class=\"selectMonth\" id=\"selectMonth\"></select>
            </div>
            <input type=\"submit\" class=\"btn-submit\" value=\"rechercher\">
        </div>
        ";
            // line 33
            echo "         <p class=\"totalH1 flex-start\"></p>

        <div class=\"sum-js\">
            <p class=\"alert-message\"></p>
            <p class=\"total-paragraphe\">Total de toutes les saisies :</p>
            <div class=\"main-container\">
                <div class=\"total-container\">
                    <p class=\"total-heure\"></p>
                    <p class=\"total-payer\"></p>
                </div>
                <div class=\"total-container\">
                    <p class=\"total-don\"></p>
                    <p class=\"total-valorisees\"></p>
                </div>
            </div>
        </div>
    </div>
        ";
            // line 51
            echo "         <table class=\"sortable table\">
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
            // line 71
            $this->loadTemplate("admin/action_user.html.twig", "admin/user.html.twig", 71)->display($context);
            echo " 
                </tbody>
            </div>
        </div>

";
        }
        // line 77
        echo "
<div class=\"modal-adherer\">
    <h1 class=\"modalP\">Voulez-vous vraiment supprimer cette saisie ?</h1>
    <img src=\"";
        // line 80
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

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 92
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 93
        echo "    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/toastify-js\"></script>
  ";
        // line 95
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("admin");
        echo "
  ";
        // line 97
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/user.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  227 => 97,  223 => 95,  219 => 93,  209 => 92,  187 => 80,  182 => 77,  173 => 71,  151 => 51,  132 => 33,  116 => 19,  112 => 17,  106 => 14,  103 => 13,  101 => 12,  93 => 7,  88 => 6,  78 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}{% endblock %}

{% block body %}
    <link href=\"{{ asset('css/admintable.css') }}\" rel=\"stylesheet\">
    <link href=\"{{ asset('css/recap.css') }}\" rel=\"stylesheet\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">


<div class=\"content-container\">
    {% if userAction == null %}
        <h2>Aucune action n'a été effectuée par cet utilisateur</h2>
        <img src=\"{{ asset('assets/Human.png') }}\" alt=\"human\" class=\"img-responsive\" style=\"margin: 0 auto;\" />
        </div>
    {% else %}
<div class=\"content-container\">
    <div class=\"content-info\">
        <h3> Rechercher dans les saisies de {{ user.username }} </h3>
       
        <div class=\"totalDiv\">
            <div class=\"select-container\">
                <label>Années :</label>
                <select class=\"selectYear\" id=\"selectYear\"></select>
            </div>
            <div class=\"select-container\">
                <label>Mois :</label>
                <select class=\"selectMonth\" id=\"selectMonth\"></select>
            </div>
            <input type=\"submit\" class=\"btn-submit\" value=\"rechercher\">
        </div>
        {# <p class=\"flex-start\"> Vous avez fait {{ actions.getTotalItemCount }} saisies </p> #}
         <p class=\"totalH1 flex-start\"></p>

        <div class=\"sum-js\">
            <p class=\"alert-message\"></p>
            <p class=\"total-paragraphe\">Total de toutes les saisies :</p>
            <div class=\"main-container\">
                <div class=\"total-container\">
                    <p class=\"total-heure\"></p>
                    <p class=\"total-payer\"></p>
                </div>
                <div class=\"total-container\">
                    <p class=\"total-don\"></p>
                    <p class=\"total-valorisees\"></p>
                </div>
            </div>
        </div>
    </div>
        {# {{dump(userAction)}} #}
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
                    {% include \"admin/action_user.html.twig\" %} 
                </tbody>
            </div>
        </div>

{% endif %}

<div class=\"modal-adherer\">
    <h1 class=\"modalP\">Voulez-vous vraiment supprimer cette saisie ?</h1>
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

{% endblock %}
{% block javascripts %}
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/toastify-js\"></script>
  {{ encore_entry_script_tags('admin') }}
  {# {{ encore_entry_script_tags('deleteActionSuperAdmin') }} #}

{% endblock %}", "admin/user.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/admin/user.html.twig");
    }
}

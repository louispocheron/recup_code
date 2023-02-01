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

/* association/index.html.twig */
class __TwigTemplate_6bd8544bea6e80771e50baae9d13453b extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "association/index.html.twig", 1);
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

        echo "Associations";
        
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
        echo "
    <link href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/association.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">

    <div class=\"association-container\">
        <div class=\"input-pagination\">
            <input type=\"text\" id=\"search\" class=\"search-bar-input\" placeholder=\"Rechercher une association\">
            <div class=\"pagination-container\">
                ";
        // line 13
        echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 13, $this->source); })()));
        echo "
            </div>
        </div>

        ";
        // line 17
        if (((isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 17, $this->source); })()) == null)) {
            // line 18
            echo "            <h4>Aucune association</h4>
        ";
        } else {
            // line 20
            echo "            <div class=\"count mt-4 total-count\">
                <h4> il y a ";
            // line 21
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 21, $this->source); })()), "getTotalItemCount", [], "any", false, false, false, 21), "html", null, true);
            echo " associations différentes</h4>
            </div> 
        ";
        }
        // line 24
        echo "        <div class=\"ajaxAssocContent\">
            ";
        // line 25
        $this->loadTemplate("association/ajax_view.html.twig", "association/index.html.twig", 25)->display($context);
        // line 26
        echo "        </div>
    </div>
    <div class=\"pagination-container mobile-pagination\">
        ";
        // line 29
        echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 29, $this->source); })()));
        echo "
    </div>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 34
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 35
        echo "    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    ";
        // line 36
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("search");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "association/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  160 => 36,  157 => 35,  147 => 34,  133 => 29,  128 => 26,  126 => 25,  123 => 24,  117 => 21,  114 => 20,  110 => 18,  108 => 17,  101 => 13,  92 => 7,  89 => 6,  79 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Associations{% endblock %}

{% block body %}

    <link href=\"{{ asset('css/association.css') }}\" rel=\"stylesheet\">

    <div class=\"association-container\">
        <div class=\"input-pagination\">
            <input type=\"text\" id=\"search\" class=\"search-bar-input\" placeholder=\"Rechercher une association\">
            <div class=\"pagination-container\">
                {{ knp_pagination_render(associations) }}
            </div>
        </div>

        {% if associations == null %}
            <h4>Aucune association</h4>
        {% else %}
            <div class=\"count mt-4 total-count\">
                <h4> il y a {{associations.getTotalItemCount}} associations différentes</h4>
            </div> 
        {% endif %}
        <div class=\"ajaxAssocContent\">
            {% include \"association/ajax_view.html.twig\" %}
        </div>
    </div>
    <div class=\"pagination-container mobile-pagination\">
        {{ knp_pagination_render(associations) }}
    </div>

{% endblock %}

{% block javascripts %}
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    {{ encore_entry_script_tags('search') }}
{% endblock %}

", "association/index.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/association/index.html.twig");
    }
}

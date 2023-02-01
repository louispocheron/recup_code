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

/* super_admin/index.html.twig */
class __TwigTemplate_2b03299d2c18a5ca63d04e2ca4dd2764 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "super_admin/index.html.twig", 1);
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

        echo "Super administration";
        
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/supeadmin.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <link href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/indexSuperAdmin.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <div class=\"count mt-4\">
        <h4> Il y a ";
        // line 9
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 9, $this->source); })()), "getTotalItemCount", [], "any", false, false, false, 9), "html", null, true);
        echo " associations différentes </h4>
    </div>
    <ul class=\"associations\">
        ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 12, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
            // line 13
            echo "            <li class=\"assoc-li\">
                <a class=\"getAssocId uniqueAssoc\" href=\" ";
            // line 14
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("super_admin_assoc", ["id" => twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 14)]), "html", null, true);
            echo " \" id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 14), "html", null, true);
            echo "\">
                    <h3 class=\"assoc-name\">";
            // line 15
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "name", [], "any", false, false, false, 15), "html", null, true);
            echo "</h3>
                    ";
            // line 16
            if ((twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 16) != null)) {
                // line 17
                echo "                        <img class=\"assoc-logo\" src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 17))), "html", null, true);
                echo "\" alt=\"logo de l'association\">
                    ";
            } else {
                // line 19
                echo "                        <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
                echo "\" class=\"assoc-img-first default-image\"></img>
                    ";
            }
            // line 21
            echo "                    <p class=\"card-description\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "description", [], "any", false, false, false, 21), "html", null, true);
            echo "</p>
                </a>
            </li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "    </ul>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "super_admin/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  146 => 25,  135 => 21,  129 => 19,  123 => 17,  121 => 16,  117 => 15,  111 => 14,  108 => 13,  104 => 12,  98 => 9,  93 => 7,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Super administration{% endblock %}

{% block body %}
    <link href=\"{{ asset('css/supeadmin.css') }}\" rel=\"stylesheet\">
    <link href=\"{{ asset('css/indexSuperAdmin.css') }}\" rel=\"stylesheet\">
    <div class=\"count mt-4\">
        <h4> Il y a {{associations.getTotalItemCount}} associations différentes </h4>
    </div>
    <ul class=\"associations\">
        {% for association in associations %}
            <li class=\"assoc-li\">
                <a class=\"getAssocId uniqueAssoc\" href=\" {{path('super_admin_assoc', {'id': association.id})}} \" id=\"{{association.id}}\">
                    <h3 class=\"assoc-name\">{{association.name}}</h3>
                    {% if association.logo != null %}
                        <img class=\"assoc-logo\" src=\"{{ asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"logo de l'association\">
                    {% else %}
                        <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first default-image\"></img>
                    {% endif %}
                    <p class=\"card-description\">{{association.description}}</p>
                </a>
            </li>
        {% endfor %}
    </ul>
{% endblock %}
", "super_admin/index.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/super_admin/index.html.twig");
    }
}

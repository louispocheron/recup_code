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

/* mon_compte/index.html.twig */
class __TwigTemplate_60cd1c5004dbaf9125128aceaa2f642f extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mon_compte/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "mon_compte/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "mon_compte/index.html.twig", 1);
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

        echo "MonCompte";
        
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
        echo " <link href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/moncompte.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">

<h1>MON COMPTE</h1>
<div class=\"infoPerso\">
    <h1>Informations</h1>
    <div class=\"container-container\">
        <div class=\"infoPerso-container\">
            <p>nom d'utilisateur : </p>
            <p class=\"server-served\">";
        // line 14
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 14, $this->source); })()), "username", [], "any", false, false, false, 14), "html", null, true);
        echo "</p>
            ";
        // line 15
        if ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 15, $this->source); })()), "user", [], "any", false, false, false, 15), "profilPicture", [], "any", false, false, false, 15) != null)) {
            // line 16
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/profil_picture/" . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 16, $this->source); })()), "user", [], "any", false, false, false, 16), "profilPicture", [], "any", false, false, false, 16))), "html", null, true);
            echo "\" alt=\"\" class=\"user-avatar moncompte-avatar\" />
            ";
        } else {
            // line 18
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/build/profil_picture/default_profil.png"), "html", null, true);
            echo "\" alt=\"\" class=\"user-avatar default moncompte-avatar\" />
            ";
        }
        // line 20
        echo "        </div>
        <div class=\"infoPerso-container\">
            <p> adresse email : </p>
            <p class=\"server-served\">";
        // line 23
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 23, $this->source); })()), "email", [], "any", false, false, false, 23), "html", null, true);
        echo "</p>
        </div>
        <div class=\"infoPerso-container\">
            <p> mot de passe : </p>
            <p class=\"server-served\">********</p>
        </div>
        <div class=\"infoPerso-container\">
            <p> vous avez realisé ";
        // line 30
        if (((isset($context["actions"]) || array_key_exists("actions", $context) ? $context["actions"] : (function () { throw new RuntimeError('Variable "actions" does not exist.', 30, $this->source); })()) == 1)) {
            // line 31
            echo "                ";
            echo twig_escape_filter($this->env, (isset($context["actions"]) || array_key_exists("actions", $context) ? $context["actions"] : (function () { throw new RuntimeError('Variable "actions" does not exist.', 31, $this->source); })()), "html", null, true);
            echo " saisie</p>
            ";
        } else {
            // line 33
            echo "                ";
            echo twig_escape_filter($this->env, (isset($context["actions"]) || array_key_exists("actions", $context) ? $context["actions"] : (function () { throw new RuntimeError('Variable "actions" does not exist.', 33, $this->source); })()), "html", null, true);
            echo " saisies</p>
            ";
        }
        // line 35
        echo "                <a href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("recapitulatif");
        echo "\"><button class=\"btn-saisie\"><i class=\"fa-solid fa-eye\"></i></button></a>
        </div>
    </div>
</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "mon_compte/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 35,  141 => 33,  135 => 31,  133 => 30,  123 => 23,  118 => 20,  112 => 18,  106 => 16,  104 => 15,  100 => 14,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}MonCompte{% endblock %}

{% block body %}
 <link href=\"{{ asset('css/moncompte.css') }}\" rel=\"stylesheet\">

<h1>MON COMPTE</h1>
<div class=\"infoPerso\">
    <h1>Informations</h1>
    <div class=\"container-container\">
        <div class=\"infoPerso-container\">
            <p>nom d'utilisateur : </p>
            <p class=\"server-served\">{{ user.username }}</p>
            {% if app.user.profilPicture != null %}
                <img src=\"{{ asset('/build/profil_picture/' ~ app.user.profilPicture) }}\" alt=\"\" class=\"user-avatar moncompte-avatar\" />
            {% else %}
                <img src=\"{{ asset('/build/profil_picture/default_profil.png') }}\" alt=\"\" class=\"user-avatar default moncompte-avatar\" />
            {% endif %}
        </div>
        <div class=\"infoPerso-container\">
            <p> adresse email : </p>
            <p class=\"server-served\">{{ user.email }}</p>
        </div>
        <div class=\"infoPerso-container\">
            <p> mot de passe : </p>
            <p class=\"server-served\">********</p>
        </div>
        <div class=\"infoPerso-container\">
            <p> vous avez realisé {% if actions == 1 %}
                {{actions}} saisie</p>
            {% else %}
                {{actions}} saisies</p>
            {% endif %}
                <a href=\"{{ path('recapitulatif') }}\"><button class=\"btn-saisie\"><i class=\"fa-solid fa-eye\"></i></button></a>
        </div>
    </div>
</div>
{% endblock %}
", "mon_compte/index.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/mon_compte/index.html.twig");
    }
}

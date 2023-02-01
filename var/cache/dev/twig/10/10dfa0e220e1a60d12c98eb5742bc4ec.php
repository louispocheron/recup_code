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

/* association/association.html.twig */
class __TwigTemplate_ddad79490c69e5ad86011e0d3c58abfc extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/association.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/association.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "association/association.html.twig", 1);
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

        echo "association";
        
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/association.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
 <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">
    <div class=\"flex-me\">
    <div class=\"unique-assoc-container\">
        <div class=\"arrow-left\">
            <a href=\" ";
        // line 11
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("association");
        echo " \"><i class=\"fa-solid fa-arrow-left\"></i></a>
        </div>
        <div class=\"unique-assoc-title\">
            <h1 class=\"assoc-name-fully\">";
        // line 14
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 14, $this->source); })()), "name", [], "any", false, false, false, 14), "html", null, true);
        echo "</h1>
            ";
        // line 15
        if ((twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 15, $this->source); })()), "logo", [], "any", false, false, false, 15) != null)) {
            // line 16
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 16, $this->source); })()), "logo", [], "any", false, false, false, 16))), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 16, $this->source); })()), "name", [], "any", false, false, false, 16), "html", null, true);
            echo "\" class=\"assoc-img\"/>
            ";
        } else {
            // line 18
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
            echo "\" class=\"assoc-img-first\"></img>
            ";
        }
        // line 20
        echo "        </div>
        <span class=\"trait\"></span>
        <div class=\"assoc-description\">
            ";
        // line 23
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 23, $this->source); })()), "description", [], "any", false, false, false, 23), "html", null, true);
        echo "
            ";
        // line 25
        echo "                <button type=\"button\" class=\"btn btn-primary btn-adherer\">adhérer</button>
            ";
        // line 27
        echo "            ";
        // line 28
        echo "                <button type=\"button\" class=\"btn btn-primary btn-quitter\">quitter</button>
            ";
        // line 30
        echo "        </div>
    </div>
</div>

";
        // line 35
        echo "<div class=\"modal-adherer\">
    <h1>Voulez vous vraiment adherer a cette association ?</h1>
    ";
        // line 37
        if ((twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 37, $this->source); })()), "logo", [], "any", false, false, false, 37) != null)) {
            // line 38
            echo "        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 38, $this->source); })()), "logo", [], "any", false, false, false, 38))), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 38, $this->source); })()), "name", [], "any", false, false, false, 38), "html", null, true);
            echo "\" class=\"assoc-img-modal\"/>
    ";
        } else {
            // line 40
            echo "        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
            echo "\" class=\"assoc-img-first default-image\"></img>
    ";
        }
        // line 42
        echo "    <div class='btn-container'>
        <a class=\"btnAdherer\" href=\"";
        // line 43
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("association_adherer", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 43, $this->source); })()), "id", [], "any", false, false, false, 43)]), "html", null, true);
        echo "\">
            <button class=\"btn-yes\">
                Oui
            </button>
        </a>
        <button class=\"btn-no\">
            Non
        </button>
    </div>
</div>

<div class=\"modal-desadherer\">
    <h1>Voulez vous vraiment quitter cette association ?</h1>
    ";
        // line 56
        if ((twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 56, $this->source); })()), "logo", [], "any", false, false, false, 56) != null)) {
            // line 57
            echo "        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 57, $this->source); })()), "logo", [], "any", false, false, false, 57))), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 57, $this->source); })()), "name", [], "any", false, false, false, 57), "html", null, true);
            echo "\" class=\"assoc-img-modal\"/>
    ";
        } else {
            // line 59
            echo "        <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
            echo "\" class=\"assoc-img-modal\"></img>
    ";
        }
        // line 61
        echo "    <div class='btn-container'>
        <a class=\"btnQuitter\" href=\"";
        // line 62
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("association_quitter", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 62, $this->source); })()), "id", [], "any", false, false, false, 62)]), "html", null, true);
        echo "\">
            <button class=\"btn-yes-quit\">
                Quitter 
            </button>
        </a>
        <button class=\"btn-no-quit\">
            non
        </button>
    </div>
</div>
</div>
</div>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 77
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 78
        echo "    <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/toastify-js\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    <script src=\"dist/notiflix-aio-3.2.5.min.js\"></script>

    ";
        // line 82
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("association");
        echo "



";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "association/association.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  245 => 82,  239 => 78,  229 => 77,  205 => 62,  202 => 61,  196 => 59,  188 => 57,  186 => 56,  170 => 43,  167 => 42,  161 => 40,  153 => 38,  151 => 37,  147 => 35,  141 => 30,  138 => 28,  136 => 27,  133 => 25,  129 => 23,  124 => 20,  118 => 18,  110 => 16,  108 => 15,  104 => 14,  98 => 11,  89 => 6,  79 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}association{% endblock %}

{% block body %}
 <link href=\"{{ asset('css/association.css') }}\" rel=\"stylesheet\">
 <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">
    <div class=\"flex-me\">
    <div class=\"unique-assoc-container\">
        <div class=\"arrow-left\">
            <a href=\" {{path('association')}} \"><i class=\"fa-solid fa-arrow-left\"></i></a>
        </div>
        <div class=\"unique-assoc-title\">
            <h1 class=\"assoc-name-fully\">{{association.name}}</h1>
            {% if association.logo != null %}
                <img src=\"{{asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"{{association.name}}\" class=\"assoc-img\"/>
            {% else %}
                <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first\"></img>
            {% endif %}
        </div>
        <span class=\"trait\"></span>
        <div class=\"assoc-description\">
            {{ association.description }}
            {# <a class=\"btnAdherer\" href=\"{{ path('association_adherer', {'id': association.id}) }}\"> #}
                <button type=\"button\" class=\"btn btn-primary btn-adherer\">adhérer</button>
            {# </a> #}
            {# <a class=\"btnQuitter\" href=\"{{ path('association_quitter', {'id': association.id}) }}\"> #}
                <button type=\"button\" class=\"btn btn-primary btn-quitter\">quitter</button>
            {# </a> #}
        </div>
    </div>
</div>

{# MODAL #}
<div class=\"modal-adherer\">
    <h1>Voulez vous vraiment adherer a cette association ?</h1>
    {% if association.logo != null %}
        <img src=\"{{asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"{{association.name}}\" class=\"assoc-img-modal\"/>
    {% else %}
        <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first default-image\"></img>
    {% endif %}
    <div class='btn-container'>
        <a class=\"btnAdherer\" href=\"{{ path('association_adherer', {'id': association.id}) }}\">
            <button class=\"btn-yes\">
                Oui
            </button>
        </a>
        <button class=\"btn-no\">
            Non
        </button>
    </div>
</div>

<div class=\"modal-desadherer\">
    <h1>Voulez vous vraiment quitter cette association ?</h1>
    {% if association.logo != null %}
        <img src=\"{{asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"{{association.name}}\" class=\"assoc-img-modal\"/>
    {% else %}
        <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-modal\"></img>
    {% endif %}
    <div class='btn-container'>
        <a class=\"btnQuitter\" href=\"{{ path('association_quitter', {'id': association.id}) }}\">
            <button class=\"btn-yes-quit\">
                Quitter 
            </button>
        </a>
        <button class=\"btn-no-quit\">
            non
        </button>
    </div>
</div>
</div>
</div>

{% endblock %}

{% block javascripts %}
    <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/toastify-js\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    <script src=\"dist/notiflix-aio-3.2.5.min.js\"></script>

    {{ encore_entry_script_tags('association') }}



{% endblock %}", "association/association.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/association/association.html.twig");
    }
}

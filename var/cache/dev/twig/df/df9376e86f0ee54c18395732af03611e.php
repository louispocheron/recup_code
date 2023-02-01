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

/* admin/index.html.twig */
class __TwigTemplate_63c4e5dca9987a1cbefe23e6098ec3d5 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/index.html.twig", 1);
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

        echo "Hello AdminController!";
        
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/admin.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">

<div class=\"assoc-container\">
    <div class=\"assoc-info\">
        <h3 class=\"assoc-pres\">Administration de l'association :</h3>
        <h3 class=\"assoc-name\">";
        // line 11
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 11, $this->source); })()), "name", [], "any", false, false, false, 11), "html", null, true);
        echo "</h3>
        ";
        // line 12
        if ((twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 12, $this->source); })()), "logo", [], "any", false, false, false, 12) != null)) {
            // line 13
            echo "            <img class=\"assoc-logo\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 13, $this->source); })()), "logo", [], "any", false, false, false, 13))), "html", null, true);
            echo "\" alt=\"logo de l'association\">
        ";
        } else {
            // line 15
            echo "            <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
            echo "\" class=\"assoc-img-first default-image\"></img>
        ";
        }
        // line 17
        echo "    </div>
    ";
        // line 18
        echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 18, $this->source); })()));
        echo "
    <div class=\"full-card-container\">
        <h4>Total de toutes les saisies de vos adhérents</h4>
        <div class=\"card-container\">
            <div class=\"homeCardAdmin\">
                <img src=\"";
        // line 23
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/DONSPNG.png"), "html", null, true);
        echo "\" class='svg-home'>
                <h2 class=\"dons-card\"></h2>
                <h3>Dons</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <img src=\"";
        // line 28
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/REMBOURSEMENT-02.svg"), "html", null, true);
        echo "\" class='svg-home'>
                <h2 class=\"remboursement-card\"></h2>
                <h3>Remboursement</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <i class=\"fa-solid fa-clock svg-homecard\"></i>
                <h2 class=\"heure-card\"></h2>
                <h3 class=\"heure-card-bene\">Heure de bénévolat</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <img src=\"";
        // line 38
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/VALORISATION-01.svg"), "html", null, true);
        echo "\" class='svg-home bene'>
                <h2 class=\"benevolat-card\"></h2>
                <h3>Bénévolat</h3>
            </div>
        </div>
    </div>
</div>

<div class=\"main-container\">
    <table class=\"table\">
            <tr>
                <th>Utilisateur</th>
                <th>Email</th>
                <th>Supprimer</th>
            </tr>
    ";
        // line 53
        if (twig_test_empty((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 53, $this->source); })()))) {
            // line 54
            echo "        <tr>
            <td>Aucun utilisateur</td>
            <td></td>
            <td></td>
        </tr>
    ";
        } else {
            // line 60
            echo "        ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 60, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
                // line 61
                echo "                <tr class=\"tr-";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 61), "html", null, true);
                echo "\">
                    <td onclick=\"window.location='";
                // line 62
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user", ["idAssoc" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 62, $this->source); })()), "id", [], "any", false, false, false, 62), "id" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 62)]), "html", null, true);
                echo "'\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "username", [], "any", false, false, false, 62), "html", null, true);
                echo "</td>
                    <td onclick=\"window.location='";
                // line 63
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user", ["idAssoc" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 63, $this->source); })()), "id", [], "any", false, false, false, 63), "id" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 63)]), "html", null, true);
                echo "'\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "email", [], "any", false, false, false, 63), "html", null, true);
                echo "</td>
                    <td class=\"delete-user\" data-id=\"";
                // line 64
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 64), "html", null, true);
                echo "\" data-assoc=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 64, $this->source); })()), "id", [], "any", false, false, false, 64), "html", null, true);
                echo "\"><i class=\"fa-solid fa-trash trash-user\"></i></td>
                </tr>

                 <div class=\"modal-adherer-del\">
                    <h1 class=\"modalP\">Voulez-vous vraiment supprimer cet utilisateur de votre association ?</h1>
                    <img src=\"";
                // line 69
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
                // line 81
                echo "        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['user'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            echo " 
    ";
        }
        // line 83
        echo "    
    </table>
</div>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 88
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 89
        echo "    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    ";
        // line 90
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("fetchData");
        echo "
    ";
        // line 91
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("sort");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  262 => 91,  258 => 90,  255 => 89,  245 => 88,  231 => 83,  222 => 81,  208 => 69,  198 => 64,  192 => 63,  186 => 62,  181 => 61,  176 => 60,  168 => 54,  166 => 53,  148 => 38,  135 => 28,  127 => 23,  119 => 18,  116 => 17,  110 => 15,  104 => 13,  102 => 12,  98 => 11,  89 => 6,  79 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AdminController!{% endblock %}

{% block body %}
    <link href=\"{{ asset('css/admin.css') }}\" rel=\"stylesheet\">

<div class=\"assoc-container\">
    <div class=\"assoc-info\">
        <h3 class=\"assoc-pres\">Administration de l'association :</h3>
        <h3 class=\"assoc-name\">{{association.name}}</h3>
        {% if association.logo != null %}
            <img class=\"assoc-logo\" src=\"{{ asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"logo de l'association\">
        {% else %}
            <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first default-image\"></img>
        {% endif %}
    </div>
    {{ knp_pagination_render(users) }}
    <div class=\"full-card-container\">
        <h4>Total de toutes les saisies de vos adhérents</h4>
        <div class=\"card-container\">
            <div class=\"homeCardAdmin\">
                <img src=\"{{asset('assets/DONSPNG.png') }}\" class='svg-home'>
                <h2 class=\"dons-card\"></h2>
                <h3>Dons</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <img src=\"{{asset('assets/REMBOURSEMENT-02.svg') }}\" class='svg-home'>
                <h2 class=\"remboursement-card\"></h2>
                <h3>Remboursement</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <i class=\"fa-solid fa-clock svg-homecard\"></i>
                <h2 class=\"heure-card\"></h2>
                <h3 class=\"heure-card-bene\">Heure de bénévolat</h3>
            </div>
            <div class=\"homeCardAdmin\">
                <img src=\"{{asset('assets/VALORISATION-01.svg') }}\" class='svg-home bene'>
                <h2 class=\"benevolat-card\"></h2>
                <h3>Bénévolat</h3>
            </div>
        </div>
    </div>
</div>

<div class=\"main-container\">
    <table class=\"table\">
            <tr>
                <th>Utilisateur</th>
                <th>Email</th>
                <th>Supprimer</th>
            </tr>
    {% if users is empty %}
        <tr>
            <td>Aucun utilisateur</td>
            <td></td>
            <td></td>
        </tr>
    {% else %}
        {% for user in users %}
                <tr class=\"tr-{{user.id}}\">
                    <td onclick=\"window.location='{{path('admin_user', {'idAssoc': association.id, 'id': user.id } )}}'\">{{ user.username }}</td>
                    <td onclick=\"window.location='{{path('admin_user', {'idAssoc': association.id, 'id': user.id } )}}'\">{{ user.email }}</td>
                    <td class=\"delete-user\" data-id=\"{{user.id}}\" data-assoc=\"{{association.id}}\"><i class=\"fa-solid fa-trash trash-user\"></i></td>
                </tr>

                 <div class=\"modal-adherer-del\">
                    <h1 class=\"modalP\">Voulez-vous vraiment supprimer cet utilisateur de votre association ?</h1>
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

                {# href=\"{{ path('remove_user', {'idAssoc': association.id, 'id': user.id, } )}} #}
        {% endfor %} 
    {% endif %}
    
    </table>
</div>

{% endblock %}
{% block javascripts %}
    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    {{ encore_entry_script_tags('fetchData') }}
    {{ encore_entry_script_tags('sort') }}
{% endblock %}", "admin/index.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/admin/index.html.twig");
    }
}

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

/* super_admin/assoc.html.twig */
class __TwigTemplate_52ff2026fb99605fd8e3e7399ba350d1 extends Template
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
        // line 2
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/assoc.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "super_admin/assoc.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "super_admin/assoc.html.twig", 2);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        // line 6
        echo " superadmin association
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 9
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 10
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/supeadmin.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
        ";
        // line 12
        echo "
    <link href=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/admin.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">


    <div class=\"assoc-container\">
        <div class=\"assoc-info\">
            <h3 class=\"assoc-name-main\">";
        // line 18
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 18, $this->source); })()), "name", [], "any", false, false, false, 18), "html", null, true);
        echo "</h3>
            ";
        // line 19
        if ((twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 19, $this->source); })()), "logo", [], "any", false, false, false, 19) != null)) {
            // line 20
            echo "                <img class=\"assoc-logo\" src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 20, $this->source); })()), "logo", [], "any", false, false, false, 20))), "html", null, true);
            echo "\" alt=\"logo de l'association\">
            ";
        } else {
            // line 22
            echo "                <img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
            echo "\" class=\"assoc-img-first default-image\"></img>
            ";
        }
        // line 24
        echo "            <h5 style=\"color:#505050\">Cette association est gérée par ";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 24, $this->source); })()), "user", [], "any", false, false, false, 24), "username", [], "any", false, false, false, 24), "html", null, true);
        echo "</h5>
            <a href=\"";
        // line 25
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("super_admin_action_change_admin", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 25, $this->source); })()), "id", [], "any", false, false, false, 25)]), "html", null, true);
        echo "\"><button class=\"btn-yes custom-btn\">Changer l'administrateur</button></a>
        </div>
        <div class=\"full-card-container\">
            <h4>Total de toutes les saisies de ";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 28, $this->source); })()), "name", [], "any", false, false, false, 28), "html", null, true);
        echo "</h4>
            <div class=\"card-container\">
                <div class=\"homeCardAdmin\">
                    <img src=\"";
        // line 31
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/DONSPNG.png"), "html", null, true);
        echo "\" class='svg-home'>
                    <h2 class=\"dons-card\"></h2>
                    <h3>Dons</h3>
                </div>
                <div class=\"homeCardAdmin\">
                    <img src=\"";
        // line 36
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
        // line 46
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
        // line 60
        if (twig_test_empty((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 60, $this->source); })()))) {
            // line 61
            echo "            <tr>
                <td>Aucun utilisateur</td>
                <td></td>
                <td></td>
            </tr>
        ";
        } else {
            // line 67
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 67, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
                // line 68
                echo "                    <tr onclick=\"window.location='";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("super_admin_user", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 68, $this->source); })()), "id", [], "any", false, false, false, 68), "userID" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 68)]), "html", null, true);
                echo "'\">
                        <td>";
                // line 69
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "username", [], "any", false, false, false, 69), "html", null, true);
                echo "</td>
                        <td>";
                // line 70
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "email", [], "any", false, false, false, 70), "html", null, true);
                echo "</td>
                        <td><a href=\"";
                // line 71
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("super_admin_user_delete", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["association"]) || array_key_exists("association", $context) ? $context["association"] : (function () { throw new RuntimeError('Variable "association" does not exist.', 71, $this->source); })()), "id", [], "any", false, false, false, 71), "userID" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 71)]), "html", null, true);
                echo "\"><i class=\"fa-solid fa-trash\"></i></a></td>
                    </tr>
                    
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['user'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 74
            echo " 
        ";
        }
        // line 76
        echo "        </table>
    </div>

    <div class=\"modal-adherer-del\">
        <h1 class=\"modalP\">Voulez-vous vraiment supprimer cette saisie ?</h1>
        <img src=\"";
        // line 81
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

    // line 94
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 95
        echo "    <script src=\"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js\"></script>
    ";
        // line 96
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("superAdmin");
        echo "
    ";
        // line 97
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("superAdminFetch");
        echo "

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "super_admin/assoc.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  268 => 97,  264 => 96,  261 => 95,  251 => 94,  229 => 81,  222 => 76,  218 => 74,  208 => 71,  204 => 70,  200 => 69,  195 => 68,  190 => 67,  182 => 61,  180 => 60,  163 => 46,  150 => 36,  142 => 31,  136 => 28,  130 => 25,  125 => 24,  119 => 22,  113 => 20,  111 => 19,  107 => 18,  99 => 13,  96 => 12,  91 => 10,  81 => 9,  70 => 6,  60 => 5,  37 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("
{% extends 'base.html.twig' %}


{% block title %}
 superadmin association
{% endblock %}

{% block body %}
    <link href=\"{{ asset('css/supeadmin.css') }}\" rel=\"stylesheet\">
        {# <link href=\"{{ asset('css/admin.css') }}\" rel=\"stylesheet\"> #}

    <link href=\"{{ asset('css/admin.css') }}\" rel=\"stylesheet\">


    <div class=\"assoc-container\">
        <div class=\"assoc-info\">
            <h3 class=\"assoc-name-main\">{{association.name}}</h3>
            {% if association.logo != null %}
                <img class=\"assoc-logo\" src=\"{{ asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"logo de l'association\">
            {% else %}
                <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first default-image\"></img>
            {% endif %}
            <h5 style=\"color:#505050\">Cette association est gérée par {{association.user.username}}</h5>
            <a href=\"{{path(\"super_admin_action_change_admin\", { id: association.id })}}\"><button class=\"btn-yes custom-btn\">Changer l'administrateur</button></a>
        </div>
        <div class=\"full-card-container\">
            <h4>Total de toutes les saisies de {{association.name}}</h4>
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
                    <tr onclick=\"window.location='{{path('super_admin_user', {'id': association.id, 'userID': user.id, } )}}'\">
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td><a href=\"{{ path('super_admin_user_delete', {'id': association.id, 'userID': user.id, } )}}\"><i class=\"fa-solid fa-trash\"></i></a></td>
                    </tr>
                    
            {% endfor %} 
        {% endif %}
        </table>
    </div>

    <div class=\"modal-adherer-del\">
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
    {{ encore_entry_script_tags('superAdmin') }}
    {{ encore_entry_script_tags('superAdminFetch') }}

{% endblock %}
", "super_admin/assoc.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/super_admin/assoc.html.twig");
    }
}

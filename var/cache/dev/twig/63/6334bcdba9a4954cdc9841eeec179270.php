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

/* admin/choose.html.twig */
class __TwigTemplate_1b35beab5ed1eb96c2ddb7f2666a80d8 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/choose.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/choose.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/choose.html.twig", 1);
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

        echo "admin";
        
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/choose.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">
    <h2 class=\"text-center admin-main\">Administration</h2>
    <div class=\"container\">
        ";
        // line 9
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["admin"]) || array_key_exists("admin", $context) ? $context["admin"] : (function () { throw new RuntimeError('Variable "admin" does not exist.', 9, $this->source); })()));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
            // line 10
            echo "            ";
            // line 11
            echo "
            <div class=\"assoc-container\">
                <h2>";
            // line 13
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "name", [], "any", false, false, false, 13), "html", null, true);
            echo "</h2>
                ";
            // line 14
            if ((twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 14) != null)) {
                // line 15
                echo "                    <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 15))), "html", null, true);
                echo "\" alt=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "name", [], "any", false, false, false, 15), "html", null, true);
                echo "\" class=\"assoc-img\"/>
                ";
            } else {
                // line 17
                echo "                    <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
                echo "\" class=\"assoc-img\"></img>
                ";
            }
            // line 19
            echo "                <div class=\"btn-container\">
                    <a href=\"";
            // line 20
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin", ["idAssoc" => twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 20)]), "html", null, true);
            echo "\">
                            <button class=\"btn-admin\">Administrer</button>
                    </a>
                    <form action=\"";
            // line 23
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("change_logo", ["idAssoc" => twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 23)]), "html", null, true);
            echo "\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-sbmt\">
                            <input type=\"hidden\" name=\"token\" value=\"";
            // line 24
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("upload"), "html", null, true);
            echo "\" />
                            <label for=\"my_file-";
            // line 25
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 25), "html", null, true);
            echo "\" class=\"input-file\">Changer logo</label>
                            <input type=\"file\" id=\"my_file-";
            // line 26
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 26), "html", null, true);
            echo "\" name=\"logo\" class=\"input-sbmt\" data-id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, false, 26), "html", null, true);
            echo "\"></input>
                            ";
            // line 28
            echo "                            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 28, $this->source); })()), "flashes", [0 => "error"], "method", false, false, false, 28));
            foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
                // line 29
                echo "                                <div class=\"alert alert-danger\">
                                    ";
                // line 30
                echo twig_escape_filter($this->env, $context["message"], "html", null, true);
                echo "
                                </div>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 33
            echo "                    </form>
                </div>
            </div>
        ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "    </div>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 41
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 42
        echo "        ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("choose");
        echo "
    ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/choose.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  222 => 42,  212 => 41,  200 => 37,  183 => 33,  174 => 30,  171 => 29,  166 => 28,  160 => 26,  156 => 25,  152 => 24,  148 => 23,  142 => 20,  139 => 19,  133 => 17,  125 => 15,  123 => 14,  119 => 13,  115 => 11,  113 => 10,  96 => 9,  89 => 6,  79 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}admin{% endblock %}

{% block body %}
    <link href=\"{{ asset('css/choose.css') }}\" rel=\"stylesheet\">
    <h2 class=\"text-center admin-main\">Administration</h2>
    <div class=\"container\">
        {% for association in admin %}
            {# {{ dump(association)}} #}

            <div class=\"assoc-container\">
                <h2>{{ association.name }}</h2>
                {% if association.logo != null %}
                    <img src=\"{{asset('/build/logo_directory/' ~ association.logo) }}\" alt=\"{{association.name}}\" class=\"assoc-img\"/>
                {% else %}
                    <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img\"></img>
                {% endif %}
                <div class=\"btn-container\">
                    <a href=\"{{ path('admin', {'idAssoc': association.id }) }}\">
                            <button class=\"btn-admin\">Administrer</button>
                    </a>
                    <form action=\"{{ path('change_logo',  {'idAssoc': association.id }) }}\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-sbmt\">
                            <input type=\"hidden\" name=\"token\" value=\"{{ csrf_token('upload') }}\" />
                            <label for=\"my_file-{{loop.index}}\" class=\"input-file\">Changer logo</label>
                            <input type=\"file\" id=\"my_file-{{loop.index}}\" name=\"logo\" class=\"input-sbmt\" data-id=\"{{loop.index}}\"></input>
                            {# {{ dump(app.flashes('error')) }} #}
                            {% for message in app.flashes('error') %}
                                <div class=\"alert alert-danger\">
                                    {{ message }}
                                </div>
                            {% endfor %}
                    </form>
                </div>
            </div>
        {% endfor %}
    </div>

{% endblock %}
    
    {% block javascripts %}
        {{ encore_entry_script_tags('choose') }}
    {% endblock %}

", "admin/choose.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/admin/choose.html.twig");
    }
}

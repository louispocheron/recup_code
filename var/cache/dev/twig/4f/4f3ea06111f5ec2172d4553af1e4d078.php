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

/* association/ajax_view.html.twig */
class __TwigTemplate_852a5b2d503de86d5d7b0fca3b7d9964 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/ajax_view.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "association/ajax_view.html.twig"));

        // line 1
        echo "    <ul class=\"associations\">
        ";
        // line 2
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["associations"]) || array_key_exists("associations", $context) ? $context["associations"] : (function () { throw new RuntimeError('Variable "associations" does not exist.', 2, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["association"]) {
            // line 3
            echo "            <li class=\"assoc-li\">
                <a class=\"getAssocId uniqueAssoc\" href=\" ";
            // line 4
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("unique_association", ["id" => twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 4)]), "html", null, true);
            echo " \" id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "id", [], "any", false, false, false, 4), "html", null, true);
            echo "\">
                    <h3 class=\"assoc-name\">";
            // line 5
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["association"], "name", [], "any", false, false, false, 5), "html", null, true);
            echo "</h3>
                    ";
            // line 6
            if ((twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 6) != null)) {
                // line 7
                echo "                        <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("/build/logo_directory/" . twig_get_attribute($this->env, $this->source, $context["association"], "logo", [], "any", false, false, false, 7))), "html", null, true);
                echo "\" class=\"assoc-img-first\"></img>
                    ";
            } else {
                // line 9
                echo "                        <img src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("/assets/default.PNG"), "html", null, true);
                echo "\" class=\"assoc-img-first\"></img>
                    ";
            }
            // line 11
            echo "                </a>
            </li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['association'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "    </ul>

";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "association/ajax_view.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  85 => 14,  77 => 11,  71 => 9,  65 => 7,  63 => 6,  59 => 5,  53 => 4,  50 => 3,  46 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("    <ul class=\"associations\">
        {% for association in associations %}
            <li class=\"assoc-li\">
                <a class=\"getAssocId uniqueAssoc\" href=\" {{path('unique_association', {'id': association.id})}} \" id=\"{{association.id}}\">
                    <h3 class=\"assoc-name\">{{association.name}}</h3>
                    {% if association.logo != null %}
                        <img src=\"{{ asset('/build/logo_directory/' ~ association.logo) }}\" class=\"assoc-img-first\"></img>
                    {% else %}
                        <img src=\"{{ asset('/assets/default.PNG') }}\" class=\"assoc-img-first\"></img>
                    {% endif %}
                </a>
            </li>
        {% endfor %}
    </ul>

", "association/ajax_view.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/association/ajax_view.html.twig");
    }
}

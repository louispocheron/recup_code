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

/* admin/action_user.html.twig */
class __TwigTemplate_248e1c8d6d9cc7d7b52cc5e5e8b4e459 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/action_user.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/action_user.html.twig"));

        // line 1
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["userAction"]) || array_key_exists("userAction", $context) ? $context["userAction"] : (function () { throw new RuntimeError('Variable "userAction" does not exist.', 1, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["action"]) {
            // line 2
            echo "        <tr class=\"trtest tr-";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "id", [], "any", false, false, false, 2), "html", null, true);
            echo "\">
            <td data-label=\"Association\" class=\"td\">";
            // line 3
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["action"], "association", [], "any", false, false, false, 3), "name", [], "any", false, false, false, 3), "html", null, true);
            echo "</td> 
            <td data-label=\"Date\">";
            // line 4
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "date", [], "any", false, false, false, 4), "d/m/Y"), "html", null, true);
            echo "</td>
            <td data-label=\"Ville de d??part\">";
            // line 5
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "villeDepart", [], "any", false, false, false, 5), "html", null, true);
            echo "</td>
            <td data-label=\"Ville d'arriv??e\">";
            // line 6
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "villeArrive", [], "any", false, false, false, 6), "html", null, true);
            echo "</td>
            <td data-label=\"Km\">";
            // line 7
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "raisons", [], "any", false, false, false, 7), "html", null, true);
            echo "</td>
            <td data-label=\"Raison\">";
            // line 8
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "km", [], "any", false, false, false, 8), "html", null, true);
            echo " km</td>
            <td data-label=\"Heure de d??part\">";
            // line 9
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "bareme", [], "any", false, false, false, 9), "html", null, true);
            echo "</td>
            <td data-label=\"Heure d'arriv??e\">";
            // line 10
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "frais", [], "any", false, false, false, 10), "html", null, true);
            echo "</td>
            <td data-label=\"Don\" class=\"donTd\" data-don=\"";
            // line 11
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "dons", [], "any", false, false, false, 11), 2), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "dons", [], "any", false, false, false, 11), 2), "html", null, true);
            echo "???</td>
            <td data-label=\"A payer\" class=\"payerTd\" data-payer=\"";
            // line 12
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "Apayer", [], "any", false, false, false, 12), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "Apayer", [], "any", false, false, false, 12), 2), "html", null, true);
            echo "???</td>
            <td data-label=\"Dur??e\" class=\"duree\" data-duree=\"";
            // line 13
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "duree", [], "any", false, false, false, 13), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "duree", [], "any", false, false, false, 13), "html", null, true);
            echo "</td>
            <td data-label=\"Frais\">";
            // line 14
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "groupe", [], "any", false, false, false, 14), "html", null, true);
            echo "</td>
            <td data-label=\"Heures valoris??es\" class=\"lastchild valoriseesTd\" data-valorisees=\"";
            // line 15
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "heuresValorisees", [], "any", false, false, false, 15), 2), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_number_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "heuresValorisees", [], "any", false, false, false, 15), 2), "html", null, true);
            echo "</td>
            ";
            // line 17
            echo "            <td class=\"modal-open-delete\" data-id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("assets/trash-01.png"), "html", null, true);
            echo "\" class=\"trash-png\"  data-id=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["action"], "id", [], "any", false, false, false, 17), "html", null, true);
            echo "\"/></td>  
    </tr>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['action'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/action_user.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 17,  106 => 15,  102 => 14,  96 => 13,  90 => 12,  84 => 11,  80 => 10,  76 => 9,  72 => 8,  68 => 7,  64 => 6,  60 => 5,  56 => 4,  52 => 3,  47 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% for action in userAction %}
        <tr class=\"trtest tr-{{action.id}}\">
            <td data-label=\"Association\" class=\"td\">{{ action.association.name }}</td> 
            <td data-label=\"Date\">{{ action.date|date('d/m/Y') }}</td>
            <td data-label=\"Ville de d??part\">{{ action.villeDepart }}</td>
            <td data-label=\"Ville d'arriv??e\">{{ action.villeArrive }}</td>
            <td data-label=\"Km\">{{ action.raisons }}</td>
            <td data-label=\"Raison\">{{ action.km }} km</td>
            <td data-label=\"Heure de d??part\">{{ action.bareme }}</td>
            <td data-label=\"Heure d'arriv??e\">{{ action.frais }}</td>
            <td data-label=\"Don\" class=\"donTd\" data-don=\"{{ action.dons|number_format(2) }}\">{{ action.dons|number_format(2) }}???</td>
            <td data-label=\"A payer\" class=\"payerTd\" data-payer=\"{{ action.Apayer }}\">{{ action.Apayer|number_format(2) }}???</td>
            <td data-label=\"Dur??e\" class=\"duree\" data-duree=\"{{ action.duree }}\">{{ action.duree }}</td>
            <td data-label=\"Frais\">{{ action.groupe }}</td>
            <td data-label=\"Heures valoris??es\" class=\"lastchild valoriseesTd\" data-valorisees=\"{{ action.heuresValorisees|number_format(2) }}\">{{ action.heuresValorisees|number_format(2)}}</td>
            {# <td class=\"last-td-poubelle\" data-id=\"{{action.id}}\"><i class=\"fa-solid fa-trash poubelle\"></i></a></td> #}
            <td class=\"modal-open-delete\" data-id=\"{{action.id}}\"><img src=\"{{ asset('assets/trash-01.png') }}\" class=\"trash-png\"  data-id=\"{{action.id}}\"/></td>  
    </tr>
{% endfor %}", "admin/action_user.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/admin/action_user.html.twig");
    }
}

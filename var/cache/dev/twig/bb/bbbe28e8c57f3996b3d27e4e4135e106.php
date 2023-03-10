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

/* faq/index.html.twig */
class __TwigTemplate_37ae38bf1773073d7666472407ec3e1c extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "faq/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "faq/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "faq/index.html.twig", 1);
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

        echo "FAQ";
        
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/faq.css"), "html", null, true);
        echo "\" rel=\"stylesheet\">

    <div class=\"container\">
        <h1 class=\"h1-faq\">MENTIONS L??GALES</h1>
        <div class=\"question-container\">
            <p>SAVED, autrement dit, Simplification Administrative Valorisation et D??placements, est un outil permettant d???effectuer, pour un b??n??vole, son relev?? de d??placements b??n??voles et de valoriser son apport b??n??vole. Concr??tement, principalement, il permet pour un b??n??vole : de r??aliser ses relev??s de d??placements & d???avoir un suivi de ses frais de b??n??voles, de demander le remboursement de ses frais ou y renoncer sous forme de don, d???obtenir des r??ductions d???imp??ts en fonction des dons et sous certaines conditions, de valoriser financi??rement son b??n??volat & rendre compte de son utilit?? sociale, d???avoir un suivi horaire de son b??n??volat & d???acqu??rir des droits de formation sur son Compte Engagement Citoyen.
            <br> 

          C???est une plateforme ??tant ??galement utile pour les associations. En effet, elle permet, notamment, pour ces derni??res, de rembourser les frais b??n??voles ou ??mettre un re??u fiscal en cas de don avec un justificatif clair, simple et pr??cis, d???avoir un suivi des dons annuels par b??n??vole afin de les saisir dans la comptabilit??, d???inscrire la valorisation financi??re du b??n??volat au sein des comptes 8, de certifier des heures de b??n??volats d??clar??es sur lecomptebenevole en lien avec le Compte Engagement Citoyen.
         <br> 
            En vertu de l???article 6 de la loi n?? 2004-575 du 21 juin 2004 pour la confiance dans l'??conomie num??rique, il est pr??cis?? aux utilisateurs de l???application web et mobile SAVED, l'identit?? des diff??rents intervenants dans le cadre de sa r??alisation et de son suivi :
            <br>
            </p> 
            <ul class=\"ul-container\">
                <li>Propri??taire :</li>
                <ul>
                    <li>CDOS de C??te-d???Or ??? 1 Rue Jean Monnet, 21300 Chen??ve</li>
                </ul>
            </ul>
            <ul class=\"ul-container\">
                <li>Contacts du Propri??taire :</li>
                <ul>
                    <li>T??l??phone : 03-80-45-84-85</li>
                    <li>Mail : cotedor@franceolympique.com</li>
                </ul>
            </ul>
            <ul class=\"ul-container\">
                <li>H??bergeur :</li>
                <ul>
                    <li>OVH ??? 2 rue Kellermann, BP 80157, 59100 Roubaix</li>
                    <li>support@ovh.com</li>
                </ul>
            </ul>
            
        </div>
        <div class=\"question-container\">
            <h3>Conditions g??n??rales d???utilisation du site et des services propos??s</h3>  
            <p>L???utilisation de l???application SAVED implique l???acceptation pleine et enti??re des conditions g??n??rales d???utilisation ci-apr??s d??crites. Ces conditions d???utilisation sont susceptibles d?????tre modifi??es ou compl??t??es ?? tout moment, les utilisateurs de l???application SAVED sont donc invit??s ?? les consulter de mani??re r??guli??re.
            <br>
    Cette application est normalement accessible ?? tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut ??tre toutefois d??cid??e par CDOS de C??te-d???Or, qui s???efforcera alors de communiquer pr??alablement aux utilisateurs les dates et heures de l???intervention.
    <br> 
    L???application SAVED est mise ?? jour r??guli??rement par CDOS de C??te-d???Or. De la m??me mani??re, les mentions l??gales peuvent ??tre modifi??es ?? tout moment : elles s???imposent n??anmoins ?? l???utilisateur qui est invit?? ?? s???y r??f??rer le plus souvent possible afin d???en prendre connaissance.
</p> 
        </div>
        <div class=\"question-container\">
            <h3>Propri??t?? intellectuelle et contrefa??ons</h3>  
            <p>Le CDOS de C??te-d???Or est propri??taire des droits de propri??t?? intellectuelle ou d??tient les droits d???usage sur tous les ??l??ments accessibles de l???application SAVED, notamment textes, images, graphismes, logos, ic??nes, sons???
            <br>
            Toute reproduction, repr??sentation, modification, publication, adaptation de tout ou partie des ??l??ments du site, quel que soit le moyen ou le proc??d?? utilis??, est interdite, sauf autorisation ??crite pr??alable de la part du CDOS de C??te-d???Or.
            <br>
            Toute exploitation non autoris??e de l???application ou de l???un quelconque des ??l??ments qu???il contient sera consid??r??e comme constitutive d???une contrefa??on et poursuivie conform??ment aux dispositions des articles L.335-2 du Code de Propri??t?? Intellectuelle.
            </p> 
        </div>
        <div class=\"question-container\">
            <h3>Limitations de responsabilit??s</h3>  
            <p>
            Le CDOS de C??te-d???Or ne pourra en aucun cas ??tre tenu responsable des dommages directs et indirects caus??s au mat??riel de l???utilisateur, lors de l???acc??s ?? l???application SAVED, et r??sultant soit de l???utilisation d???un mat??riel ne r??pondant pas aux sp??cifications ??voqu??es au point 4, soit de l???apparition d???un bug ou d???une incompatibilit?? de l???application. 
            <br>
            Le CDOS de C??te-d???Or ne pourra ??galement pas ??tre tenu pour responsable des dommages indirects cons??cutifs ?? l???utilisation de l???application SAVED.
            <br>
            Des espaces interactifs (possibilit?? de poser des questions dans l???espace contact) sont ?? la disposition des utilisateurs. Le CDOS de C??te d'Or se r??serve le droit de supprimer, sans mise en demeure pr??alable, tout contenu d??pos?? dans cet espace qui contreviendrait ?? la l??gislation applicable en France, en particulier aux dispositions relatives ?? la protection des donn??es. Le cas ??ch??ant, le CDOS de C??te d'Or se r??serve ??galement la possibilit?? de mettre en cause la responsabilit?? civile et/ou p??nale de l???utilisateur, notamment en cas de message ?? caract??re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis?? (texte, photographie???).
            </p> 
        </div>
        <div class=\"question-container\">
    <h1 class=\"h1-faq   \">PROTECTION DES DONN??ES / RGPD</h1>  
    <p>Le Comit?? D??partemental Olympique et Sportif de C??te-d???Or s&#39;engage ?? ce que la collecte et
le traitement de vos donn??es, effectu??s ?? partir de SAVED, soient conformes au r??glement
g??n??ral sur la protection des donn??es (RGPD) et ?? la loi Informatique et Libert??s.
Aucune information personnelle n&#39;est collect??e ?? l???insu de l???utilisateur ou c??d??e ?? des tiers.
L???utilisateur dispose au sein de SAVED des outils n??cessaires lui permettant de prendre
connaissance des informations administratives de son association. Les informations ??
caract??re personnel ne sont visibles que par le ou les administrateurs des associations
auxquelles vous avez adh??r?? et le Super Administrateur g??r?? par le CDOS de C??te-d???Or.
Les donn??es personnelles recueillies dans le cadre des services propos??s sur SAVED sont
trait??es selon des protocoles s??curis??s et permettent ?? la direction de g??rer les demandes
re??ues dans ses applications informatiques.

Pour toute information ou exercice de vos droits Informatique et Libert??s sur les traitements
de donn??es personnelles g??r??s par la CNIL, vous pouvez contacter son d??l??gu?? ?? la
protection des donn??es (DPO) par courrier ??lectronique : crib.cotedor@franceolympique.com</p> 
</div>
    </div>
    

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "faq/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}FAQ{% endblock %}

{% block body %}
 <link href=\"{{ asset('css/faq.css') }}\" rel=\"stylesheet\">

    <div class=\"container\">
        <h1 class=\"h1-faq\">MENTIONS L??GALES</h1>
        <div class=\"question-container\">
            <p>SAVED, autrement dit, Simplification Administrative Valorisation et D??placements, est un outil permettant d???effectuer, pour un b??n??vole, son relev?? de d??placements b??n??voles et de valoriser son apport b??n??vole. Concr??tement, principalement, il permet pour un b??n??vole : de r??aliser ses relev??s de d??placements & d???avoir un suivi de ses frais de b??n??voles, de demander le remboursement de ses frais ou y renoncer sous forme de don, d???obtenir des r??ductions d???imp??ts en fonction des dons et sous certaines conditions, de valoriser financi??rement son b??n??volat & rendre compte de son utilit?? sociale, d???avoir un suivi horaire de son b??n??volat & d???acqu??rir des droits de formation sur son Compte Engagement Citoyen.
            <br> 

          C???est une plateforme ??tant ??galement utile pour les associations. En effet, elle permet, notamment, pour ces derni??res, de rembourser les frais b??n??voles ou ??mettre un re??u fiscal en cas de don avec un justificatif clair, simple et pr??cis, d???avoir un suivi des dons annuels par b??n??vole afin de les saisir dans la comptabilit??, d???inscrire la valorisation financi??re du b??n??volat au sein des comptes 8, de certifier des heures de b??n??volats d??clar??es sur lecomptebenevole en lien avec le Compte Engagement Citoyen.
         <br> 
            En vertu de l???article 6 de la loi n?? 2004-575 du 21 juin 2004 pour la confiance dans l'??conomie num??rique, il est pr??cis?? aux utilisateurs de l???application web et mobile SAVED, l'identit?? des diff??rents intervenants dans le cadre de sa r??alisation et de son suivi :
            <br>
            </p> 
            <ul class=\"ul-container\">
                <li>Propri??taire :</li>
                <ul>
                    <li>CDOS de C??te-d???Or ??? 1 Rue Jean Monnet, 21300 Chen??ve</li>
                </ul>
            </ul>
            <ul class=\"ul-container\">
                <li>Contacts du Propri??taire :</li>
                <ul>
                    <li>T??l??phone : 03-80-45-84-85</li>
                    <li>Mail : cotedor@franceolympique.com</li>
                </ul>
            </ul>
            <ul class=\"ul-container\">
                <li>H??bergeur :</li>
                <ul>
                    <li>OVH ??? 2 rue Kellermann, BP 80157, 59100 Roubaix</li>
                    <li>support@ovh.com</li>
                </ul>
            </ul>
            
        </div>
        <div class=\"question-container\">
            <h3>Conditions g??n??rales d???utilisation du site et des services propos??s</h3>  
            <p>L???utilisation de l???application SAVED implique l???acceptation pleine et enti??re des conditions g??n??rales d???utilisation ci-apr??s d??crites. Ces conditions d???utilisation sont susceptibles d?????tre modifi??es ou compl??t??es ?? tout moment, les utilisateurs de l???application SAVED sont donc invit??s ?? les consulter de mani??re r??guli??re.
            <br>
    Cette application est normalement accessible ?? tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut ??tre toutefois d??cid??e par CDOS de C??te-d???Or, qui s???efforcera alors de communiquer pr??alablement aux utilisateurs les dates et heures de l???intervention.
    <br> 
    L???application SAVED est mise ?? jour r??guli??rement par CDOS de C??te-d???Or. De la m??me mani??re, les mentions l??gales peuvent ??tre modifi??es ?? tout moment : elles s???imposent n??anmoins ?? l???utilisateur qui est invit?? ?? s???y r??f??rer le plus souvent possible afin d???en prendre connaissance.
</p> 
        </div>
        <div class=\"question-container\">
            <h3>Propri??t?? intellectuelle et contrefa??ons</h3>  
            <p>Le CDOS de C??te-d???Or est propri??taire des droits de propri??t?? intellectuelle ou d??tient les droits d???usage sur tous les ??l??ments accessibles de l???application SAVED, notamment textes, images, graphismes, logos, ic??nes, sons???
            <br>
            Toute reproduction, repr??sentation, modification, publication, adaptation de tout ou partie des ??l??ments du site, quel que soit le moyen ou le proc??d?? utilis??, est interdite, sauf autorisation ??crite pr??alable de la part du CDOS de C??te-d???Or.
            <br>
            Toute exploitation non autoris??e de l???application ou de l???un quelconque des ??l??ments qu???il contient sera consid??r??e comme constitutive d???une contrefa??on et poursuivie conform??ment aux dispositions des articles L.335-2 du Code de Propri??t?? Intellectuelle.
            </p> 
        </div>
        <div class=\"question-container\">
            <h3>Limitations de responsabilit??s</h3>  
            <p>
            Le CDOS de C??te-d???Or ne pourra en aucun cas ??tre tenu responsable des dommages directs et indirects caus??s au mat??riel de l???utilisateur, lors de l???acc??s ?? l???application SAVED, et r??sultant soit de l???utilisation d???un mat??riel ne r??pondant pas aux sp??cifications ??voqu??es au point 4, soit de l???apparition d???un bug ou d???une incompatibilit?? de l???application. 
            <br>
            Le CDOS de C??te-d???Or ne pourra ??galement pas ??tre tenu pour responsable des dommages indirects cons??cutifs ?? l???utilisation de l???application SAVED.
            <br>
            Des espaces interactifs (possibilit?? de poser des questions dans l???espace contact) sont ?? la disposition des utilisateurs. Le CDOS de C??te d'Or se r??serve le droit de supprimer, sans mise en demeure pr??alable, tout contenu d??pos?? dans cet espace qui contreviendrait ?? la l??gislation applicable en France, en particulier aux dispositions relatives ?? la protection des donn??es. Le cas ??ch??ant, le CDOS de C??te d'Or se r??serve ??galement la possibilit?? de mettre en cause la responsabilit?? civile et/ou p??nale de l???utilisateur, notamment en cas de message ?? caract??re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis?? (texte, photographie???).
            </p> 
        </div>
        <div class=\"question-container\">
    <h1 class=\"h1-faq   \">PROTECTION DES DONN??ES / RGPD</h1>  
    <p>Le Comit?? D??partemental Olympique et Sportif de C??te-d???Or s&#39;engage ?? ce que la collecte et
le traitement de vos donn??es, effectu??s ?? partir de SAVED, soient conformes au r??glement
g??n??ral sur la protection des donn??es (RGPD) et ?? la loi Informatique et Libert??s.
Aucune information personnelle n&#39;est collect??e ?? l???insu de l???utilisateur ou c??d??e ?? des tiers.
L???utilisateur dispose au sein de SAVED des outils n??cessaires lui permettant de prendre
connaissance des informations administratives de son association. Les informations ??
caract??re personnel ne sont visibles que par le ou les administrateurs des associations
auxquelles vous avez adh??r?? et le Super Administrateur g??r?? par le CDOS de C??te-d???Or.
Les donn??es personnelles recueillies dans le cadre des services propos??s sur SAVED sont
trait??es selon des protocoles s??curis??s et permettent ?? la direction de g??rer les demandes
re??ues dans ses applications informatiques.

Pour toute information ou exercice de vos droits Informatique et Libert??s sur les traitements
de donn??es personnelles g??r??s par la CNIL, vous pouvez contacter son d??l??gu?? ?? la
protection des donn??es (DPO) par courrier ??lectronique : crib.cotedor@franceolympique.com</p> 
</div>
    </div>
    

{% endblock %}
", "faq/index.html.twig", "/mnt/c/Users/CDOS 21/Desktop/Saved_Symfo/templates/faq/index.html.twig");
    }
}

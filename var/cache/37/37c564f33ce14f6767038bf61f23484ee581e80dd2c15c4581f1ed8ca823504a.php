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

/* slide.html.twig */
class __TwigTemplate_7d7aebdd9c02f2e8ca274bb9970ef526547b39fdbe6a30e6bb79b20b12376f2e extends Template
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
        // line 1
        echo "<div class=\"slide\">
    <img src=\"./dist/img/";
        // line 2
        echo twig_escape_filter($this->env, ($context["img"] ?? null), "html", null, true);
        echo "\" alt=\"";
        echo twig_escape_filter($this->env, ($context["alt"] ?? null), "html", null, true);
        echo "\">
    <a href=\"./projects/";
        // line 3
        echo twig_escape_filter($this->env, ($context["location"] ?? null), "html", null, true);
        echo "\"></a>
    <h3>";
        // line 4
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo "</h3>
    <p>";
        // line 5
        echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
        echo "</p>
</div>";
    }

    public function getTemplateName()
    {
        return "slide.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 5,  50 => 4,  46 => 3,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "slide.html.twig", "/var/www/html/templates/slide.html.twig");
    }
}

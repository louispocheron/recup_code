<?php

namespace EasyCorp\Bundle\EasyAdminBundle\Twig;

use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Dto\FieldLayoutDto;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FieldLayoutFactory;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\DependencyInjection\ServiceLocator;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\Extension\ExtensionInterface;
use Twig\Extension\RuntimeExtensionInterface;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Defines the filters and functions used to render the bundle's templates.
 *
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 */
class EasyAdminTwigExtension extends AbstractExtension
{
    private ServiceLocator $serviceLocator;
    private ?CsrfTokenManagerInterface $csrfTokenManager;

    public function __construct(ServiceLocator $serviceLocator, ?CsrfTokenManagerInterface $csrfTokenManager)
    {
        $this->serviceLocator = $serviceLocator;
        $this->csrfTokenManager = $csrfTokenManager;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('ea_url', [$this, 'getAdminUrlGenerator']),
            new TwigFunction('ea_csrf_token', [$this, 'renderCsrfToken']),
            new TwigFunction('ea_call_function_if_exists', [$this, 'callFunctionIfExists'], ['needs_environment' => true, 'is_safe' => ['html' => true]]),
            new TwigFunction('ea_create_field_layout', [$this, 'createFieldLayout']),
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('ea_flatten_array', [$this, 'flattenArray']),
            new TwigFilter('ea_filesize', [$this, 'fileSize']),
            new TwigFilter('ea_apply_filter_if_exists', [$this, 'applyFilterIfExists'], ['needs_environment' => true]),
            new TwigFilter('ea_as_string', [$this, 'representAsString']),
        ];
    }

    /**
     * Transforms ['a' => 'foo', 'b' => ['c' => ['d' => 7]]] into ['a' => 'foo', 'b[c][d]' => 7]
     * It's useful to submit nested arrays (e.g. query string parameters) as form fields.
     */
    public function flattenArray($array, $parentKey = null): array
    {
        $flattenedArray = [];

        foreach ($array as $flattenedKey => $value) {
            $flattenedKey = null !== $parentKey ? sprintf('%s[%s]', $parentKey, $flattenedKey) : $flattenedKey;

            if (\is_array($value)) {
                $flattenedArray = array_merge($flattenedArray, $this->flattenArray($value, $flattenedKey));
            } else {
                $flattenedArray[$flattenedKey] = $value;
            }
        }

        return $flattenedArray;
    }

    public function fileSize(int $bytes): string
    {
        $size = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        $factor = (int) floor(log($bytes) / log(1024));

        return (int) ($bytes / (1024 ** $factor)).@$size[$factor];
    }

    // Code adapted from https://stackoverflow.com/a/48606773/2804294 (License: CC BY-SA 3.0)
    public function applyFilterIfExists(Environment $environment, $value, string $filterName, ...$filterArguments)
    {
        $filter = $environment->getFilter($filterName);
        if (false === $filter || null === $filter) {
            return $value;
        }

        [$class, $method] = $filter->getCallable();
        if ($class instanceof ExtensionInterface) {
            return $filter->getCallable()($value, ...$filterArguments);
        }

        $object = $environment->getRuntime($class);
        if ($object instanceof RuntimeExtensionInterface && method_exists($object, $method)) {
            return $object->$method($value, ...$filterArguments);
        }

        return null;
    }

    public function representAsString($value): string
    {
        if (null === $value) {
            return '';
        }

        if (\is_string($value)) {
            return $value;
        }

        if (is_numeric($value)) {
            return (string) $value;
        }

        if (\is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        if (\is_array($value)) {
            return sprintf('Array (%d items)', \count($value));
        }

        if (\is_object($value)) {
            if (method_exists($value, '__toString')) {
                return (string) $value;
            }

            if (method_exists($value, 'getId')) {
                return sprintf('%s #%s', \get_class($value), $value->getId());
            }

            return sprintf('%s #%s', \get_class($value), substr(md5(spl_object_hash($value)), 0, 7));
        }

        return '';
    }

    public function callFunctionIfExists(Environment $environment, string $functionName, ...$functionArguments)
    {
        if (false === $function = $environment->getFunction($functionName)) {
            return '';
        }

        return $function->getCallable()(...$functionArguments);
    }

    public function getAdminUrlGenerator(array $queryParameters = []): AdminUrlGenerator
    {
        return $this->serviceLocator->get(AdminUrlGenerator::class)->setAll($queryParameters);
    }

    /**
     * Needed to avoid errors when calling 'csrf_token()' in Twig templates of applications that disabled CSRF protection.
     */
    public function renderCsrfToken(string $tokenId): string
    {
        try {
            return $this->csrfTokenManager?->getToken($tokenId)?->getValue() ?? '';
        } catch (\Exception) {
            return '';
        }
    }

    public function createFieldLayout(?FieldCollection $fieldDtos): FieldLayoutDto
    {
        return FieldLayoutFactory::createFromFieldDtos($fieldDtos);
    }
}

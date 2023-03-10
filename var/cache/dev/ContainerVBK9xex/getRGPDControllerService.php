<?php

namespace ContainerVBK9xex;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getRGPDControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\RGPDController' shared autowired service.
     *
     * @return \App\Controller\RGPDController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/RGPDController.php';

        $container->services['App\\Controller\\RGPDController'] = $instance = new \App\Controller\RGPDController();

        $instance->setContainer(($container->privates['.service_locator.t6xtnhZ'] ?? $container->load('get_ServiceLocator_T6xtnhZService'))->withContext('App\\Controller\\RGPDController', $container));

        return $instance;
    }
}

<?php

namespace ContainerVBK9xex;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_R_RCcWAService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.R.RCcWA' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.R.RCcWA'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'assocRepo' => ['privates', 'App\\Repository\\AssociationsRepository', 'getAssociationsRepositoryService', false],
            'paginator' => ['services', 'knp_paginator', 'getKnpPaginatorService', true],
            'repo' => ['privates', 'App\\Repository\\UserRepository', 'getUserRepositoryService', true],
        ], [
            'assocRepo' => 'App\\Repository\\AssociationsRepository',
            'paginator' => '?',
            'repo' => 'App\\Repository\\UserRepository',
        ]);
    }
}

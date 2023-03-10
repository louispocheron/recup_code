<?php

namespace ContainerVBK9xex;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_W9CZaY8Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.W9CZaY8' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.W9CZaY8'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'actionRepo' => ['privates', 'App\\Repository\\ActionRepository', 'getActionRepositoryService', true],
            'em' => ['services', 'doctrine.orm.default_entity_manager', 'getDoctrine_Orm_DefaultEntityManagerService', false],
            'repo' => ['privates', 'App\\Repository\\AssociationsRepository', 'getAssociationsRepositoryService', false],
            'userRepo' => ['privates', 'App\\Repository\\UserRepository', 'getUserRepositoryService', true],
        ], [
            'actionRepo' => 'App\\Repository\\ActionRepository',
            'em' => '?',
            'repo' => 'App\\Repository\\AssociationsRepository',
            'userRepo' => 'App\\Repository\\UserRepository',
        ]);
    }
}

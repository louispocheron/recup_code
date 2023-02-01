<?php

namespace ContainerVBK9xex;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getResetPasswordRequestRepositoryService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'App\Repository\ResetPasswordRequestRepository' shared autowired service.
     *
     * @return \App\Repository\ResetPasswordRequestRepository
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfonycasts/reset-password-bundle/src/Persistence/ResetPasswordRequestRepositoryInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfonycasts/reset-password-bundle/src/Persistence/Repository/ResetPasswordRequestRepositoryTrait.php';
        include_once \dirname(__DIR__, 4).'/src/Repository/ResetPasswordRequestRepository.php';

        return $container->privates['App\\Repository\\ResetPasswordRequestRepository'] = new \App\Repository\ResetPasswordRequestRepository(($container->services['doctrine'] ?? $container->getDoctrineService()));
    }
}

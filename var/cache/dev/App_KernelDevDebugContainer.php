<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerVBK9xex\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerVBK9xex/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerVBK9xex.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerVBK9xex\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerVBK9xex\App_KernelDevDebugContainer([
    'container.build_hash' => 'VBK9xex',
    'container.build_id' => '99eaaf98',
    'container.build_time' => 1674808095,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerVBK9xex');

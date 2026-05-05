-- CreateTable
CREATE TABLE `t_marcas` (
    `id_marca` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre_marca` VARCHAR(120) NOT NULL,
    `descripcion_marca` TEXT NULL,
    `logo_url` VARCHAR(500) NULL,
    `estado_marca` ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `uq_marcas_nombre`(`nombre_marca`),
    PRIMARY KEY (`id_marca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_categorias` (
    `id_categoria` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre_categoria` VARCHAR(120) NOT NULL,
    `id_categoria_padre` BIGINT NULL,
    `estado_categoria` ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `uq_categoria_nombre_padre`(`nombre_categoria`, `id_categoria_padre`),
    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_productos` (
    `id_producto` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre_producto` VARCHAR(200) NOT NULL,
    `descripcion_producto` TEXT NULL,
    `id_marca` BIGINT NULL,
    `id_categoria` BIGINT NOT NULL,
    `tipo_producto` ENUM('producto', 'servicio', 'insumo', 'combo') NOT NULL DEFAULT 'producto',
    `es_perecible` BOOLEAN NOT NULL DEFAULT false,
    `requiere_lote` BOOLEAN NOT NULL DEFAULT false,
    `estado_producto` ENUM('activo', 'inactivo', 'descontinuado') NOT NULL DEFAULT 'activo',
    `imagen_url` VARCHAR(500) NULL,
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    INDEX `idx_productos_nombre`(`nombre_producto`),
    INDEX `idx_productos_marca`(`id_marca`),
    INDEX `idx_productos_categoria`(`id_categoria`),
    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_producto_presentaciones` (
    `id_presentacion` BIGINT NOT NULL AUTO_INCREMENT,
    `id_producto` BIGINT NOT NULL,
    `nombre_presentacion` VARCHAR(160) NOT NULL,
    `sku` VARCHAR(80) NOT NULL,
    `codigo_barras` VARCHAR(100) NULL,
    `unidad_medida` VARCHAR(20) NOT NULL DEFAULT 'NIU',
    `factor_conversion` DECIMAL(12, 4) NOT NULL DEFAULT 1.0000,
    `controla_stock` BOOLEAN NOT NULL DEFAULT true,
    `estado_presentacion` ENUM('activo', 'inactivo', 'descontinuado') NOT NULL DEFAULT 'activo',
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `uq_presentacion_sku`(`sku`),
    INDEX `idx_presentacion_codigo_barras`(`codigo_barras`),
    INDEX `idx_presentacion_producto`(`id_producto`),
    PRIMARY KEY (`id_presentacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_producto_codigos` (
    `id_codigo` BIGINT NOT NULL AUTO_INCREMENT,
    `id_presentacion` BIGINT NOT NULL,
    `tipo_codigo` ENUM('EAN', 'UPC', 'proveedor', 'interno') NOT NULL DEFAULT 'EAN',
    `valor_codigo` VARCHAR(100) NOT NULL,
    `es_principal` BOOLEAN NOT NULL DEFAULT false,
    `estado_codigo` ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `uq_codigo_valor`(`valor_codigo`),
    INDEX `idx_codigo_presentacion`(`id_presentacion`),
    PRIMARY KEY (`id_codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_producto_precios` (
    `id_precio` BIGINT NOT NULL AUTO_INCREMENT,
    `id_presentacion` BIGINT NOT NULL,
    `precio_compra` DECIMAL(10, 2) NULL,
    `precio_venta` DECIMAL(10, 2) NOT NULL,
    `precio_mayorista` DECIMAL(10, 2) NULL,
    `cantidad_minima_mayorista` DECIMAL(12, 3) NULL,
    `moneda` CHAR(3) NOT NULL DEFAULT 'PEN',
    `incluye_igv` BOOLEAN NOT NULL DEFAULT true,
    `fecha_registro` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `uq_precio_presentacion`(`id_presentacion`),
    PRIMARY KEY (`id_precio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_roles` (
    `id_rol` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_rol` VARCHAR(50) NOT NULL,
    `estado_rol` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
    `descripcion_rol` TEXT NULL,
    `fecha_creacion` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_modificacion` DATETIME(0) NULL,

    UNIQUE INDEX `nombre_rol`(`nombre_rol`),
    INDEX `idx_estado_rol`(`estado_rol`),
    INDEX `idx_nombre_rol`(`nombre_rol`),
    PRIMARY KEY (`id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_usuario_roles` (
    `id_usuario` BIGINT NOT NULL,
    `id_rol` INTEGER NOT NULL,
    `fecha_asignacion_rol` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_revocacion_rol` DATETIME(0) NULL,
    `estado_asignacion_rol` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
    `asignado_por` BIGINT NULL,

    INDEX `fk_ur_asignado_por`(`asignado_por`),
    INDEX `fk_ur_rol`(`id_rol`),
    INDEX `idx_estado_asignacion`(`estado_asignacion_rol`),
    INDEX `idx_fecha_asignacion`(`fecha_asignacion_rol`),
    PRIMARY KEY (`id_usuario`, `id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `t_categorias` ADD CONSTRAINT `fk_categoria_padre` FOREIGN KEY (`id_categoria_padre`) REFERENCES `t_categorias`(`id_categoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_productos` ADD CONSTRAINT `fk_producto_marca` FOREIGN KEY (`id_marca`) REFERENCES `t_marcas`(`id_marca`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_productos` ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `t_categorias`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_producto_presentaciones` ADD CONSTRAINT `fk_presentacion_producto` FOREIGN KEY (`id_producto`) REFERENCES `t_productos`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_producto_codigos` ADD CONSTRAINT `fk_codigo_presentacion` FOREIGN KEY (`id_presentacion`) REFERENCES `t_producto_presentaciones`(`id_presentacion`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_producto_precios` ADD CONSTRAINT `fk_precio_presentacion` FOREIGN KEY (`id_presentacion`) REFERENCES `t_producto_presentaciones`(`id_presentacion`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `t_usuario_roles` ADD CONSTRAINT `fk_ur_asignado_por` FOREIGN KEY (`asignado_por`) REFERENCES `t_usuarios`(`id_usuario`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `t_usuario_roles` ADD CONSTRAINT `fk_ur_rol` FOREIGN KEY (`id_rol`) REFERENCES `t_roles`(`id_rol`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `t_usuario_roles` ADD CONSTRAINT `fk_ur_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `t_usuarios`(`id_usuario`) ON DELETE CASCADE ON UPDATE NO ACTION;

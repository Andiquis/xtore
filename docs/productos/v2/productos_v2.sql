--    ██╗  ██╗████████╗ ██████╗ ██████╗ ███████╗
--    ╚██╗██╔╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
--     ╚███╔╝    ██║   ██║   ██║██████╔╝█████╗  
--     ██╔██╗    ██║   ██║   ██║██╔══██╗██╔══╝  
--    ██╔╝ ██╗   ██║   ╚██████╔╝██║  ██║███████╗
--    ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
-- ==========================================================
-- Base: db_xtore
-- Module: Productos
-- Versión: 2.1.1 (Nomenclatura Estandarizada)
-- Charset: utf8mb4 / Collation: utf8mb4_unicode_ci
-- ==========================================================

-- ==========================================================
-- 1. MARCAS
-- ==========================================================
CREATE TABLE t_marcas (
  id_marca BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_marca VARCHAR(120) NOT NULL,
  descripcion_marca TEXT NULL,
  logo_url VARCHAR(500) NULL,
  estado_marca ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  UNIQUE KEY uq_marcas_nombre (nombre_marca)
);

-- ==========================================================
-- 2. CATEGORIAS
-- ==========================================================
CREATE TABLE t_categorias (
  id_categoria BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_categoria VARCHAR(120) NOT NULL,
  id_categoria_padre BIGINT NULL,
  estado_categoria ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_categoria_padre
    FOREIGN KEY (id_categoria_padre)
    REFERENCES t_categorias(id_categoria)
    ON UPDATE CASCADE
    ON DELETE SET NULL,

  UNIQUE KEY uq_categoria_nombre_padre (nombre_categoria, id_categoria_padre)
);

-- ==========================================================
-- 3. PRODUCTOS
-- ==========================================================
CREATE TABLE t_productos (
  id_producto BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_producto VARCHAR(200) NOT NULL,
  descripcion_producto TEXT NULL,

  id_marca BIGINT NULL,
  id_categoria BIGINT NOT NULL,

  tipo_producto ENUM('producto', 'servicio', 'insumo', 'combo') NOT NULL DEFAULT 'producto',
  es_perecible BOOLEAN NOT NULL DEFAULT FALSE,
  requiere_lote BOOLEAN NOT NULL DEFAULT FALSE,
  
  estado_producto ENUM('activo', 'inactivo', 'descontinuado') NOT NULL DEFAULT 'activo',
  imagen_url VARCHAR(500) NULL,

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_producto_marca
    FOREIGN KEY (id_marca)
    REFERENCES t_marcas(id_marca)
    ON UPDATE CASCADE
    ON DELETE SET NULL,

  CONSTRAINT fk_producto_categoria
    FOREIGN KEY (id_categoria)
    REFERENCES t_categorias(id_categoria)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

  INDEX idx_productos_nombre (nombre_producto),
  INDEX idx_productos_marca (id_marca),
  INDEX idx_productos_categoria (id_categoria)
);

-- ==========================================================
-- 4. PRESENTACIONES (Variantes o empaques del producto)
-- ==========================================================
CREATE TABLE t_producto_presentaciones (
  id_presentacion BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_producto BIGINT NOT NULL,

  nombre_presentacion VARCHAR(160) NOT NULL, -- Ej: "Botella 500ml", "Caja x12"
  
  sku VARCHAR(80) NOT NULL, -- Código interno principal
  codigo_barras VARCHAR(100) NULL, -- Código EAN/UPC principal

  unidad_medida VARCHAR(20) NOT NULL DEFAULT 'NIU', -- Ej: NIU (Unidades), KGM (Kilos), LTR (Litros), BX (Caja)
  factor_conversion DECIMAL(12,4) NOT NULL DEFAULT 1.0000, -- Equivalencia a la unidad base
  
  controla_stock BOOLEAN NOT NULL DEFAULT TRUE,
  
  estado_presentacion ENUM('activo', 'inactivo', 'descontinuado') NOT NULL DEFAULT 'activo',

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_presentacion_producto
    FOREIGN KEY (id_producto)
    REFERENCES t_productos(id_producto)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

  UNIQUE KEY uq_presentacion_sku (sku),
  INDEX idx_presentacion_codigo_barras (codigo_barras),
  INDEX idx_presentacion_producto (id_producto)
);

-- ==========================================================
-- 5. CÓDIGOS ALTERNATIVOS (Opcional: para múltiples códigos de barra)
-- ==========================================================
CREATE TABLE t_producto_codigos (
  id_codigo BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_presentacion BIGINT NOT NULL,

  tipo_codigo ENUM('EAN', 'UPC', 'proveedor', 'interno') NOT NULL DEFAULT 'EAN',
  valor_codigo VARCHAR(100) NOT NULL,
  
  es_principal BOOLEAN NOT NULL DEFAULT FALSE,
  estado_codigo ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_codigo_presentacion
    FOREIGN KEY (id_presentacion)
    REFERENCES t_producto_presentaciones(id_presentacion)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

  UNIQUE KEY uq_codigo_valor (valor_codigo),
  INDEX idx_codigo_presentacion (id_presentacion)
);

-- ==========================================================
-- 6. PRECIOS (Precio actual vigente)
-- ==========================================================
CREATE TABLE t_producto_precios (
  id_precio BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_presentacion BIGINT NOT NULL,

  precio_compra DECIMAL(10,2) NULL, -- Referencial de costo
  precio_venta DECIMAL(10,2) NOT NULL, -- Precio al público final
  precio_mayorista DECIMAL(10,2) NULL,
  cantidad_minima_mayorista DECIMAL(12,3) NULL,

  moneda CHAR(3) NOT NULL DEFAULT 'PEN',
  incluye_igv BOOLEAN NOT NULL DEFAULT TRUE,

  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_precio_presentacion
    FOREIGN KEY (id_presentacion)
    REFERENCES t_producto_presentaciones(id_presentacion)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

  UNIQUE KEY uq_precio_presentacion (id_presentacion)
);
CREATE TABLE t_marcas (
  id_marca BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_marca VARCHAR(120) NOT NULL,
  descripcion_marca TEXT NULL,
  logo_url VARCHAR(500) NULL,
  estado_marca ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  UNIQUE KEY uq_marcas_nombre (nombre_marca)
);

CREATE TABLE t_categorias (
  id_categoria BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_categoria VARCHAR(120) NOT NULL,
  id_categoria_padre BIGINT NULL,
  nivel INT NOT NULL DEFAULT 1,
  orden INT NULL,
  estado_categoria ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo',

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_categoria_padre
    FOREIGN KEY (id_categoria_padre)
    REFERENCES t_categorias(id_categoria)
    ON UPDATE CASCADE
    ON DELETE SET NULL,

  UNIQUE KEY uq_categoria_nombre_padre (nombre_categoria, id_categoria_padre)
);

CREATE TABLE t_productos (
  id_producto BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_producto VARCHAR(200) NOT NULL,
  descripcion_producto TEXT NULL,

  id_marca BIGINT NULL,
  id_categoria BIGINT NOT NULL,
  id_subcategoria BIGINT NULL,

  tipo_producto ENUM('producto', 'servicio', 'insumo', 'combo')
    NOT NULL DEFAULT 'producto',

  es_perecible BOOLEAN NOT NULL DEFAULT FALSE,
  requiere_lote BOOLEAN NOT NULL DEFAULT FALSE,
  permite_venta_sin_stock BOOLEAN NOT NULL DEFAULT FALSE,

  estado_producto ENUM('activo', 'inactivo', 'descontinuado')
    NOT NULL DEFAULT 'activo',

  imagen_url VARCHAR(500) NULL,

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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

  CONSTRAINT fk_producto_subcategoria
    FOREIGN KEY (id_subcategoria)
    REFERENCES t_categorias(id_categoria)
    ON UPDATE CASCADE
    ON DELETE SET NULL,

  INDEX idx_productos_nombre (nombre_producto),
  INDEX idx_productos_marca (id_marca),
  INDEX idx_productos_categoria (id_categoria),
  INDEX idx_productos_subcategoria (id_subcategoria)
);

CREATE TABLE t_producto_presentaciones (
  id_presentacion BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_producto BIGINT NOT NULL,

  nombre_presentacion VARCHAR(160) NOT NULL,
  variante VARCHAR(120) NULL,

  contenido_valor DECIMAL(10,3) NULL,
  contenido_unidad ENUM('ml', 'l', 'g', 'kg', 'un', 'm') NULL,

  unidades_por_presentacion DECIMAL(10,3) NOT NULL DEFAULT 1,

  unidad_venta ENUM('unidad', 'peso', 'volumen', 'paquete', 'caja')
    NOT NULL DEFAULT 'unidad',

  unidad_inventario ENUM('unidad', 'peso', 'volumen', 'paquete', 'caja')
    NOT NULL DEFAULT 'unidad',

  factor_conversion_base DECIMAL(12,4) NOT NULL DEFAULT 1,

  sku VARCHAR(80) NOT NULL,
  controla_stock BOOLEAN NOT NULL DEFAULT TRUE,

  estado_presentacion ENUM('activo', 'inactivo', 'descontinuado')
    NOT NULL DEFAULT 'activo',

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_presentacion_producto
    FOREIGN KEY (id_producto)
    REFERENCES t_productos(id_producto)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

  UNIQUE KEY uq_presentacion_sku (sku),
  INDEX idx_presentacion_producto (id_producto),
  INDEX idx_presentacion_variante (variante)
);

CREATE TABLE t_producto_codigos (
  id_codigo BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_presentacion BIGINT NOT NULL,

  tipo_codigo ENUM('barras', 'sku', 'proveedor', 'plu', 'interno')
    NOT NULL,

  codigo VARCHAR(100) NOT NULL,
  es_principal BOOLEAN NOT NULL DEFAULT FALSE,

  estado_codigo ENUM('activo', 'inactivo')
    NOT NULL DEFAULT 'activo',

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_codigo_presentacion
    FOREIGN KEY (id_presentacion)
    REFERENCES t_producto_presentaciones(id_presentacion)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

  UNIQUE KEY uq_codigo_valor (codigo),
  INDEX idx_codigo_presentacion (id_presentacion),
  INDEX idx_codigo_tipo (tipo_codigo)
);

CREATE TABLE t_producto_precios (
  id_precio BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_presentacion BIGINT NOT NULL,

  precio_compra_referencial DECIMAL(10,2) NULL,
  precio_venta DECIMAL(10,2) NOT NULL,
  precio_mayorista DECIMAL(10,2) NULL,
  cantidad_minima_mayorista DECIMAL(12,3) NULL,

  moneda CHAR(3) NOT NULL DEFAULT 'PEN',
  incluye_igv BOOLEAN NOT NULL DEFAULT TRUE,

  fecha_inicio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_fin DATETIME NULL,

  estado_precio ENUM('programado', 'vigente', 'vencido')
    NOT NULL DEFAULT 'vigente',

  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_precio_presentacion
    FOREIGN KEY (id_presentacion)
    REFERENCES t_producto_presentaciones(id_presentacion)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,

  INDEX idx_precio_presentacion (id_presentacion),
  INDEX idx_precio_estado (estado_precio),
  INDEX idx_precio_vigencia (fecha_inicio, fecha_fin)
);
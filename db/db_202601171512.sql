-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_xqasis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_xqasis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_xqasis` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `db_xqasis` ;

-- -----------------------------------------------------
-- Table `db_xqasis`.`t_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_usuarios` (
  `id_usuario` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `nombre_user` VARCHAR(200) NOT NULL,
  `dni_user` VARCHAR(20) NULL DEFAULT NULL,
  `email_user` VARCHAR(255) NOT NULL,
  `telefono_user` VARCHAR(20) NULL DEFAULT NULL,
  `direccion_user` TEXT NULL DEFAULT NULL,
  `foto_url_user` VARCHAR(500) NULL DEFAULT NULL,
  `password_user` VARCHAR(255) NOT NULL,
  `must_change_password` TINYINT(1) NULL DEFAULT 0,
  `email_verificado` TINYINT(1) NULL DEFAULT 0,
  `intentos_login_fallidos` INT(11) NULL DEFAULT 0,
  `bloqueado_hasta` TIMESTAMP NULL DEFAULT NULL,
  `ultimo_login` TIMESTAMP NULL DEFAULT NULL,
  `token_recuperacion` VARCHAR(100) NULL DEFAULT NULL,
  `token_expiracion` TIMESTAMP NULL DEFAULT NULL,
  `proveedor_oauth` ENUM('google', 'facebook', 'apple') NULL DEFAULT NULL,
  `sub_oauth` VARCHAR(100) NULL DEFAULT NULL,
  `activo` TINYINT(1) NULL DEFAULT 1,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `ip_registro` VARCHAR(45) NULL DEFAULT NULL,
  `user_agent` VARCHAR(500) NULL DEFAULT NULL,
  `codigo_de_invitacion` VARCHAR(50) NULL DEFAULT NULL COMMENT 'Código de invitación de la empresa para registrarse',
  `intentos_reenvio_verificacion` INT(11) NULL DEFAULT 0 COMMENT 'Contador de intentos de reenvío de código de verificación',
  `ultimo_reenvio_verificacion` TIMESTAMP NULL DEFAULT NULL COMMENT 'Fecha del último reenvío de código de verificación',
  `bloqueado_reenvio_hasta` TIMESTAMP NULL DEFAULT NULL COMMENT 'Fecha hasta la cual está bloqueado el reenvío (después de 3 intentos)',
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `email_user` (`email_user` ASC) VISIBLE,
  UNIQUE INDEX `dni_user` (`dni_user` ASC) VISIBLE,
  UNIQUE INDEX `sub_oauth` (`sub_oauth` ASC) VISIBLE,
  INDEX `idx_email_user` (`email_user` ASC) VISIBLE,
  INDEX `idx_dni_user` (`dni_user` ASC) VISIBLE,
  INDEX `idx_ultimo_login` (`ultimo_login` ASC) VISIBLE,
  INDEX `idx_fecha_creacion` (`fecha_creacion` ASC) VISIBLE,
  INDEX `idx_activo_email` (`activo` ASC, `email_user` ASC) VISIBLE,
  INDEX `idx_sub_oauth` (`sub_oauth` ASC) VISIBLE,
  INDEX `idx_codigo_invitacion` (`codigo_de_invitacion` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 39
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Usuarios del sistema con autenticación multi-factor';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_empresas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_empresas` (
  `id_empresa` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` BIGINT(20) NOT NULL,
  `codigo_de_empresa` VARCHAR(50) NOT NULL,
  `nombre_empresa` VARCHAR(200) NOT NULL,
  `ruc_empresa` VARCHAR(20) NULL DEFAULT NULL,
  `razon_social` VARCHAR(300) NULL DEFAULT NULL,
  `telefono_empresa` VARCHAR(20) NULL DEFAULT NULL,
  `email_empresa` VARCHAR(255) NULL DEFAULT NULL,
  `direccion_empresa` TEXT NULL DEFAULT NULL,
  `rubro_empresa` VARCHAR(100) NULL DEFAULT NULL,
  `estado_empresa` ENUM('pendiente', 'aprobada', 'rechazada', 'inactiva', 'suspendida') NULL DEFAULT 'pendiente',
  `fecha_registro` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_aprobacion` DATETIME NULL DEFAULT NULL,
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `logo_url` VARCHAR(500) NULL DEFAULT NULL,
  `sitio_web` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_empresa`),
  UNIQUE INDEX `ruc_empresa` (`ruc_empresa` ASC) VISIBLE,
  INDEX `idx_estado_empresa` (`estado_empresa` ASC) VISIBLE,
  INDEX `idx_nombre_empresa` (`nombre_empresa` ASC) VISIBLE,
  INDEX `idx_ruc_empresa` (`ruc_empresa` ASC) VISIBLE,
  INDEX `idx_id_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `idx_fecha_registro` (`fecha_registro` ASC) VISIBLE,
  CONSTRAINT `fk_empresa_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Empresas registradas en el sistema';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_personal` (
  `id_personal` INT(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` BIGINT(20) NOT NULL,
  `id_empresa` BIGINT(20) NULL DEFAULT NULL,
  `codigo_empleado` VARCHAR(20) NULL DEFAULT NULL,
  `cargo` VARCHAR(100) NULL DEFAULT NULL,
  `departamento` VARCHAR(100) NULL DEFAULT NULL,
  `salario` DECIMAL(10,2) NULL DEFAULT NULL,
  `moneda` ENUM('PEN', 'USD', 'EUR') NULL DEFAULT 'PEN',
  `comision_porcentaje` DECIMAL(5,2) NULL DEFAULT 0.00,
  `turno` ENUM('mañana', 'tarde', 'noche', 'rotativo') NULL DEFAULT 'mañana',
  `dias_laborales` VARCHAR(20) NULL DEFAULT '1,2,3,4,5',
  `hora_entrada_programada` TIME NULL DEFAULT '09:00:00',
  `hora_salida_programada` TIME NULL DEFAULT '18:00:00',
  `minutos_tolerancia` INT(11) NULL DEFAULT 15,
  `horario_general` VARCHAR(100) NULL DEFAULT NULL,
  `tipo_contrato` ENUM('indefinido', 'plazo_fijo', 'locacion', 'practicas') NULL DEFAULT 'plazo_fijo',
  `fecha_contratacion` DATE NULL DEFAULT NULL,
  `fecha_cese` DATE NULL DEFAULT NULL,
  `motivo_cese` TEXT NULL DEFAULT NULL,
  `estado_personal` ENUM('activo', 'inactivo', 'licencia', 'suspendido') NULL DEFAULT 'activo',
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_personal`),
  UNIQUE INDEX `codigo_empleado` (`codigo_empleado` ASC) VISIBLE,
  INDEX `idx_id_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `idx_codigo_empleado` (`codigo_empleado` ASC) VISIBLE,
  INDEX `idx_cargo` (`cargo` ASC) VISIBLE,
  INDEX `idx_turno` (`turno` ASC) VISIBLE,
  INDEX `idx_id_empresa` (`id_empresa` ASC) VISIBLE,
  INDEX `idx_estado_personal` (`estado_personal` ASC) VISIBLE,
  INDEX `idx_empresa_estado` (`id_empresa` ASC, `estado_personal` ASC) VISIBLE,
  CONSTRAINT `fk_personal_empresa`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `db_xqasis`.`t_empresas` (`id_empresa`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_personal_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Personal y empleados del sistema';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_sucursales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_sucursales` (
  `id_sucursal` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id_empresa` BIGINT(20) NOT NULL,
  `codigo_sucursal` VARCHAR(20) NOT NULL,
  `nombre_sucursal` VARCHAR(150) NOT NULL,
  `direccion_sucursal` TEXT NULL DEFAULT NULL,
  `telefono_sucursal` VARCHAR(20) NULL DEFAULT NULL,
  `email_sucursal` VARCHAR(255) NULL DEFAULT NULL,
  `ciudad_sucursal` VARCHAR(100) NULL DEFAULT NULL,
  `departamento_sucursal` VARCHAR(100) NULL DEFAULT NULL,
  `pais_sucursal` VARCHAR(100) NULL DEFAULT 'Perú',
  `latitud` DECIMAL(10,8) NULL DEFAULT NULL,
  `longitud` DECIMAL(11,8) NULL DEFAULT NULL,
  `password_sucursal` VARCHAR(255) NOT NULL,
  `primer_cambio_password` TINYINT(1) NULL DEFAULT 1,
  `estado_sucursal` ENUM('activa', 'inactiva', 'bloqueada') NULL DEFAULT 'activa',
  `es_matriz` TINYINT(1) NULL DEFAULT 0,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `creado_por` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_sucursal`),
  UNIQUE INDEX `codigo_sucursal` (`codigo_sucursal` ASC) VISIBLE,
  INDEX `fk_sucursal_creador` (`creado_por` ASC) VISIBLE,
  INDEX `idx_id_empresa` (`id_empresa` ASC) VISIBLE,
  INDEX `idx_codigo_sucursal` (`codigo_sucursal` ASC) VISIBLE,
  INDEX `idx_estado_sucursal` (`estado_sucursal` ASC) VISIBLE,
  INDEX `idx_ciudad_depto` (`ciudad_sucursal` ASC, `departamento_sucursal` ASC) VISIBLE,
  INDEX `idx_empresa_estado` (`id_empresa` ASC, `estado_sucursal` ASC) VISIBLE,
  CONSTRAINT `fk_sucursal_creador`
    FOREIGN KEY (`creado_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_sucursal_empresa`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `db_xqasis`.`t_empresas` (`id_empresa`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Sucursales de cada empresa con credenciales propias';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_asistencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_asistencia` (
  `id_asistencia` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id_personal` INT(11) NOT NULL,
  `id_sucursal` BIGINT(20) NULL DEFAULT NULL,
  `fecha` DATE NOT NULL,
  `tipo_evento` ENUM('asistencia', 'ausencia', 'vacacion', 'permiso', 'incapacidad', 'feriado', 'suspension') NULL DEFAULT 'asistencia',
  `hora_entrada_programada` TIME NULL DEFAULT NULL,
  `hora_salida_programada` TIME NULL DEFAULT NULL,
  `hora_entrada_real` TIME NULL DEFAULT NULL,
  `hora_salida_real` TIME NULL DEFAULT NULL,
  `minutos_tardanza` INT(11) NULL DEFAULT 0,
  `minutos_extra` INT(11) NULL DEFAULT 0,
  `horas_trabajadas` DECIMAL(4,2) NULL DEFAULT NULL,
  `justificacion` TEXT NULL DEFAULT NULL,
  `observaciones` TEXT NULL DEFAULT NULL,
  `estado` ENUM('programado', 'presente', 'tardanza', 'falta', 'justificado', 'aprobado', 'rechazado') NULL DEFAULT 'programado',
  `aprobado_por` BIGINT(20) NULL DEFAULT NULL,
  `fecha_registro` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_asistencia`),
  INDEX `fk_asistencia_aprobador` (`aprobado_por` ASC) VISIBLE,
  INDEX `idx_id_personal` (`id_personal` ASC) VISIBLE,
  INDEX `idx_fecha` (`fecha` ASC) VISIBLE,
  INDEX `idx_tipo_evento` (`tipo_evento` ASC) VISIBLE,
  INDEX `idx_estado` (`estado` ASC) VISIBLE,
  INDEX `idx_fecha_personal` (`fecha` ASC, `id_personal` ASC) VISIBLE,
  INDEX `idx_tardanza` (`minutos_tardanza` ASC) VISIBLE,
  INDEX `idx_sucursal_fecha` (`id_sucursal` ASC, `fecha` ASC) VISIBLE,
  CONSTRAINT `fk_asistencia_aprobador`
    FOREIGN KEY (`aprobado_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_asistencia_personal`
    FOREIGN KEY (`id_personal`)
    REFERENCES `db_xqasis`.`t_personal` (`id_personal`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_asistencia_sucursal`
    FOREIGN KEY (`id_sucursal`)
    REFERENCES `db_xqasis`.`t_sucursales` (`id_sucursal`)
    ON DELETE SET NULL)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Registro de asistencia y horarios del personal';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_ciclos_facturacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_ciclos_facturacion` (
  `id_ciclo` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `periodo` VARCHAR(7) NOT NULL,
  `fecha_cierre` DATE NOT NULL,
  `fecha_bloqueo` DATE NOT NULL,
  PRIMARY KEY (`id_ciclo`),
  UNIQUE INDEX `periodo` (`periodo` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_facturas` (
  `id_factura` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `empresa_id` BIGINT(20) NULL DEFAULT NULL,
  `sucursal_id` BIGINT(20) NULL DEFAULT NULL,
  `periodo` VARCHAR(7) NOT NULL,
  `monto` DECIMAL(10,2) NOT NULL,
  `estado` ENUM('pendiente', 'pagado', 'vencido') NOT NULL DEFAULT 'pendiente',
  `fecha_pago` DATETIME NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_factura`),
  INDEX `idx_facturas_empresa` (`empresa_id` ASC) VISIBLE,
  INDEX `idx_facturas_sucursal` (`sucursal_id` ASC) VISIBLE,
  INDEX `idx_facturas_periodo` (`periodo` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_pagos` (
  `id_pago` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `factura_id` BIGINT(20) NOT NULL,
  `origen_pago` ENUM('culqi', 'simulacion') NOT NULL,
  `datos_json` TEXT NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_pago`),
  INDEX `idx_pagos_factura` (`factura_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_reglas_empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_reglas_empresa` (
  `id_regla` INT(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` BIGINT(20) NOT NULL,
  `tolerancia_global_minutos` INT(11) NULL DEFAULT 10,
  `deduccion_por_tardanza` DECIMAL(10,2) NULL DEFAULT 0.00,
  `deduccion_por_falta` DECIMAL(10,2) NULL DEFAULT 0.00,
  `max_faltas_mensuales` INT(11) NULL DEFAULT 3,
  `horas_extras_permitidas` INT(11) NULL DEFAULT 10,
  `pago_hora_extra_porcentaje` DECIMAL(5,2) NULL DEFAULT 25.00,
  `dias_vacaciones_anuales` INT(11) NULL DEFAULT 30,
  `observaciones` TEXT NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_regla`),
  INDEX `fk_regla_modificador` (`modificado_por` ASC) VISIBLE,
  INDEX `idx_empresa_regla` (`id_empresa` ASC) VISIBLE,
  CONSTRAINT `fk_regla_empresa`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `db_xqasis`.`t_empresas` (`id_empresa`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_regla_modificador`
    FOREIGN KEY (`modificado_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Reglas y políticas laborales por empresa';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_roles` (
  `id_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_rol` VARCHAR(50) NOT NULL,
  `estado_rol` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
  `descripcion_rol` TEXT NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_modificacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_rol`),
  UNIQUE INDEX `nombre_rol` (`nombre_rol` ASC) VISIBLE,
  INDEX `idx_nombre_rol` (`nombre_rol` ASC) VISIBLE,
  INDEX `idx_estado_rol` (`estado_rol` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 47
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Roles del sistema con permisos específicos';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_solicitudes_admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_solicitudes_admin` (
  `id_solicitud` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` BIGINT(20) NOT NULL,
  `token_aprobacion` VARCHAR(255) NOT NULL,
  `mensaje_solicitante` TEXT NULL DEFAULT NULL,
  `estado` ENUM('pendiente', 'aprobado', 'rechazado') NULL DEFAULT 'pendiente',
  `fecha_solicitud` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_respuesta` TIMESTAMP NULL DEFAULT NULL,
  `aprobado_por` BIGINT(20) NULL DEFAULT NULL,
  `motivo_rechazo` TEXT NULL DEFAULT NULL,
  `ip_solicitud` VARCHAR(45) NULL DEFAULT NULL,
  `user_agent` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_solicitud`),
  UNIQUE INDEX `token_aprobacion` (`token_aprobacion` ASC) VISIBLE,
  INDEX `idx_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `idx_token` (`token_aprobacion` ASC) VISIBLE,
  INDEX `idx_estado` (`estado` ASC) VISIBLE,
  INDEX `idx_fecha_solicitud` (`fecha_solicitud` ASC) VISIBLE,
  INDEX `fk_solicitud_aprobador` (`aprobado_por` ASC) VISIBLE,
  CONSTRAINT `fk_solicitud_aprobador`
    FOREIGN KEY (`aprobado_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_solicitud_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_solicitudes_sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_solicitudes_sucursal` (
  `id_solicitud` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` BIGINT(20) NOT NULL,
  `codigo_sucursal` VARCHAR(20) NOT NULL,
  `id_sucursal` BIGINT(20) NOT NULL,
  `estado` ENUM('pendiente', 'aprobada', 'rechazada') NOT NULL DEFAULT 'pendiente',
  `mensaje_usuario` TEXT NULL DEFAULT NULL COMMENT 'Mensaje opcional del usuario',
  `motivo_rechazo` TEXT NULL DEFAULT NULL,
  `fecha_solicitud` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_respuesta` DATETIME NULL DEFAULT NULL,
  `respondido_por` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_solicitud`),
  UNIQUE INDEX `uk_usuario_sucursal` (`id_usuario` ASC, `id_sucursal` ASC) COMMENT '\'Un usuario no puede solicitar 2 veces a la misma sucursal\'' VISIBLE,
  INDEX `idx_codigo_sucursal` (`codigo_sucursal` ASC) VISIBLE,
  INDEX `idx_sucursal` (`id_sucursal` ASC) VISIBLE,
  INDEX `idx_estado` (`estado` ASC) VISIBLE,
  INDEX `idx_fecha` (`fecha_solicitud` ASC) VISIBLE,
  INDEX `fk_sol_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_sol_sucursal` (`id_sucursal` ASC) VISIBLE,
  INDEX `fk_sol_respondedor` (`respondido_por` ASC) VISIBLE,
  CONSTRAINT `fk_sol_respondedor`
    FOREIGN KEY (`respondido_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_sol_sucursal`
    FOREIGN KEY (`id_sucursal`)
    REFERENCES `db_xqasis`.`t_sucursales` (`id_sucursal`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_sol_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Solicitudes de usuarios para unirse a sucursales';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_sucursal_personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_sucursal_personal` (
  `id_sucursal` BIGINT(20) NOT NULL,
  `id_personal` INT(11) NOT NULL,
  `fecha_asignacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_desasignacion` DATETIME NULL DEFAULT NULL,
  `estado_asignacion` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
  `es_responsable` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id_sucursal`, `id_personal`),
  INDEX `fk_sp_personal` (`id_personal` ASC) VISIBLE,
  INDEX `idx_estado_asignacion` (`estado_asignacion` ASC) VISIBLE,
  INDEX `idx_fecha_asignacion` (`fecha_asignacion` ASC) VISIBLE,
  CONSTRAINT `fk_sp_personal`
    FOREIGN KEY (`id_personal`)
    REFERENCES `db_xqasis`.`t_personal` (`id_personal`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_sp_sucursal`
    FOREIGN KEY (`id_sucursal`)
    REFERENCES `db_xqasis`.`t_sucursales` (`id_sucursal`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Asignación de personal a sucursales';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_superadmin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_superadmin` (
  `id_superadmin` INT(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` BIGINT(20) NOT NULL,
  `login_facial` LONGBLOB NULL DEFAULT NULL,
  `verificacion_segunda_capa` TINYINT(1) NULL DEFAULT 0,
  `auditoria_extendida` TINYINT(1) NULL DEFAULT 1,
  `clave_maestra_hash` VARCHAR(255) NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id_superadmin`),
  UNIQUE INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `idx_id_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_root_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Información adicional de seguridad para superadministradores';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_usuario_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_usuario_roles` (
  `id_usuario` BIGINT(20) NOT NULL,
  `id_rol` INT(11) NOT NULL,
  `fecha_asignacion_rol` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `fecha_revocacion_rol` DATETIME NULL DEFAULT NULL,
  `estado_asignacion_rol` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
  `asignado_por` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`, `id_rol`),
  INDEX `fk_ur_rol` (`id_rol` ASC) VISIBLE,
  INDEX `fk_ur_asignado_por` (`asignado_por` ASC) VISIBLE,
  INDEX `idx_estado_asignacion` (`estado_asignacion_rol` ASC) VISIBLE,
  INDEX `idx_fecha_asignacion` (`fecha_asignacion_rol` ASC) VISIBLE,
  CONSTRAINT `fk_ur_asignado_por`
    FOREIGN KEY (`asignado_por`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_ur_rol`
    FOREIGN KEY (`id_rol`)
    REFERENCES `db_xqasis`.`t_roles` (`id_rol`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_ur_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Relación muchos a muchos entre usuarios y roles';


-- -----------------------------------------------------
-- Table `db_xqasis`.`t_verification_codes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xqasis`.`t_verification_codes` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT(20) NOT NULL,
  `code` VARCHAR(6) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `type` ENUM('registro', 'recuperacion') NULL DEFAULT 'registro',
  `usado` TINYINT(1) NULL DEFAULT 0,
  `expires_at` TIMESTAMP NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  INDEX `idx_user_code` (`user_id` ASC, `code` ASC) VISIBLE,
  INDEX `idx_expiration` (`expires_at` ASC) VISIBLE,
  INDEX `idx_email_type` (`email` ASC, `type` ASC, `usado` ASC) VISIBLE,
  CONSTRAINT `fk_verification_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_xqasis`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 39
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Códigos de verificación por email';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



CREATE TABLE IF NOT EXISTS t_landing_conf (
    id_landing INT AUTO_INCREMENT PRIMARY KEY,
    nombre_empresa VARCHAR(200) NOT NULL,
    año YEAR NULL,
    logo_empresa VARCHAR(500) NULL,
    logo_secundario VARCHAR(500) NULL,
    fondo VARCHAR(500) NULL,
    direccion_empresa TEXT NULL,
    email VARCHAR(255) NULL,
    telefono VARCHAR(50) NULL,
    tema_visual ENUM('claro','oscuro') DEFAULT 'claro',
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS t_landing_articulos (
    id_articulo INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(200) NOT NULL,
    logo VARCHAR(500) NULL,
    descripcion TEXT NULL,
    precio DECIMAL(10,2) NULL,
    disponible ENUM('si','no') DEFAULT 'si',
    tipo ENUM('producto','promocion') DEFAULT 'producto',
    orden INT DEFAULT 0,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS t_landing_testimonios (
    id_testimonio INT AUTO_INCREMENT PRIMARY KEY,
    usuario_nombre VARCHAR(200) NOT NULL,
    perfil VARCHAR(200) NULL,
    comentario TEXT NOT NULL,
    fecha DATE NULL,
    calificacion INT NULL,
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS t_landing_redes_sociales (
    id_red_social INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    logo VARCHAR(500) NULL,
    direccion VARCHAR(500) NOT NULL,
    activo TINYINT(1) DEFAULT 1,
    orden INT DEFAULT 0,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


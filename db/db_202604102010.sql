CREATE DATABASE IF NOT EXISTS db_xtore;
USE db_xtore;

-- -----------------------------------------------------
-- Table `db_xtore`.`t_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xtore`.`t_usuarios` (
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
-- Table `db_xtore`.`t_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xtore`.`t_roles` (
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
-- Table `db_xtore`.`t_usuario_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_xtore`.`t_usuario_roles` (
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
    REFERENCES `db_xtore`.`t_usuarios` (`id_usuario`)
    ON DELETE SET NULL,
  CONSTRAINT `fk_ur_rol`
    FOREIGN KEY (`id_rol`)
    REFERENCES `db_xtore`.`t_roles` (`id_rol`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_ur_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_xtore`.`t_usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'Relación muchos a muchos entre usuarios y roles';


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

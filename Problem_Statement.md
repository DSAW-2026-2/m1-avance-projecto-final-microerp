# Problem Statement Document: MicroERP

## Declaración del Problema y Usuario Objetivo (Problem Statement)
### Usuario Objetivo
Dueños y empleados de pequeñas y medianas empresas del sector minorista, tales como minimarkets, tiendas de conveniencia, ferreterías y abarrotes.
### El Problema Identificable
Actualmente, una gran parte de los pequeños comercios gestiona su inventario y registro de ventas utilizando métodos manuales (libretas de papel) o sistemas digitales rudimentarios y desconectados (archivos de hojas de cálculo locales). Esto genera tres problemas críticos:
- Descontrol de caducidades y mermas: La imposibilidad de rastrear fechas de vencimiento y lotes de forma automatizada provoca que productos perecederos caduquen en los estantes, generando pérdidas económicas directas.
- Falta de concurrencia y seguridad: Imposibilidad de que múltiples empleados operen el inventario simultáneamente sin riesgo de sobrescribir archivos, sumado a la falta de privacidad en datos financieros sensibles.
- Descuadre operativo: Pérdida de control sobre las existencias reales y la ubicación física de los productos en la tienda o bodega, lo que resulta en ventas perdidas por falta de stock.
Solución Propuesta (MicroERP): Un sistema integral que centraliza la base de datos de productos, automatiza el rastreo de lotes y caducidades, y permite la operación simultánea de varios usuarios mediante un sistema de roles estructurado.

## Justificación Tecnológica: Por qué una App Web
La implementación de MicroERP como una aplicación web es la solución idónea, superando a las alternativas más simples por las siguientes razones:
•	Frente a una Hoja de Cálculo (Excel/Google Sheets): Una hoja de cálculo no escala adecuadamente para la manipulación concurrente ni para generar alertas automáticas de vencimiento en segundo plano. Además, carece de un sistema robusto de permisos, dejando datos sensibles (como los costos de proveedor) expuestos a cualquier empleado.
•	Frente a una Aplicación Móvil Nativa (Mobile-only): El ingreso inicial del catálogo de una tienda implica registrar cientos de códigos de barras, ubicaciones, lotes, proveedores y fechas de caducidad. Esta tarea de captura masiva de datos es ineficiente y propensa a errores en la pantalla táctil de un dispositivo móvil.
•	La Ventaja Web: Una aplicación web permite al personal de mostrador utilizar teclados físicos y lectores de códigos de barras conectados a una PC de escritorio para agilizar la operación diaria, mientras permite al dueño del negocio o administrador monitorear las alertas de stock desde cualquier navegador, ya sea en una computadora o en su teléfono, sin requerir instalaciones previas.

## Roles de Usuario y Permisos
El sistema soporta múltiples perfiles para garantizar la seguridad y delegación de tareas, restringiendo el acceso a información confidencial.
•	Administrador (Dueño/Gerente):
Permisos: Acceso total al sistema. Puede crear, editar y eliminar productos del inventario. Tiene acceso exclusivo al dashboard de métricas financieras (ganancias, costos, valor del inventario). Puede gestionar las cuentas de otros empleados.
•	Vendedor (Cajero/Operativo):
Permisos: Acceso restringido. Puede buscar productos en el catálogo, visualizar las existencias actuales, el precio de venta al público (sin ver el costo de proveedor) y registrar la salida/venta de artículos para descontarlos del inventario general.
•	Cliente (Usuario Público - Opcional):
Permisos: Acceso de solo lectura. Puede visualizar el catálogo digital de la tienda, aplicar filtros de búsqueda por categoría o precio, y verificar la disponibilidad de un producto antes de visitar la sucursal física.

## Funcionalidades Clave Demostrables (Core Features End-to-End)
MicroERP no es un clon de ninguna plataforma comercial existente, está diseñada específicamente para resolver el flujo de trabajo de los pequeños negocios a través de tres pilares fundamentales:
- Control de Inventario: Un módulo completo que permite al negocio controlar no solo la cantidad de stock, sino también registrar lotes, asignar la ubicación física en la bodega o estante, clasificar por proveedor o marca, y registrar las fechas de vencimiento exactas de los productos.
- Alertas de Stock y Vencimiento: Un sistema de notificaciones y reportes diseñado para identificar proactivamente artículos con pocas unidades y rastrear productos perecederos próximos a vencer, permitiendo al administrador tomar decisiones (como aplicar descuentos) antes de que se conviertan en pérdidas definitivas.
- Gestión Multiusuario: Una arquitectura de accesos que separa las funciones estrictamente entre Cliente (solo lectura de catálogo), Vendedor (búsqueda y salidas de inventario) y Administrador (control total y métricas), para mantener un flujo de trabajo claro, seguro y libre de manipulaciones no autorizadas.

using System;
using System.Collections.Generic;

namespace WebAPICrud.Models;

public partial class Empleado
{
    public int IdEmpleado { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public int? Sueldo { get; set; }
}

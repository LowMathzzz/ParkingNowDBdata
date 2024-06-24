db.runCommand({collMod:"ContactosDueños",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_ContactoDueno", "NumeroContacto", "ID_Dueno"],
			properties:{
				ID_ContactoDueno:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				NumeroContacto:{bsonType:"int" , minimum:900000000, maximum:999999999 , description: "Este campo requiere un valor entero"},
				ID_Dueno:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod:"ContactosEmpleados",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_ContactoEmpleado", "NumeroContacto", "ID_Empleado"],
			properties:{
				ID_ContactoDueno:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				NumeroContacto:{bsonType:"int" , minimum:900000000, maximum:999999999 , description: "Este campo requiere un valor entero"},
				ID_Dueno:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod:"ContactosEstacionamientos",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_ContactoEstacionamiento", "NumeroContacto", "ID_Estacionamiento"],
			properties:{
				ID_ContactoEstacionamiento:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				NumeroContacto:{bsonType:"int" , minimum:900000000, maximum:999999999 , description: "Este campo requiere un valor entero"},
				ID_Dueno:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod:"ContactosUsuarios",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_ContactoUsuario", "NumeroContacto", "ID_Usuario"],
			properties:{
				ID_ContactoUsuario:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				NumeroContacto:{bsonType:"int" , minimum:900000000, maximum:999999999 , description: "Este campo requiere un valor entero"},
				ID_Usuario:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod:"Departamentos",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_Departamento", "Nombre_Departamento", "ID_Pais"],
			properties:{
				ID_Departamento:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				Nombre_Departamento:{bsonType:"string", description: "Este campo requiere un valor en cadena"},
				ID_Pais:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod:"DiasAtencion",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_DiaAtencion", "Nombre_DiaAtencion"],
			properties:{
				ID_DiaAtencion:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				Nombre_DiaAtencion:{bsonType:"string", description: "Este campo requiere un valor en cadena"},
			}
		}
	}
}),
db.runCommand({collMod:"Distritos",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_Distrito", "Nombre_Distrito", "IDProvincia"],
			properties:{
				ID_Distrito:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				Nombre_Distrito:{bsonType:"string", description: "Este campo requiere un valor en cadena"},
				IDProvincia:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod: "DueñosEstacionamientos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Dueno", "Nombre", "ApellidoPaterno", "ApellidoMaterno",
          "ID_Genero", "FechaNacimiento", "ID_TipoDocumento", "NumeroDocumento",
          "Correo", "ID_Estacionamiento", "ID_Distrito", "Direccion", "ID_Nacionalidad"
        ],
        properties: {
          ID_Dueno: {bsonType: "int", description: "Este campo requiere un valor entero"},
          Nombre: {bsonType: "string", description: "Este campo requiere un valor en cadena"},
      ApellidoPaterno: {bsonType: "string", description: "Este campo requiere un valor en cadena" },
          ApellidoMaterno: {bsonType: "string", description: "Este campo requiere un valor en cadena" },
      ID_Genero: {bsonType: "int", description: "Este campo requiere un valor entero"},
          FechaNacimiento: {bsonType: "date", description: "Este campo requiere un valor de fecha"},
          ID_TipoDocumento: {bsonType: "int", description: "Este campo requiere un valor entero"},
      NumeroDocumento: {bsonType: "int", description: "Este campo requiere un valor entero"},
          Correo: {bsonType: "string", description: "Este campo requiere un valor en cadena"},
          ID_Estacionamiento: {bsonType: "int", description: "Este campo requiere un valor entero"},
          ID_Distrito: {bsonType: "int", description: "Este campo requiere un valor entero"},
          Direccion: {bsonType: "string", description: "Este campo requiere un valor en cadena"},
          ID_Nacionalidad: {bsonType: "int", description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Empleados",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Empleado", "Nombre", "ApellidoPaterno", "ApellidoMaterno",
          "ID_Genero", "FechaNacimiento", "ID_TipoDocumento", "NumeroDocumento",
          "Correo", "ID_Estacionamiento", "ID_Distrito", "Direccion", "ID_Nacionalidad"
        ],
        properties: {
          ID_Empleado: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ApellidoPaterno: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ApellidoMaterno: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ID_Genero: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          FechaNacimiento: {
            bsonType: "date",
            description: "Este campo requiere un valor de fecha"
          },
          ID_TipoDocumento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          NumeroDocumento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Correo: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Distrito: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Direccion: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ID_Nacionalidad: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod:"Empleados_TiposEmpleos",
	validator:{
		$jsonSchema:{bsonType:"object", required:["ID_TipoEmpleo", "ID_Empleado"],
			properties:{
				ID_TipoEmpleo:{bsonType:"int", description: "Este campo requiere un valor en entero"},
				ID_Empleado:{bsonType:"int", description: "Este campo requiere un valor entero"},
			}
		}
	}
}),
db.runCommand({collMod: "Estacionamientos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Estacionamiento", "Nombre_Estacionamiento", "Disponibilidad",
          "PrecioReserva", "Descripcion", "ID_Distrito", "Direccion"
        ],
        properties: {
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_Estacionamiento: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          Disponibilidad: {
            bsonType: "bool",
            description: "Este campo requiere un valor booleano"
          },
          PrecioReserva: {
            bsonType: "double",
            description: "Este campo requiere un valor numérico de punto flotante"
          },
          Descripcion: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          },
          ID_Distrito: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Direccion: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Estacionamientos_Servicios",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Estacionamiento", "ID_Servicio"
        ],
        properties: {
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Servicio: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Generos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Genero", "Nombre_Genero"
        ],
        properties: {
          ID_Genero: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_Genero: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "HorariosDeAtencion",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_HorarioDeAtencion", "HoraApertura", "HoraCierre", "ID_Estacionamiento"
        ],
        properties: {
          ID_HorarioDeAtencion: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          HoraApertura: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena con formato de hora HH:MM:SS.sssssss"
          },
          HoraCierre: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena con formato de hora HH:MM:SS.sssssss"
          },
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "HorariosDeAtencion_DiasAtencion",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_DiaAtencion", "ID_HorarioDeAtencion"
        ],
        properties: {
          ID_DiaAtencion: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_HorarioDeAtencion: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Login",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Ingreso_Correo", "Contrasena_Numero_Doc", "ID_usuario", "ID_dueno", "ID_Empleado"],
        properties: {
          Ingreso_Correo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          Contrasena_Numero_Doc: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ID_usuario: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_dueno: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Empleado: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "MarcasVehiculos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_MarcaVehiculo", "Nombre_MarcaVehiculo"],
        properties: {
          ID_MarcaVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_MarcaVehiculo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "ModelosVehiculos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_ModeloVehiculo", "Nombre_ModeloVehiculo", "ID_MarcaVehiculo"],
        properties: {
          ID_ModeloVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_ModeloVehiculo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ID_MarcaVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Nacionalidades",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_Nacionalidad", "Nombre_Nacionalidad"],
        properties: {
          ID_Nacionalidad: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_Nacionalidad: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Paises",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_Pais", "NombrePais"],
        properties: {
          ID_Pais: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          NombrePais: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Provincias",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_Provincia", "Nombre_Provincia", "IDDepartamento"],
        properties: {
          ID_Provincia: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_Provincia: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          IDDepartamento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Reservas",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Reserva", "Fecha_Inicio", "Fecha_Fin", "ID_Usuario", "ID_TipoDePago", "ID_Estacionamiento"
        ],
        properties: {
          ID_Reserva: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Fecha_Inicio: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena con formato de fecha y hora YYYY-MM-DD HH:MM:SS"
          },
          Fecha_Fin: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena con formato de fecha y hora YYYY-MM-DD HH:MM:SS"
          },
          ID_Usuario: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_TipoDePago: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Servicios",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Servicio", "Nombre_Servicio"
        ],
        properties: {
          ID_Servicio: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_Servicio: {
            bsonType: "string",
            description: "Este campo requiere un valor en cadena"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Tarifas",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Tarifa", "ID_Estacionamiento", "ID_TipoVehiculo", "Precio"
        ],
        properties: {
          ID_Tarifa: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Estacionamiento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_TipoVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Precio: {
            bsonType: "double",
            description: "Este campo requiere un valor numérico de punto flotante"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "TiposDePago",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_TipoDePago", "Nombre_TipoDePago"],
        properties: {
          ID_TipoDePago: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_TipoDePago: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "TiposDocumentos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_TipoDocumento", "Nombre_TipoDocumento"],
        properties: {
          ID_TipoDocumento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_TipoDocumento: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "TiposEmpleos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_TipoEmpleo", "Nombre_TipoEmpleo"],
        properties: {
          ID_TipoEmpleo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_TipoEmpleo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "TiposVehiculos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["ID_TipoVehiculo", "Nombre_TipoVehiculo"],
        properties: {
          ID_TipoVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre_TipoVehiculo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Usuarios",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "ID_Usuario", "Nombre", "ApellidoPaterno", "ApellidoMaterno", "Correo", "ID_TipoDocumento", "NumeroDocumento", "FechaNacimiento", "ID_Genero", "ID_Nacionalidad", "ID_Distrito", "Direccion"
        ],
        properties: {
          ID_Usuario: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Nombre: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ApellidoPaterno: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ApellidoMaterno: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          Correo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ID_TipoDocumento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          NumeroDocumento: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          FechaNacimiento: {
            bsonType: "date",
            description: "Este campo requiere un valor de tipo fecha"
          },
          ID_Genero: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Nacionalidad: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Distrito: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          Direccion: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          }
        }
      }
    }
  }),
db.runCommand({collMod: "Vehiculos",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Placa_Vehiculo", "ID_ModeloVehiculo", "ID_TipoVehiculo", "ID_Usuario"],
        properties: {
          Placa_Vehiculo: {
            bsonType: "string",
            description: "Este campo requiere un valor de tipo string"
          },
          ID_ModeloVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_TipoVehiculo: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          },
          ID_Usuario: {
            bsonType: "int",
            description: "Este campo requiere un valor entero"
          }
        }
      }
    }
  })
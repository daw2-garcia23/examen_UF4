export const registro = {
    template: `<html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Panel</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    </head>
    <body>
      <header>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
            <div>
              <button class="btn btn-secondary ms-2">PANEL</button>
              <button class="btn btn-secondary ms-2">LOGIN</button>
              <button class="btn btn-secondary ms-2">REGISTRO</button>
            </div>
            <div>
              <span>administrador@fpllefia.com</span>
              
            </div>
          </div>
        </nav>
      </header>
      <main class="container mt-5">
        <div class="pt-5">
          <h1 class="w-100 text-center">Registro</h1>
          <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
            <label for="email" class="mt-2 form-label">User: </label>
            <input type="text" class="form-control" placeholder="usuario@mail.com">
      
            <label for="pass" class="mt-2 form-label">Contraseña: </label>
            <input type="text" class="form-control">
      
            <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
          </form>
        </div>
      </main>
      
    
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Observaciones</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Código incidencia: <span>123546</span></p>
            <label for="comentario" class="form-label">Comentario:</label> 
            <input class="form-control">Estee es un comentario sobre esta incidencia</input>
            <p class="small text-end">Autor: <span>Pepe Loco</span></p>
          </div>
          <div class="modal-footer">
    
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    
    </html>`,
    script: ()=>{

        
    }

}

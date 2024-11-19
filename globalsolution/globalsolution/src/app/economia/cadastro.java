@RestController
@RequestMapping("/api/cadastro")
public class CadastroController {

    @PostMapping
    public ResponseEntity<String> cadastrarUsuario(@RequestBody Usuario usuario) {
        // Lógica para salvar o usuário no banco de dados
        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    }
}

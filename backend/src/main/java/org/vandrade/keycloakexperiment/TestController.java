//package org.vandrade.keycloakexperiment;
//
//import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.RestTemplate;
//
////@CrossOrigin("*")
//@RestController
//public class TestController {
//    @GetMapping("/securedPage")
//    public ResponseEntity<String> securedPage(KeycloakAuthenticationToken principal) {
////        KeycloakAuthenticationToken principal = (KeycloakAuthenticationToken) request.getUserPrincipal();
////        principal.getAccount().getKeycloakSecurityContext().
////        String userId = principal.getAccount().getKeycloakSecurityContext().getIdToken().getSubject();
////
////        System.out.println(principal.);
//
//        return ResponseEntity.ok(principal.getAccount().getKeycloakSecurityContext().getIdToken().getSubject());
//    }
//
////    @CrossOrigin
//    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<String> users() {
//        RestTemplate template = new RestTemplate();
//        String result = template.getForObject("https://jsonplaceholder.typicode.com/users", String.class);
//
//        return ResponseEntity.ok(result);
//    }
//}
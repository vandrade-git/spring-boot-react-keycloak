package org.vandrade.keycloakexperiment.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class UserHandler {
    public Mono<ServerResponse> getUser(ServerRequest request) {
        return ServerResponse.ok().body(BodyInserters.fromValue("Test"));
    }
}

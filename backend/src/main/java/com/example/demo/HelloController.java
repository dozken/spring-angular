package com.example.demo;

import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Log
@Controller
@CrossOrigin
class HelloController {

    //this route is protected by X-CSRF-TOKEN
    @PostMapping("/send")
    @ResponseBody
    ResponseEntity<String> send() {
        return ResponseEntity.ok("send");
    }

    @GetMapping("/main")
    @ResponseBody
    ResponseEntity<String> main() {
        log.info("hello");
        return ResponseEntity.ok("hello and get your X-CRSF");
    }

    @GetMapping()
    @ResponseBody
    ResponseEntity<String> hello() {
        log.info("hello");
        return ResponseEntity.ok("hello and get your X-CRSF");
    }


}


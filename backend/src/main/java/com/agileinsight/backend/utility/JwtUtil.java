// package com.agileinsight.backend.utility;

// import java.security.Key;
// import java.util.Date;

// import org.springframework.stereotype.Component;

// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.security.Keys;
// import io.jsonwebtoken.security.SignatureAlgorithm;

// @Component
// public class JwtUtil {

//     private final String SECRET = "kuchbhisecretjwtkaaaaaaaaaaaaaaaaaaa";

//     private Key getSignKey() {
//         return Keys.hmacShaKeyFor(SECRET.getBytes());
//     }

//     public String generateToken(String username) {
//         return Jwts.builder()
//                 .setSubject(username)
//                 .setIssuedAt(new Date())
//                 .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hr
//                 .signWith(getSignKey(), SignatureAlgorithm.HS256)
//                 .compact();
//     }

//     public String extractUsername(String token) {
//         return Jwts.parserBuilder()
//                 .setSigningKey(getSignKey())
//                 .build()
//                 .parseClaimsJws(token)
//                 .getBody()
//                 .getSubject();
//     }

//     public boolean validateToken(String token, String username) {
//         return extractUsername(token).equals(username);
//     }
// }
package com.agileinsight.backend.utility;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private final String SECRET = "secret_key_more_than_32_characters";

    private SecretKey getSignKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    public String generateToken(String id) {
        return Jwts.builder()
                .claim("id", id)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(getSignKey())
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser()
                .verifyWith(getSignKey())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    public boolean validateToken(String token, String username) {
        String extractedUsername = extractUsername(token);
        try {
            if(extractedUsername.equals(username) && !isTokenExpired(token)) {
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;
    }

    private boolean isTokenExpired(String token) {
        Date expiration =  Jwts.parser()
            .verifyWith(getSignKey())
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getExpiration();

        return expiration.before(new Date());
    }
}
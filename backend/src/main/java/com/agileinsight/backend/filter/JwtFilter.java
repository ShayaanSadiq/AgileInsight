package com.agileinsight.backend.filter;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.agileinsight.backend.utility.JwtUtil;
import com.agileinsight.backend.config.CustomUserDetails;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                   HttpServletResponse response,
                                   FilterChain filterChain)
            throws ServletException, IOException {

        String token = null;
        String username = null;
        String id = null;
        String role = null;

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName())) {
                    token = cookie.getValue();
                }
            }
        }
        
        if (token != null) {
            try {
                username = jwtUtil.extractUsername(token);
                id = jwtUtil.extractId(token);
                role = jwtUtil.extractRole(token);
            } catch (Exception e) {
                SecurityContextHolder.clearContext();
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null && role != null) {
            if (jwtUtil.validateToken(token, username)) {

                CustomUserDetails userDetails = new CustomUserDetails(id, username, role);

                UsernamePasswordAuthenticationToken authToken = 
                    new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        List.of(new SimpleGrantedAuthority("ROLE_" + role.toUpperCase()))
                    );

                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
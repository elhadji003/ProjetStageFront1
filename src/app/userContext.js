'use client'

import React, { createContext, useState, useContext, useEffect } from 'react';

// Création du contexte utilisateur
const UserContext = createContext();

// Fournisseur de données utilisateur
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Récupération des informations de l'utilisateur à partir du localStorage lors de l'initialisation
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fonction pour sauvegarder les données utilisateur
  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction pour effacer les données utilisateur
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Rendu des enfants avec le contexte utilisateur fourni
  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte utilisateur
export const useUser = () => useContext(UserContext);
